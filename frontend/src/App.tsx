import NavBar from "./components/NavBar";
import {Routes,Route} from "react-router-dom";
import MapViewPage from "./pages/MapViewPage/MapViewPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    return (
        <div>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/map" element={<MapViewPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
