import "./CacheSizeFilter.scss";
import { ChangeEvent } from "react";
import { CacheSize } from "../../../model/Filters";
import MapFilterItem from "../../MapFilterItem";

interface Props{
    onChange: (size: CacheSize) => void;
    size?: CacheSize;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = false;

const CacheSizeFilter = ({
    onChange,
    size,
    eventKey
}: Props) => {

    const modifyCacheSize = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof CacheSize;
        const value = e.target.checked;
        onChange({
            ...size,
            [name]: value
        });
    };

    return (
        <MapFilterItem header="Koko" eventKey={eventKey}>
            <div className="check-box-filters">
                <div className="check-box-filter">
                    <input
                        id="mikro"
                        type="checkbox"
                        name="mikro"
                        onChange={modifyCacheSize}
                        checked={size?.mikro || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="mikro">Mikro</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="pieni"
                        type="checkbox"
                        name="pieni"
                        onChange={modifyCacheSize}
                        checked={size?.pieni || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="pieni">Pieni</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="normaali"
                        type="checkbox"
                        name="normaali"
                        onChange={modifyCacheSize}
                        checked={size?.normaali || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="normaali">Normaali</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="suuri"
                        type="checkbox"
                        name="suuri"
                        onChange={modifyCacheSize}
                        checked={size?.suuri || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="suuri">Suuri</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="virtuaali"
                        type="checkbox"
                        name="virtuaali"
                        onChange={modifyCacheSize}
                        checked={size?.virtuaali || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="virtuaali">Virtuaali</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="muu"
                        type="checkbox"
                        name="muu"
                        onChange={modifyCacheSize}
                        checked={size?.muu || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="muu">Muu</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="tuntematon"
                        type="checkbox"
                        name="tuntematon"
                        onChange={modifyCacheSize}
                        checked={size?.tuntematon || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="tuntematon">Tuntematon</label>
                </div>
            </div>
        </MapFilterItem>
    );
};
export default CacheSizeFilter;
