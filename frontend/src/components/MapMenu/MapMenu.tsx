import "./MapMenu.scss";
import { ReactComponent as FilterLogo } from "../../images/filter.svg";
import MapTypeSelection from "../MapTypeSelection/MapTypeSelection";
import { VscGlobe } from "react-icons/vsc";
import { useState } from "react";
import MapFiltersMenu from "../MapFiltersMenu";

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
                <button className="map-menu-toolbar-item map-menu-button" onClick={showFilterMenu} aria-label="Tarkenna hakua"><FilterLogo/></button>
                <button className="map-menu-toolbar-item map-menu-button" onClick={mapTypeButtonOnClick}><VscGlobe/></button>
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
