import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CachePage from "./pages/CachePage/CachePage";
import "./styles/App.scss";
import Authorize from "./components/Authorize";
import { useContext, useEffect } from "react";
import { refreshSession } from "./api/auth";
import UserContext from "./context/UserContext";
import { FiltersContextProvider } from "./context/FiltersContextProvider";
import MapViewPage from "./pages/MapViewPage";

const unauthorizedMsg = {
    map: "Kartta näkyy vain sisäänkirjautuneille",
    cache: "Kätkön tiedot näkyvät vain sisäänkirjautuneille!"
};

function App() {

    const { setUser } = useContext(UserContext);
    
    useEffect(() => {
        refreshSession().then(usr => {
            setUser(usr);
        });
    }, [setUser]);

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<Authorize allowedRoles={["basic", "premium"]} unauthorizedMsg={unauthorizedMsg.map} />}>
                    <Route path="/map" element={<FiltersContextProvider><MapViewPage /></FiltersContextProvider>} />
                </Route>
                <Route element={<Authorize allowedRoles={["basic", "premium"]} unauthorizedMsg={unauthorizedMsg.cache} />}>
                    <Route path="/geocaches/:cacheId" element={<CachePage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
