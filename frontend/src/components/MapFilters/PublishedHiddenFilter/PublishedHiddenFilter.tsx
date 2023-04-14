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

let day = 0;
let month = 0;
let year = 0;

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

    const checkDate = (dateStr: string) => {
        if(dateStr === "") return true; // TODO: jos kenttä tyhjennetty, mitä tapahtuu
        
        const regex = new RegExp("([0-3]{0,1})([0-9])(.{1})([0-1]?)([0-9])(.{0,1})([0-9]{0,4})", "gm");
        const dateOk = regex.test(dateStr);
        console.log(regex);
        if(!dateOk) return false;
        const parts = dateStr.split(".");
        if(parts.length < 2 || parts.length > 3) return false;
        day = parseInt(parts[0]);
        month = parseInt(parts[1]);
        year = 0;
        console.log("day:", day, "month:", month, "year:", year);
        if(parts.length == 3) {
            year = parseInt(parts[2]);
            if(!year) year = 0;
            console.log("year:", year);
        }
        if(day < 1 || month < 1) return false;
        if(month > 12 || day > 31) return false;
        if(day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) return false;
        if(day > 29 && month == 2) return false;
        if(year > 0 && year < 100) year += 2000;
        if(year > 99 && year < 1900) return false;
        if(year > 2100) return false;
        if(month == 2 && day == 29 && year != 0 && year%400 != 0) {
            if(year%100 == 0) return false;
            if(year%4 != 0) return false;
        }

        return true;
    };

    const modifyPublicSince = (e: ChangeEvent<HTMLInputElement>) => {
        const dateStr: string = e.target.value;
        const dateOk = checkDate(dateStr);
        setSince(dateStr);
        onChange(status, dateStr, until);
        console.log(dateStr, dateOk);
    };

    const modifyPublicUntil = (e: ChangeEvent<HTMLInputElement>) => {
        const dateStr: string = e.target.value;
        const dateOk = checkDate(dateStr);
        setUntil(dateStr);
        onChange(status, since, dateStr);
        console.log(dateStr, dateOk);
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
