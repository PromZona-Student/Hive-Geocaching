import "./CacheDescriptionFilter.scss";
import { ChangeEvent } from "react";
import MapFilterItem from "../../MapFilterItem";

interface Props {
    onChange: (description: string) => void;
    description?: string;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = "";

const CacheDescriptionFilter = ({
    onChange,
    description,
    eventKey
}: Props): JSX.Element => {

    const modifyEntry = (e: ChangeEvent<HTMLInputElement>) => {
        const entry = e.target.value;
        description = entry;
        onChange(description);
    };

    return (

        <MapFilterItem header="Kuvaus" eventKey={eventKey}>
            <div className="description-contains-filter">
                {"Kuvaus sisältää"}
                <form className="description-contains-search">
                    <input
                        name="description"
                        type="text"
                        id="description"
                        onChange={modifyEntry}
                        value={description || DEFAULT_DISPLAY_VALUE} data-testid="description-contains-filter"></input>
                </form>
            </div>
        </MapFilterItem>
    );
};

export default CacheDescriptionFilter;