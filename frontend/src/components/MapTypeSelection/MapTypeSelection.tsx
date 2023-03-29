import "./MapTypeSelection.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import tick from "../../images/tick.jpg";

interface Props {
    open: boolean
}

const MapTypeSelection = ({
    open
}: Props) => {
    
    const [chosen, setChosen] = useState(3);

    return(
        <div className="menu-container">
            {open? (
                <div className="map-menu">
                    <ul>
                        <DropdownItem img = {chosen==1? tick: null} id={1} text={"OSM-kartta"} />
                        <DropdownItem img = {chosen==2? tick: null} id={2} text={"ORTO-kartta"} />
                        <DropdownItem img = {chosen==3? tick: null} id={3} text={"Peruskartta"} />
                        <DropdownItem img = {chosen==4? tick: null} id={4} text={"Taustakartta"} />
                        <DropdownItem img = {chosen==5? tick: null} id={5} text={"MapAnt"} />
                        <DropdownItem img = {chosen==6? tick: null} id={6} text={"Trailmap"} />

                    </ul>
                </div>) : (
                <div></div>
            )}
        </div>
    );
};

function DropdownItem(props: any){

    return(
        <li className = "map-item">
            {props.img? (<img src={props.img}></img>): (<img />)}
            {props.text}
        </li>
    );
}

export default MapTypeSelection;
