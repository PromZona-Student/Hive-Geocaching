import {FiltersContextProvider } from "../../context/FiltersContextProvider";
import { MapContext } from "../../context/MapContext";
import MapViewPage from "../../pages/MapViewPage";
import NavBar from "../NavBar";


const MapViewPageWrapper = () => {
    return (
        <>
            <NavBar fixedTop/>
            <FiltersContextProvider>
                <MapContext>
                    <MapViewPage />
                </MapContext>
            </FiltersContextProvider>
        </>
    );
};

export default MapViewPageWrapper;