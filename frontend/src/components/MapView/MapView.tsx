import { useState, useContext, useEffect } from "react";
import { searchGeoCacheMapDetails } from "../../api/geocaches";
import { FiltersContext } from "../../context/FiltersContextProvider";
import { GeocacheMapDetails } from "../../model/Geocache";
import MapMenu from "../MapMenu";
import Map from "../Map/Map";
import { useMap } from "react-leaflet";
import { LatLng } from "leaflet";
import { DEFAULT_IS_PUBLIC } from "../../model/Filters";

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
        let kmDistance: number;
        if(!filters.isPublic) filters.isPublic = DEFAULT_IS_PUBLIC;
        if(window.screen.availWidth > window.screen.availHeight){
            kmDistance = (new LatLng(bounds.getNorthEast().lat, centerPoint.lng)).distanceTo(centerPoint) / 1000;
        }
        else{
            kmDistance = (new LatLng(centerPoint.lat, bounds.getNorthEast().lng)).distanceTo(centerPoint) / 1000;
        }
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