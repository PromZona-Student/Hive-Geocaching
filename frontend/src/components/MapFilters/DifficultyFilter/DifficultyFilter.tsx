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
        const name = e.target.name as keyof Difficulty;
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
                        id="yksi"
                        type="checkbox"
                        name="yksi"
                        onChange={modifyDifficulty}
                        checked={difficulty?.yksi || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="yksi">1</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="puolitoista"
                        type="checkbox"
                        name="puolitoista"
                        onChange={modifyDifficulty}
                        checked={difficulty?.puolitoista || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="puolitoista">1,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="kaksi"
                        type="checkbox"
                        name="kaksi"
                        onChange={modifyDifficulty}
                        checked={difficulty?.kaksi || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="kaksi">2</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="kaksijapuoli"
                        type="checkbox"
                        name="kaksijapuoli"
                        onChange={modifyDifficulty}
                        checked={difficulty?.kaksijapuoli || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="kaksijapuoli">2,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="kolme"
                        type="checkbox"
                        name="kolme"
                        onChange={modifyDifficulty}
                        checked={difficulty?.kolme || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="kolme">3</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="kolmejapuoli"
                        type="checkbox"
                        name="kolmejapuoli"
                        onChange={modifyDifficulty}
                        checked={difficulty?.kolmejapuoli || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="kolmejapuoli">3,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="neljä"
                        type="checkbox"
                        name="neljä"
                        onChange={modifyDifficulty}
                        checked={difficulty?.neljä || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="neljä">4</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="neljäjapuoli"
                        type="checkbox"
                        name="neljäjapuoli"
                        onChange={modifyDifficulty}
                        checked={difficulty?.neljäjapuoli || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="neljäjapuoli">4,5</label>
                </div>
                <div className="check-box-filter">
                    <input
                        id="viisi"
                        type="checkbox"
                        name="viisi"
                        onChange={modifyDifficulty}
                        checked={difficulty?.viisi || DEFAULT_DISPLAY_VALUE}
                    />
                    <label htmlFor="viisi">5</label>
                </div>
            </div>
        </MapFilterItem>
    );
};
export default DifficultyFilter;
