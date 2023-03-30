import "./MapMenu.scss";
import { ReactComponent as FilterLogo } from "../../images/filter.svg";
import globe from "../../images/globe.png";
import MapTypeSelection from "../MapTypeSelection/MapTypeSelection";
import { useState } from "react";

const MapMenu = () => {
    
    const [isOpen, setisOpen] = useState(false);

    const searchButtonOnClick = () => {
        return;
    };

    const filterButtonOnClick = () => {
        return;
    };

    const mapTypeButtonOnClick = () => {
        setisOpen(!isOpen);
        return;
    };

    return (
        <div className="map-menu-container">
            <div className="map-menu-toolbar-left">
                <button className="map-menu-toolbar-item map-menu-button" onClick={filterButtonOnClick}><FilterLogo/></button>
                <button className="map-menu-toolbar-item map-menu-button" onClick={mapTypeButtonOnClick}><img src={globe}></img></button>
                <MapTypeSelection open={isOpen} />
            </div>
            <div className="map-menu-toolbar-bottom">
                <button className="map-menu-toolbar-item map-menu-button" onClick={searchButtonOnClick}>Etsi alueelta</button>
            </div>
        </div>
    );
};

export default MapMenu;
