import "./MapMenu.scss";
import { ReactComponent as FilterLogo } from "../../images/filter.svg";
import MapTypeSelection from "../MapTypeSelection/MapTypeSelection";
import { useState } from "react";

const MapMenu = () => {
    
    const [isOpen, setisOpen] = useState(false);

    const searchButtonOnClick = () => {
        return;
    };

    const filterButtonOnClick = () => {
        setisOpen(!isOpen);
        return;
    };

    return (
        <div className="map-menu-container">
            <div className="map-menu-toolbar-left">
                <button className="map-menu-toolbar-item map-menu-button" onClick={filterButtonOnClick}><FilterLogo/></button>
                <MapTypeSelection open={isOpen} />
            </div>
            <div className="map-menu-toolbar-bottom">
                <button className="map-menu-toolbar-item map-menu-button" onClick={searchButtonOnClick}>Etsi alueelta</button>
            </div>
        </div>
    );
};

export default MapMenu;
