import "./DifficultyFilter.scss";
import { ChangeEvent } from "react";
import { Difficulty } from "../../../model/Filters";
import MapFilterItem from "../../MapFilterItem";

interface Props {
    onChange: (difficulty: Difficulty) => void;
    difficulty?: Difficulty;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = false;

const DifficultyFilter = ({
    onChange,
    difficulty,
    eventKey
}: Props) => {

    const modifyDifficulty = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.checked;
        onChange({
            ...difficulty,
            [name]: value
        });
    };

    return (

        <MapFilterItem header="Vaikeus" eventKey={eventKey}>
            <div className="check-box-filters">
                <div className="check-box-filter">
                    <input
                        id="1"
                        type="checkbox"
                        name="1"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[1] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-1"
                    />
                    <label htmlFor="1">1</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="1.5"
                        type="checkbox"
                        name="1.5"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[1.5] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-1.5"
                    />
                    <label htmlFor="1.5">1,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="2"
                        type="checkbox"
                        name="2"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[2] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-2"
                    />
                    <label htmlFor="kaksi">2</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="2.5"
                        type="checkbox"
                        name="2.5"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[2.5] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-2.5"
                    />
                    <label htmlFor="2.5">2,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="3"
                        type="checkbox"
                        name="3"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[3] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-3"
                    />
                    <label htmlFor="3">3</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="3.5"
                        type="checkbox"
                        name="3.5"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[3.5] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-3.5"
                    />
                    <label htmlFor="3.5">3,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="4"
                        type="checkbox"
                        name="4"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[4] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-4"
                    />
                    <label htmlFor="4">4</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="4.5"
                        type="checkbox"
                        name="4.5"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[4.5] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-4.5"
                    />
                    <label htmlFor="4.5">4,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="5"
                        type="checkbox"
                        name="5"
                        onChange={modifyDifficulty}
                        checked={difficulty?.[5] || DEFAULT_DISPLAY_VALUE}
                        data-testid="difficulty-5"
                    />
                    <label htmlFor="5">5</label>
                </div>
            </div>
        </MapFilterItem>
    );
};
export default DifficultyFilter;
