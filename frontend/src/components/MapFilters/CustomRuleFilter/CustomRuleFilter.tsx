import { SyntheticEvent } from "react";
import MapFilterItem from "../../MapFilterItem";

interface Props{
    onChange: (customRule: string) => void;
    customRule: string;
    eventKey: string;
}

const CustomRuleFilter = ({
    onChange,
    customRule,
    eventKey
}: Props) => {

    const modifyCustomRule = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        const value = e.currentTarget.value;
        onChange(value);
    };

    return (
        <MapFilterItem header="Oma ehto" eventKey={eventKey}>
            <select data-testid="oma-ehto" onChange={modifyCustomRule} name="oma-ehto" id="oma-ehto-filter" value={customRule}>
                <option value="">-</option>
                <option value="Löytämättä">Löytämättä</option>
            </select>
        </MapFilterItem>
    );
};

export default CustomRuleFilter;