import { useContext, useEffect, useState } from "react";
import { searchGeoCacheMapDetails, searchGeoCaches } from "../../api/geocaches";
import Map from "../../components/Map";
import MapMenu from "../../components/MapMenu";
import { Geocache, GeocacheMapDetails } from "../../model/Geocache";
import "./MapViewPage.scss";
import { FiltersContext } from "../../context/FiltersContextProvider";
import { useMap } from "react-leaflet";
import { DEFAULT_IS_PUBLIC } from "../../model/Filters";

const MapViewPage = () => {

    const [geoCaches, setGeoCaches] = useState<Array<GeocacheMapDetails>>([]);
    const { filters } = useContext(FiltersContext);
    const map = useMap();

    useEffect(() => {
        searchGeoCacheMapDetails({}, "newest").then(caches => {
            setGeoCaches(caches);
        });
    }, []);

    const searchCaches = async () => {
        const bounds = map.getBounds();
        const centerPoint = map.getCenter();
        const kmDistance = bounds.getNorthEast().distanceTo(centerPoint) / 1000;
        if(!filters.isPublic) filters.isPublic = DEFAULT_IS_PUBLIC;
        const caches = await searchGeoCacheMapDetails({
            ...filters,
            maxDistance: kmDistance,
            centerPoint: centerPoint,
            isPublic: filters.isPublic
        });
        setGeoCaches(caches);
    };

    return (
        <>
            <div className="map-view-page">
                <div className="map-menu-wrapper">
                    <MapMenu onSearchClicked={searchCaches} />
                </div>
                <Map geocaches={geoCaches}/>
            </div>
        </>
    );
};

export default MapViewPage;
