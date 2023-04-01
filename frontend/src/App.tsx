import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { UserContextProvider } from "./context/UserContextProvider";
import CachePage from "./pages/CachePage/CachePage";
import MapViewPageWrapper from "./components/MapViewPageWrapper";
import "./styles/App.scss";

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/map" element={
                        <MapViewPageWrapper/>
                    } />
                    <Route path="/geocaches/:cacheId" element={<CachePage />} />
                </Routes>
            </UserContextProvider>
        </div>
    );
}

export default App;
