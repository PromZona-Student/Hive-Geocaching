import "./PublishedHiddenFilter.scss";
import { ChangeEvent, useState } from "react";
import MapFilterItem from "../../MapFilterItem";
import { DEFAULT_IS_PUBLIC, StartEndDate } from "../../../model/Filters";


interface Props {
    onChange: (isPublic: string | undefined, publicSince: StartEndDate | undefined, publicUntil: StartEndDate | undefined) => void;
    isPublic?: string;
    publicSince?: StartEndDate;
    publicUntil?: StartEndDate;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = false;
const WRONG_DATE_CONTENT = "Päivämäärä ei kelpaa";

const PublishedHiddenFilter = ({
    onChange,
    isPublic,
    publicSince,
    publicUntil, 
    eventKey
}: Props) => {

    if(!isPublic) isPublic = DEFAULT_IS_PUBLIC;

    const [sinceDay, setSinceDay] = useState(publicSince?.day || "");
    const [sinceMonth, setSinceMonth] = useState(publicSince?.month || "");
    const [sinceYear, setSinceYear] = useState(publicSince?.year || "");
    const [untilDay, setUntilDay] = useState(publicUntil?.day || "");
    const [untilMonth, setUntilMonth] = useState(publicUntil?.month || "");
    const [untilYear, setUntilYear] = useState(publicUntil?.year || "");
    const [publicHidden, setPublicHidden] = useState(isPublic);

    const [sinceAlert, setSinceAlert] = useState("");
    const [untilAlert, setUntilAlert] = useState("");

    const modifyIsPublic = (e: ChangeEvent<HTMLInputElement>) => {
        const choice: string = e.target.value;
        setPublicHidden(choice);     
        onChange(choice, publicSince, publicUntil);
    };

    const checkDay = (dayStr: string, monthStr: string) => {
        const regex = new RegExp("^([0-9]*$)");
        if(!regex.test(dayStr)) return false;
        const day = Number(dayStr);
        const month = Number(monthStr);
        if(day < 1 || day > 31) return false;
        if(day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
            return false;
        }
        if(month == 2 && day > 29) {
            return false;
        }
        return true;
    };

    const checkMonth = (monthStr: string, dayStr: string) => {  
        const regex = new RegExp("^([0-9]*$)");
        if(!regex.test(monthStr)) return false;
        const month = Number(monthStr);
        const day = Number(dayStr);
        if(month < 1 || month > 12) return false;
        if(day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) {
            return false;
        }
        if(month == 2 && day > 29) {
            return false;
        }
        return true;
    };

    const checkYear = (yearStr: string, monthStr: string, dayStr: string) => {
        const regex = new RegExp("^([0-9]*$)");
        if(!regex.test(yearStr)) return false;
        let year = Number(yearStr);
        console.log(yearStr, year);
        const month = Number(monthStr);
        const day = Number(dayStr);
        if(year < 0 || year > 2099) return false;
        if(year > 99 && year < 2000) return false;
        if(year < 100) year += 2000;
        if(month == 2 && day == 29) {
            if(year%400 != 0) {
                if(year%100 == 0) return false;
                if(year%4 != 0) return false;
            }
        }
        return true;
    };

    const modifySinceDay = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setSinceDay(value); 
        setSinceAlert("");
        let status = true;
        if(value !== "") {
            status = checkDay(value, sinceMonth);
        }
        if(!status) {
            setSinceAlert(WRONG_DATE_CONTENT);
            return;
        }
        if(!checkYear(sinceYear, sinceMonth, value)) {
            setSinceAlert(WRONG_DATE_CONTENT);
            return;
        }
        let sinceEdit: StartEndDate = {};
        if(publicSince) {
            sinceEdit = publicSince;
            sinceEdit.day = value;
        } else {
            sinceEdit = { day: value, month: "", year: "" };
        }
        publicSince = sinceEdit;
        onChange(publicHidden, sinceEdit, publicUntil);
    };

    const modifySinceMonth = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setSinceMonth(value);  
        setSinceAlert("");
        let status = true;
        if(value !== "") {
            status = checkMonth(value, sinceDay);
        }
        if(!status) {
            setSinceAlert(WRONG_DATE_CONTENT);
            return;
        }
        if(!checkYear(sinceYear, value, sinceDay)) {
            setSinceAlert(WRONG_DATE_CONTENT);
            return;
        }
        let sinceEdit: StartEndDate = {};
        if(publicSince) {
            sinceEdit = publicSince;
            sinceEdit.month = value;
        } else {
            sinceEdit = { day: "", month: value, year: "" };
        }
        publicSince = sinceEdit; 
        onChange(publicHidden, sinceEdit, publicUntil);
    };

    const modifySinceYear = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setSinceYear(value);
        setSinceAlert("");
        let status = true;
        if(value !== "") {
            status = checkYear(value, sinceMonth, sinceDay);
        }
        if(!status) {
            setSinceAlert(WRONG_DATE_CONTENT);
            return;
        }
        let sinceEdit: StartEndDate = {};
        if(publicSince) {
            sinceEdit = publicSince;
            sinceEdit.year = value;
        } else {
            sinceEdit = { day: "", month: "", year: value };
        }
        publicSince = sinceEdit;
        onChange(publicHidden, sinceEdit, publicUntil);
    };

    const modifyUntilDay = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setUntilDay(value); 
        setUntilAlert("");
        let status = true;
        if(value !== "") {
            status = checkDay(value, untilMonth);
        }
        if(!status) {
            setUntilAlert(WRONG_DATE_CONTENT);
            return;
        }
        if(!checkYear(sinceYear, sinceMonth, value)) {
            setUntilAlert(WRONG_DATE_CONTENT);
            return;
        }
        let untilEdit: StartEndDate = {};
        if(publicUntil) {
            untilEdit = publicUntil;
            untilEdit.day = value;
        } else {
            untilEdit = { day: value, month: "", year: "" };
        }
        publicUntil = untilEdit;
        onChange(publicHidden, publicSince, untilEdit);
    };

    const modifyUntilMonth = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setUntilMonth(value);  
        setUntilAlert("");
        let status = true;
        if(value !== "") {
            status = checkMonth(value, untilDay);
        }
        if(!status) {
            setUntilAlert(WRONG_DATE_CONTENT);
            return;
        }
        if(!checkYear(sinceYear, value, sinceDay)) {
            setUntilAlert(WRONG_DATE_CONTENT);
            return;
        }
        let untilEdit: StartEndDate = {};
        if(publicUntil) {
            untilEdit = publicUntil;
            untilEdit.month = value;
        } else {
            untilEdit = { day: "", month: value, year: "" };
        }
        publicUntil = untilEdit;
        onChange(publicHidden, publicSince, untilEdit);
    };

    const modifyUntilYear = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        setUntilYear(value); 
        setUntilAlert("");
        let status = true;
        if(value !== "") {
            status = checkYear(value, untilMonth, untilDay);
        }
        if(!status) {
            setUntilAlert(WRONG_DATE_CONTENT);
            return;
        }
        let untilEdit: StartEndDate = {};
        if(publicUntil) {
            untilEdit = publicUntil;
            untilEdit.year = value;
        } else {
            untilEdit = { day: "", month: "", year: value };
        }
        publicUntil = untilEdit;
        onChange(publicHidden, publicSince, untilEdit);
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
                            name="sinceDay"
                            type="text"
                            id="sinceDay"
                            onChange={modifySinceDay}
                            value={sinceDay || ""}
                            placeholder="dd"
                            data-testid="since-input-day" 
                        />
                        <input
                            name="sinceMonth"
                            type="text"
                            id="sinceMonth"
                            onChange={modifySinceMonth}
                            value={sinceMonth || ""}
                            placeholder="mm"
                            data-testid="since-input-month" 
                        />
                        <input
                            name="sinceYear"
                            type="text"
                            id="sinceYear"
                            onChange={modifySinceYear}
                            value={sinceYear || ""}
                            placeholder="yy"
                            data-testid="since-input-year" 
                        />
                        <label id="since">{sinceAlert || ""}</label>
                    </div>

                    <div className="public-text-input">
                        {"Mihin: "}
                        <input
                            name="untilDay"
                            type="text"
                            id="untilDay"
                            onChange={modifyUntilDay}
                            value={untilDay || ""}
                            placeholder="dd"
                            data-testid="until-input-day" 
                        />
                        <input
                            name="untilMonth"
                            type="text"
                            id="untilMonth"
                            onChange={modifyUntilMonth}
                            value={untilMonth || ""}
                            placeholder="mm"
                            data-testid="until-input-month" 
                        />
                        <input
                            name="untilYear"
                            type="text"
                            id="untilYear"
                            onChange={modifyUntilYear}
                            value={untilYear || ""}
                            placeholder="yy"
                            data-testid="until-input-year" 
                        />
                        <label id="until">{untilAlert || ""}</label>
                    </div>
                </div>
            </MapFilterItem >
        </div>
    );
};
export default PublishedHiddenFilter;
