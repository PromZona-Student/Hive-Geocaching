import "./PublishedHiddenFilter.scss";
import { ChangeEvent, useState } from "react";
import MapFilterItem from "../../MapFilterItem";
import { DEFAULT_IS_PUBLIC } from "../../../model/Filters";


interface Props {
    onChange: (isPublic: string, publicSince: string | undefined, publicUntil: string | undefined, pSince: string | undefined, pUntil: string | undefined) => void;
    isPublic?: string;
    publicSince?: string;
    publicUntil?: string;
    pSince?: string;
    pUntil?: string;
    eventKey: string;
}

const DEFAULT_DISPLAY_VALUE = false;

const PublishedHiddenFilter = ({
    onChange,
    isPublic,
    publicSince,
    publicUntil,
    pSince,
    pUntil,    
    eventKey
}: Props) => {

    if(!isPublic) isPublic = DEFAULT_IS_PUBLIC;

    const [since, setSince] = useState(pSince);
    const [until, setUntil] = useState(pUntil);
    const [publicHidden, setPublic] = useState(isPublic);

    const [modifiedSince, setModifiedSince] = useState(publicSince);
    const [modifiedUntil, setModifiedUntil] = useState(publicUntil);

    const [sinceAlert, setSinceAlert] = useState("");
    const [untilAlert, setUntilAlert] = useState("");

    const modifyIsPublic = (e: ChangeEvent<HTMLInputElement>) => {
        const choice: string = e.target.value;
        setPublic(choice);     
        onChange(choice, modifiedSince, modifiedUntil, since, until);
    };

    const checkDate = (dateStr: string, location: string) => {
        if(dateStr === "") return { status: 204, date: "" };
        const wrongDateFormat = "Päivämäärän muoto on väärä";
        const wrongDateContent = "Päivämäärä on virheellinen";
        const regex = new RegExp("^([0-3]{0,1})+([0-9]{1})+([.]{1})+([0-1]{0,1})+([0-9]{1})+([.]{0,1})+([0-9]{0,4})$");
        const dateOk = regex.test(dateStr);
        //const isDateOkay = dateStr.match(regex);
        //console.log(isDateOkay, dateOk);
        //console.log(regex);
        if(!dateOk) return { status: 400, message: wrongDateFormat };

        let day = 0;
        let month = 0;
        let year = 0;

        const parts = dateStr.split(".");
        if(parts.length < 2 || parts.length > 3) return { status: 400, message: wrongDateFormat };
        day = parseInt(parts[0]);
        month = parseInt(parts[1]);
        year = -1;
        //console.log("day:", day, "month:", month, "year:", year);
        if(parts.length == 3) {
            year = parseInt(parts[2]);
            if(!year) {
                if(parts[2] == "") {
                    year = -1;
                } else {
                    year = 0;
                }
            }
            //console.log("year:", year);
        }
        if(day < 1 || month < 1) return { status: 400, message: wrongDateContent };
        if(month > 12 || day > 31) return { status: 400, message: wrongDateContent };
        if(day == 31 && (month == 4 || month == 6 || month == 9 || month == 11)) return { status: 400, message: wrongDateContent };
        if(day > 29 && month == 2) return { status: 400, message: wrongDateContent };
        if(year >= 0 && year < 100) year += 2000;
        if(year > 99 && year < 2000) return { status: 400, message: wrongDateContent };
        if(year >= 2100) return { status: 400, message: wrongDateContent };
        if(month == 2 && day == 29 && year != 0 && year%400 != 0) {
            if(year != -1) {
                if(year%100 == 0) day = 28; // All non leap years February has 28 days
                if(year%4 != 0) day = 28; // All non leap years February has 28 days
            } else {
                if(location == "until") day = 28; // February 2099 has 28 days
            } 
        }
        //console.log(year, month, day);
        if(year == -1) {
            if(location == "since") { 
                year = 2000;
            } else {
                year = 2099;
            }
        }
        //console.log(year, month, day);
        let modifiedDate = year.toString() + "-";
        if(month.toString().length == 1) modifiedDate += "0";
        modifiedDate += month.toString() + "-";
        if(day.toString().length == 1) modifiedDate += "0";
        modifiedDate += day.toString();
        //console.log(modifiedDate);

        return { status: 200, date: modifiedDate };
    };

    const modifyPublicSince = (e: ChangeEvent<HTMLInputElement>) => {
        const dateStr: string = e.target.value;
        setSince(dateStr);
        setSinceAlert("");
        const dateData = checkDate(dateStr, "since");
        if(dateData.status == 204) return;
        if(dateData.status == 200) { 
            const modifiedDate = dateData.date;
            if(modifiedDate) setModifiedSince(modifiedDate);
            onChange(publicHidden, modifiedDate, modifiedUntil, dateStr, until);
            //console.log(dateStr, modifiedDate);
        } else {
            let msg = "";
            const noMsg = "Päivämäärä ei kelpaa";
            if(dateData.status == 400) {if(dateData.message){msg = dateData.message;} else {msg = noMsg;}} else {msg = noMsg;}
            setSinceAlert(msg);
        }
        
    };

    const modifyPublicUntil = (e: ChangeEvent<HTMLInputElement>) => {
        const dateStr: string = e.target.value;
        setUntil(dateStr);
        setUntilAlert("");
        const dateData = checkDate(dateStr, "until");
        if(dateData.status == 204) return;
        if(dateData.status == 200) { 
            const modifiedDate = dateData.date;
            if(modifiedDate) setModifiedUntil(modifiedDate);
            onChange(publicHidden,  modifiedSince, modifiedDate, since, dateStr);
            //console.log(dateStr, modifiedDate);
        } else {
            let msg = "";
            const noMsg = "Päivämäärä ei kelpaa";
            if(dateData.status == 400) {if(dateData.message){msg = dateData.message;} else {msg = noMsg;}} else {msg = noMsg;}
            setUntilAlert(msg);
        }
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
                            value={since || ""}
                            placeholder="dd.mm.yyyy"
                            data-testid="public-since-input" 
                        />
                        <label id="since">{sinceAlert || ""}</label>
                    </div>

                    <div className="public-text-input">
                        {"Mihin: "}
                        <input
                            name="publicUntil"
                            type="text"
                            id="publicUntil"
                            onChange={modifyPublicUntil}
                            value={until || ""}
                            placeholder="dd.mm.yyyy"
                            data-testid="public-until-input" 
                        />
                        <label id="until">{untilAlert || ""}</label>
                    </div>
                </div>
            </MapFilterItem >
        </div>
    );
};
export default PublishedHiddenFilter;
