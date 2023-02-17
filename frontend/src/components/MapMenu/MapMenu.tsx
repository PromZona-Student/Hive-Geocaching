import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MapMenu.scss";

const MapMenu = () => {
    return (
        <div className="map-menu-container">
            <div className="map-menu-toolbar-left">
                <button className="map-menu-toolbar-item map-menu-button--icon">Filters</button>
            </div>
            <div className="map-menu-toolbar-bottom">
                <button className="map-menu-toolbar-item map-menu-button--icon" onClick={() => {console.log("hmm");}}>Search</button>
            </div>
        </div>
    );
};

export default MapMenu;