import { SyntheticEvent } from "react";
import MapFilterItem from "../../MapFilterItem";

interface Props {
    onChange: (limit: number) => void;
    limit: number;
    eventKey: string;
}

const LimitFilter = ({
    onChange,
    limit,
    eventKey
}: Props) => {

    const modifyLimit = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        const value = parseInt(e.currentTarget.value);
        onChange(value);
    };

    return (
        <MapFilterItem header="Määrä" eventKey={eventKey}>
            {"Näytä enintään "}
            <select onChange={modifyLimit} name="amount" id="amount-filter" value={limit} data-testid="limit-filter">
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="500">500</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
            </select>
            {" kätköä"}
        </MapFilterItem>
    );
};

export default LimitFilter;