import "./MapMenu.scss";
import { ReactComponent as FilterLogo } from "../../images/filter.svg";
import MapTypeSelection from "../MapTypeSelection/MapTypeSelection";
import { VscGlobe } from "react-icons/vsc";
import { useState } from "react";
import MapFiltersMenu from "../MapFiltersMenu";

const MapMenu = () => {
    
    const [isOpen, setisOpen] = useState(false);

interface Props{
    onSearchClicked: () => void
}

const MapMenu = ({ onSearchClicked }: Props) => {

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
<<<<<<< HEAD
                <button className="map-menu-toolbar-item map-menu-button" onClick={filterButtonOnClick}><FilterLogo/></button>
                <button className="map-menu-toolbar-item map-menu-button" onClick={mapTypeButtonOnClick}><VscGlobe/></button>
                <MapTypeSelection open={isOpen} />
=======
                <button className="map-menu-toolbar-item map-menu-button" onClick={showFilterMenu} aria-label="Tarkenna hakua"><FilterLogo/></button>
>>>>>>> main
            </div>
            <div className="map-menu-toolbar-bottom">
                <button className="map-menu-toolbar-item map-menu-button" onClick={searchButtonOnClick}>Etsi alueelta</button>
            </div>
            <MapFiltersMenu show={showFilters} onHide={hideFilterMenu} onConfirmFilters={hideFilterMenu}/>
        </div>
    );
};

export default MapMenu;
