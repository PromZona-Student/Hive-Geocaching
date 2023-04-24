import "./MapViewPage.scss";
import { FiltersContextProvider } from "../../context/FiltersContextProvider";
import { MapContext } from "../../context/MapContext";
import NavBar from "../../components/NavBar";
import MapView from "../../components/MapView";

const MapViewPage = () => {

    return (
        <>
            <NavBar />
            <div className="map-view-page">
                <FiltersContextProvider>
                    <MapContext>
                        <MapView />
                    </MapContext>
                </FiltersContextProvider>
            </div>
        </>
    );
};

export default MapViewPage;
