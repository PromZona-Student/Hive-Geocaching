import "./MapMenu.scss";
import MapTypeSelection from "../MapTypeSelection/MapTypeSelection";
import { VscGlobe } from "react-icons/vsc";
import { BiFilterAlt } from "react-icons/bi";
import { useState } from "react";
import MapFiltersMenu from "../MapFiltersMenu";

const iconSizePx = 25;

interface Props{
    onSearchClicked: () => void
}

const MapMenu = ({ onSearchClicked }: Props) => {

    const [isOpen, setisOpen] = useState(false);

    const [showFilters, setShowFilters] = useState(false);

    const showFilterMenu = () => {
        setShowFilters(true);
    };

    const searchButtonOnClick = () => {
        onSearchClicked();
    };

    const hideFilterMenu = () => {
        setShowFilters(false);
    };

    const mapTypeButtonOnClick = () => {
        setisOpen(!isOpen);
        return;
    };

    return (
        <div className="map-menu-container">
            <div className="map-menu-toolbar-left">
                <button className="map-menu-toolbar-item map-menu-button" onClick={showFilterMenu} aria-label="Tarkenna hakua"><BiFilterAlt size={`${iconSizePx}px`}/></button>
                <button className="map-menu-toolbar-item map-menu-button" onClick={mapTypeButtonOnClick}><VscGlobe size={`${iconSizePx}px`}/></button>
                <MapTypeSelection open={isOpen} />
            </div>
            <div className="map-menu-toolbar-bottom">
                <button className="map-menu-toolbar-item map-menu-button" onClick={searchButtonOnClick}>Etsi alueelta</button>
            </div>
            <MapFiltersMenu show={showFilters} onHide={hideFilterMenu} onConfirmFilters={hideFilterMenu}/>
        </div>
    );
};

export default MapMenu;
