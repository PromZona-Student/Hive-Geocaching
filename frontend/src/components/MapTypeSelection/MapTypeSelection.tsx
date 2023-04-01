import "./MapTypeSelection.scss";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

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
        <div className="map-type-menu-container">
            {open ? (
                <div className="map-type-menu">
                    <ul>
                        <DropdownItem tick={chosen == 1 ? true : false} text={"OSM-kartta"} onClick={() => chooseMap(1)} />
                        <DropdownItem tick={chosen == 2 ? true : false} text={"ORTO-kartta"} onClick={() => chooseMap(2)} />
                        <DropdownItem tick={chosen == 3 ? true : false} text={"Peruskartta"} onClick={() => chooseMap(3)} />
                        <DropdownItem tick={chosen == 4 ? true : false} text={"Taustakartta"} onClick={() => chooseMap(4)} />
                        <DropdownItem tick={chosen == 5 ? true : false} text={"MapAnt"} onClick={() => chooseMap(5)} />
                        <DropdownItem tick={chosen == 6 ? true : false} text={"Trailmap"} onClick={() => chooseMap(6)} />

                    </ul>
                </div>) : (
                <div></div>
            )}
        </div>
    );
};

interface DropDownProps {
    tick: boolean
    text: string
    onClick: () => void
}

function DropdownItem(props: DropDownProps) {

    return (
        <li className="map-type-item" onClick={props.onClick}>
            <span className="tick">{props.tick ? <TiTick />: ""}</span>
            {props.text}
        </li>
    );
}

export default MapTypeSelection;
