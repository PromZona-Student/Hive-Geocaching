import "./MapTypeSelection.scss";
import { useState } from "react";
import tick from "../../images/tick.jpg";
import empty from "../../images/empty.png";

interface Props {
    open: boolean
}

const MapTypeSelection = ({
    open
}: Props) => {

    const [chosen, setChosen] = useState(1);

    const chooseMap = (id: number) => {
        setChosen(id);
        return;
    };

    return (
        <div className="menu-container">
            {open ? (
                <div className="map-menu">
                    <ul>
                        <DropdownItem img={chosen == 1 ? tick : empty} text={"OSM-kartta"} onClick={() => chooseMap(1)} />
                        <DropdownItem img={chosen == 2 ? tick : empty} text={"ORTO-kartta"} onClick={() => chooseMap(2)} />
                        <DropdownItem img={chosen == 3 ? tick : empty} text={"Peruskartta"} onClick={() => chooseMap(3)} />
                        <DropdownItem img={chosen == 4 ? tick : empty} text={"Taustakartta"} onClick={() => chooseMap(4)} />
                        <DropdownItem img={chosen == 5 ? tick : empty} text={"MapAnt"} onClick={() => chooseMap(5)} />
                        <DropdownItem img={chosen == 6 ? tick : empty} text={"Trailmap"} onClick={() => chooseMap(6)} />

                    </ul>
                </div>) : (
                <div></div>
            )}
        </div>
    );
};

interface DropDownProps {
    img: string
    text: string
    onClick: () => void
}

function DropdownItem(props: DropDownProps) {

    return (
        <li className="map-item" onClick={props.onClick}>
            <img src={props.img}></img>
            {props.text}
        </li>
    );
}

export default MapTypeSelection;
