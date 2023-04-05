import "./NameContainsFilter.scss";
import { ChangeEvent } from "react";
import MapFilterItem from "../../MapFilterItem";

interface Props {
    onChange: (nameContains: string) => void;
    nameContains?: string;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = "";

const NameContainsFilter = ({
    onChange,
    nameContains,
    eventKey
}: Props): JSX.Element => {

    const modifyEntry = (e: ChangeEvent<HTMLInputElement>) => {
        const entry = e.target.value;
        nameContains = entry;
        onChange(nameContains);
    };

    return (

        <MapFilterItem header="Nimi" eventKey={eventKey}>
            <div className="name-contains-filter">
                {"Nimi sisältää"}
                <form className="name-contains-search">
                    <input
                        name="nameContains"
                        type="text"
                        id="nameContains"
                        onChange={modifyEntry}
                        value={nameContains || DEFAULT_DISPLAY_VALUE} data-testid="name-contains-filter"></input>
                </form>
            </div>
        </MapFilterItem>
    );
};

export default NameContainsFilter;