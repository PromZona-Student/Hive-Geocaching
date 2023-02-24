import "./MapMenu.scss";
import { ReactComponent as FilterLogo } from "../../images/filter.svg";

const MapMenu = () => {

    const searchButtonOnClick = () => {
        return;
    };

    const filterButtonOnClick = () => {
        return;
    };

    return (
        <div className="map-menu-container">
            <div className="map-menu-toolbar-left">
                <button className="map-menu-toolbar-item map-menu-button" onClick={filterButtonOnClick}><FilterLogo/></button>
            </div>
            <div className="map-menu-toolbar-bottom">
                <button className="map-menu-toolbar-item map-menu-button" onClick={searchButtonOnClick}>Etsi alueelta</button>
            </div>
        </div>
    );
};

export default MapMenu;