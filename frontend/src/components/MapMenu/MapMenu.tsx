import "./MapMenu.scss";
import MapTypeSelection from "../MapTypeSelection/MapTypeSelection";
import { VscGlobe } from "react-icons/vsc";
import { BiFilterAlt, BiCurrentLocation } from "react-icons/bi";
import { useEffect, useState } from "react";
import MapFiltersMenu from "../MapFiltersMenu";
import React from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";


const iconSizePx = 25;

interface Props {
    onSearchClicked: () => void
}

const MapMenu = ({ onSearchClicked }: Props) => {

    const [isOpen, setisOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const map = useMap();

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

    interface MapMenuComponentProps {
        children: React.ReactNode
    }

    // Used to prevent leaflet map from reacting to click/pan etc events that happen inside the UI element
    const MapMenuComponent = ({
        children
    }: MapMenuComponentProps) => {
        const divRef = React.useRef<HTMLDivElement | null>(null);

        useEffect(() => {
            if (divRef.current) {
                L.DomEvent.disableClickPropagation(divRef.current);
                L.DomEvent.disableScrollPropagation(divRef.current);
            }
        }, [divRef]);

        return (
            <div ref={divRef} style={{ cursor: "auto" }}>
                {children}
            </div>
        );
    };

    const zoomToUser = () => {
        navigator.geolocation.getCurrentPosition((userPos) => {
            map.fitBounds([
                [userPos.coords.latitude + 0.01, userPos.coords.longitude - 0.01],
                [userPos.coords.latitude - 0.01, userPos.coords.longitude + 0.01]
            ]);
        }, null, {
            maximumAge: 0,
            timeout: 20000,
            enableHighAccuracy: true
        });
    };

    return (
        <div className="map-menu-container">
            <MapMenuComponent>
                <div className="map-menu-toolbar-left">
                    <button className="map-menu-toolbar-item map-menu-button" onClick={showFilterMenu} aria-label="Tarkenna hakua"><BiFilterAlt size={`${iconSizePx}px`} /></button>
                    <div className="map-menu-toolbar-submenu">
                        <button className="map-menu-toolbar-item map-menu-button" onClick={mapTypeButtonOnClick}><VscGlobe size={`${iconSizePx}px`} /></button>
                        <MapTypeSelection open={isOpen} />
                    </div>
                    <button className="map-menu-toolbar-item map-menu-button" onClick={zoomToUser}><BiCurrentLocation size={`${iconSizePx}px`} /></button>
                </div>
            </MapMenuComponent>
            <MapMenuComponent>
                <div className="map-menu-toolbar-bottom">
                    <button className="map-menu-toolbar-item map-menu-button" onClick={searchButtonOnClick}>Etsi alueelta</button>
                </div>
            </MapMenuComponent>
            <MapMenuComponent>
                <MapFiltersMenu show={showFilters} onHide={hideFilterMenu} onConfirmFilters={hideFilterMenu} />
            </MapMenuComponent>
        </div>
    );
};

export default MapMenu;
