import { ChangeEvent } from "react";
import { CacheTypes } from "../../../model/Filters";
import MapFilterItem from "../../MapFilterItem";

interface Props{
    onChange: (cacheTypes: CacheTypes) => void;
    cacheTypes?: CacheTypes;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = false;

const CacheTypeFilter = ({
    onChange,
    cacheTypes,
    eventKey
}: Props) => {

    const modifyCacheTypes = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof CacheTypes;
        const value = e.target.checked;
        onChange({
            ...cacheTypes,
            [name]: value
        });
    };

    return (
        <MapFilterItem header="Kätkötyyppi" eventKey={eventKey}>
            <div className="check-box-filters">
                <div className="check-box-filter">
                    <input
                        id="vainRatkaistutMultit"
                        type="checkbox"
                        name="vainRatkaistutMultit"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.vainRatkaistutMultit || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="vainRatkaistutMultit">Vain ratkaistut multit</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="vainOmiaMerkittyjäSisältäenMultit"
                        type="checkbox"
                        name="vainOmiaMerkittyjäSisältäenMultit"
                        onChange={modifyCacheTypes}
                        checked={cacheTypes?.vainOmiaMerkittyjäSisältäenMultit || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="vainRatkaistutMultit">Vain omia merkittyjä sisältäen multit</label>
                </div>
            </div>
        </MapFilterItem>
    );
};
export default CacheTypeFilter;