import { Routes, Route } from "react-router-dom";
import MapViewPage from "./pages/MapViewPage/MapViewPage";
import HomePage from "./pages/HomePage/HomePage";
import CachePage from "./pages/CachePage/CachePage";
import { FiltersContextProvider } from "./context/FiltersContextProvider";
import { MapContext } from "./context/MapContext";

function App() {
    return (
        <div>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/map" element={
                        <FiltersContextProvider>
                            <MapContext>
                                <MapViewPage />
                            </MapContext>
                        </FiltersContextProvider>
                    } />
                    <Route path="/geocaches/:cacheId" element={<CachePage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
