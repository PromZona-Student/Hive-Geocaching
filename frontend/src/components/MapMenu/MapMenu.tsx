import "./MapMenu.scss";
import { ReactComponent as FilterLogo } from "../../images/filter.svg";
import { useState } from "react";
import MapFiltersMenu from "../MapFiltersMenu";

interface Props{
    onSearchClicked: () => void
}

const MapMenu = ({ onSearchClicked }: Props) => {

    const [showFilters, setShowFilters] = useState(false);

    const handleShowFilters = () => {
        setShowFilters(true);
    };

    const handleCloseFilters = () => {
        setShowFilters(false);
    };

    const searchButtonOnClick = () => {
        onSearchClicked();
        return;
    };

    const handleConfirmFilters = () => {
        setShowFilters(false);
    };

    return (
        <div className="map-menu-container">
            <div className="map-menu-toolbar-left">
                <button className="map-menu-toolbar-item map-menu-button" onClick={handleShowFilters}><FilterLogo/></button>
            </div>
            <div className="map-menu-toolbar-bottom">
                <button className="map-menu-toolbar-item map-menu-button" onClick={searchButtonOnClick}>Etsi alueelta</button>
            </div>
            <MapFiltersMenu show={showFilters} onHide={handleCloseFilters} onConfirmFilters={handleConfirmFilters}/>
        </div>
    );
};

export default MapMenu;