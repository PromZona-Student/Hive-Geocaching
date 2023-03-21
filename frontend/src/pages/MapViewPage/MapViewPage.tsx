import { useContext, useState } from "react";
import { searchGeoCaches } from "../../api/geocaches";
import Map from "../../components/Map";
import MapMenu from "../../components/MapMenu";
import { Geocache } from "../../model/Geocache";
import "./MapViewPage.scss";
import NavBar from "../../components/NavBar";
import { FiltersContext } from "../../context/FiltersContextProvider";
import { useMap } from "react-leaflet";

const MapViewPage: React.FC = () => {

    const [geoCaches, setGeoCaches] = useState<Array<Geocache>>([]);
    const { filters } = useContext(FiltersContext);
    const map = useMap();

    const searchCaches = async () => {
        const bounds = map.getBounds();
        const centerPoint = map.getCenter();
        const kmDistance = bounds.getNorthEast().distanceTo(centerPoint) / 1000;
        const caches = await searchGeoCaches({
            ...filters,
            maxDistance: kmDistance,
            centerPoint: centerPoint
        });
        console.log(caches.length);
        setGeoCaches(caches);
    };

    return (
        <>
            <NavBar fixedTop />
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
