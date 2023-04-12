import "./PublishedHiddenFilter.scss";
import { ChangeEvent, useState } from "react";
import MapFilterItem from "../../MapFilterItem";

interface Props {
    onChange: (isPublic: string, publicSince: string, publicUntil: string) => void;
    isPublic?: string | "julkaistu";
    publicSince?: string | "";
    publicUntil?: string | "";
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

    if(publicSince === undefined) publicSince = "";
    if(publicUntil === undefined) publicUntil = "";
    if(isPublic === undefined) isPublic = "julkaistu";

    const [since, setSince] = useState(publicSince);
    const [until, setUntil] = useState(publicUntil);
    const [status, setStatus] = useState(isPublic);

    if (!isPublic) {
        isPublic = "julkaistu";
        console.log("Reset");
        setStatus(isPublic);
        onChange(isPublic, since, until);
        console.log(isPublic, since, until);
    }

    const modifyIsPublic = (e: ChangeEvent<HTMLInputElement>) => {
        const choice = e.target.value;
        console.log("isPublic:", choice);
        setStatus(choice);
        onChange(choice, since, until);
        console.log(choice, since, until);
    };

    const modifyPublicSince = (e: ChangeEvent<HTMLInputElement>) => {
        const choice = e.target.value;
        console.log("since:", choice);
        setSince(choice);
        onChange(status, choice, until);
        console.log(status, choice, until);
    };

    const modifyPublicUntil = (e: ChangeEvent<HTMLInputElement>) => {
        const choice = e.target.value;
        console.log("until:", choice);
        setUntil(choice);
        onChange(status, since, choice);
        console.log(status, since, choice);
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
                        <label htmlFor="julkaistu"> julkaistu</label>
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
                        <label htmlFor="piilotettu"> piilotettu</label>
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
                        <label htmlFor="julkaistuTaiPiilotettu"> julkaistu tai piilotettu</label>
                    </div>

                    <div className="public-text-input">
                        {"Mistä: "}
                        <input
                            name="publicSince"
                            type="text"
                            id="publicSince"
                            onChange={modifyPublicSince}
                            value={publicSince}
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
                            data-testid="public-until-input"></input>
                    </div>
                </div>
            </MapFilterItem >
        </div>
    );
};
export default PublishedHiddenFilter;
