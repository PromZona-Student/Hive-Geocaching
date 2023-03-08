import {Routes,Route} from "react-router-dom";
import MapViewPage from "./pages/MapViewPage/MapViewPage";
import HomePage from "./pages/HomePage/HomePage";
import { UserContextProvider } from "./Context/UserContextProvider";

function App() {
    return (
        <div>
            <UserContextProvider>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/map" element={<MapViewPage/>}/>
                    </Routes>
                </div>
            </UserContextProvider>
        </div>
    );
}

export default App;
