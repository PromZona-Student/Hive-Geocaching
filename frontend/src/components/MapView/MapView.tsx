import { useState, useContext, useEffect } from "react";
import { searchGeoCacheMapDetails } from "../../api/geocaches";
import { FiltersContext } from "../../context/FiltersContextProvider";
import { GeocacheMapDetails } from "../../model/Geocache";
import MapMenu from "../MapMenu";
import Map from "../Map/Map";
import { useMap } from "react-leaflet";

const MapView = () => {

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
        const caches = await searchGeoCacheMapDetails({...filters, maxDistance: kmDistance, centerPoint});
        setGeoCaches(caches);
    };

    return (
        <div className="map-view">
            <div className="map-menu-wrapper">
                <MapMenu onSearchClicked={searchCaches} />
            </div>
            <Map geocaches={geoCaches}/>
        </div>
    );
};

export default MapView;