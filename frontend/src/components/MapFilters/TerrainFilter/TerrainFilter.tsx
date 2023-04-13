import "./TerrainFilter.scss";
import { ChangeEvent } from "react";
import { Terrain } from "../../../model/Filters";
import MapFilterItem from "../../MapFilterItem";

interface Props {
    onChange: (terrain: Terrain) => void;
    terrain?: Terrain;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = false;

const TerrainFilter = ({
    onChange,
    terrain,
    eventKey
}: Props) => {

    const modifyTerrain = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.checked;
        onChange({
            ...terrain,
            [name]: value
        });
    };

    return (

        <MapFilterItem header="Maasto" eventKey={eventKey}>
            <div className="check-box-filters">
                <div className="check-box-filter">
                    <input
                        id="1"
                        type="checkbox"
                        name="1"
                        onChange={modifyTerrain}
                        checked={terrain?.[1] || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="1">1</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="1.5"
                        type="checkbox"
                        name="1.5"
                        onChange={modifyTerrain}
                        checked={terrain?.[1.5] || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="1.5">1,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="2"
                        type="checkbox"
                        name="2"
                        onChange={modifyTerrain}
                        checked={terrain?.[2] || DEFAULT_DISPLAY_VALUE}
                        data-testid="terrain-2"
                    />
                    <label htmlFor="2">2</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="2.5"
                        type="checkbox"
                        name="2.5"
                        onChange={modifyTerrain}
                        checked={terrain?.[2.5] || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="2.5">2,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="3"
                        type="checkbox"
                        name="3"
                        onChange={modifyTerrain}
                        checked={terrain?.[3] || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="3">3</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="3.5"
                        type="checkbox"
                        name="3.5"
                        onChange={modifyTerrain}
                        checked={terrain?.[3.5] || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="3.5">3,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="4"
                        type="checkbox"
                        name="4"
                        onChange={modifyTerrain}
                        checked={terrain?.[4] || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="4">4</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="4.5"
                        type="checkbox"
                        name="4.5"
                        onChange={modifyTerrain}
                        checked={terrain?.[4.5] || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="4.5">4,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="5"
                        type="checkbox"
                        name="5"
                        onChange={modifyTerrain}
                        checked={terrain?.[5] || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="5">5</label>
                </div>
            </div>
        </MapFilterItem>
    );
};
export default TerrainFilter;
