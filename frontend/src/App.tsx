import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import MapViewPage from "./pages/MapViewPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/map" element={<MapViewPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
