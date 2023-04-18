import { useContext, useEffect, useState } from "react";
import { searchGeoCacheMapDetails } from "../../api/geocaches";
import Map from "../../components/Map";
import MapMenu from "../../components/MapMenu";
import { GeocacheMapDetails } from "../../model/Geocache";
import "./MapViewPage.scss";
import { FiltersContext } from "../../context/FiltersContextProvider";
import { useMap } from "react-leaflet";
import { MapContext } from "../../context/MapContext";
import { LatLng, LatLngBounds } from "leaflet";
import NavBar from "../../components/NavBar";
import { DEFAULT_IS_PUBLIC } from "../../model/Filters";

const MapViewPage = () => {

    const [geoCaches, setGeoCaches] = useState<Array<GeocacheMapDetails>>([]);
    const { filters, updateFilters } = useContext(FiltersContext);

    useEffect(() => {
        searchGeoCacheMapDetails({}, "newest").then(caches => {
            setGeoCaches(caches);
        });
    }, []);

    const searchCaches = async () => {
        const caches = await searchGeoCacheMapDetails(filters);
        setGeoCaches(caches);
    };

    const updateBounds = (bounds: LatLngBounds, centerPoint: LatLng) => {
        const kmDistance = bounds.getNorthEast().distanceTo(centerPoint) / 1000;
        if(!filters.isPublic) filters.isPublic = DEFAULT_IS_PUBLIC;
        updateFilters({
            ...filters,
            maxDistance: kmDistance,
            centerPoint,
            isPublic: filters.isPublic
        });
    };

    return (
        <>
            <NavBar fixedTop />
            <div className="map-view-page">
                <div className="map-menu-wrapper">
                    <MapMenu onSearchClicked={searchCaches}/>
                </div>
                <MapContext>
                    <Map geocaches={geoCaches} onBoundsChanged={updateBounds} />
                </MapContext>
            </div>
        </>
    );
};

export default MapViewPage;
