import "./PublishedHiddenFilter.scss";
import { ChangeEvent, useState } from "react";
import MapFilterItem from "../../MapFilterItem";
import { DEFAULT_IS_PUBLIC } from "../../../model/Filters";


interface Props {
    onChange: (isPublic: string, publicSince: string | undefined, publicUntil: string | undefined) => void;
    isPublic?: string;
    publicSince?: string;
    publicUntil?: string;
    eventKey: string;
}


const DEFAULT_DISPLAY_VALUE = false;

const PublishedHiddenFilter = ({
    onChange,
    isPublic,
    publicSince,
    publicUntil,
    eventKey
}: Props) => {

    if(!isPublic) isPublic = DEFAULT_IS_PUBLIC;

    const [since, setSince] = useState(publicSince);
    const [until, setUntil] = useState(publicUntil);
    const [status, setStatus] = useState(isPublic);

    const modifyIsPublic = (e: ChangeEvent<HTMLInputElement>) => {
        const choice: string = e.target.value;
        setStatus(choice);     
        onChange(choice, since, until);
    };

    const modifyPublicSince = (e: ChangeEvent<HTMLInputElement>) => {
        const choice: string = e.target.value;
        setSince(choice);
        onChange(status, choice, until);
    };

    const modifyPublicUntil = (e: ChangeEvent<HTMLInputElement>) => {
        const choice: string = e.target.value;
        setUntil(choice);
        onChange(status, since, choice);
    };

    const isSelected = (value: string): boolean => isPublic === value;

    return (
        <div>
            <MapFilterItem header="Julkaistu/piilotettu" eventKey={eventKey}>
                <div className="published-hidden-filters">
                    {"Kätkö on"}
                    <div className="radio-button-filter">
                        <input
                            id="julkaistu"
                            type="radio"
                            name="julkaistu"
                            value="julkaistu"
                            checked={isSelected("julkaistu") || DEFAULT_DISPLAY_VALUE}
                            onChange={modifyIsPublic}
                            
                        />
                        <label htmlFor="julkaistu">julkaistu</label>
                    </div>
                    <div className="radio-button-filter">
                        <input
                            id="piilotettu"
                            type="radio"
                            name="piilotettu"
                            value="piilotettu"
                            checked={isSelected("piilotettu") || DEFAULT_DISPLAY_VALUE}
                            onChange={modifyIsPublic}
                        />
                        <label htmlFor="piilotettu">piilotettu</label>
                    </div>
                    <div className="radio-button-filter">
                        <input
                            id="julkaistuTaiPiilotettu"
                            type="radio"
                            name="julkaistuTaiPiilotettu"
                            value="julkaistuTaiPiilotettu"
                            checked={isSelected("julkaistuTaiPiilotettu") || DEFAULT_DISPLAY_VALUE}
                            onChange={modifyIsPublic}
                        />
                        <label htmlFor="julkaistuTaiPiilotettu">julkaistu tai piilotettu</label>
                    </div>

                    <div className="public-text-input">
                        {"Mistä: "}
                        <input
                            name="publicSince"
                            type="text"
                            id="publicSince"
                            onChange={modifyPublicSince}
                            value={publicSince}
                            placeholder="dd.mm.yyyy"
                            data-testid="public-since-input"></input>
                    </div>

                    <div className="public-text-input">
                        {"Mihin: "}
                        <input
                            name="publicUntil"
                            type="text"
                            id="publicUntil"
                            onChange={modifyPublicUntil}
                            value={publicUntil}
                            placeholder="dd.mm.yyyy"
                            data-testid="public-until-input"></input>
                    </div>
                </div>
            </MapFilterItem >
        </div>
    );
};
export default PublishedHiddenFilter;
