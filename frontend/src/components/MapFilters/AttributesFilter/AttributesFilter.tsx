import "./AttributesFilter.scss";
import { ChangeEvent, useState } from "react";
import { Attributes } from "../../../model/Filters";
import MapFilterItem from "../../MapFilterItem";
import { abandonedBuildingNo,abandonedBuildingYes,availableNo,availableYes,bicyclesNo,bicyclesYes, boatYes,challengecacheYes,climbingNo,climbingYes,fieldPuzzleNo, fieldPuzzleYes,flashlightYes,hikeShortNo,hikeShortYes,mineYes,nightNo,nightYes,parkingNo,parkingYes,parkngrabNo,parkngrabYes,powertrailYes,rappellingYes,snowshoesYes,sToolYes,teamworkNo,teamworkYes,treeclimbingNo,treeclimbingYes,uVYes,wadingYes,winterNo,winterYes } from "../../../images/attributes";

interface Props{
    onChange: (attributes: Attributes) => void;
    attributes?: Attributes;
    eventKey: string;
}

interface AttributeDisplay{
    name: keyof Attributes;
    image: string;
    title: string;
    oppositeName: string;
    isDisabled: boolean;
    style: string;
}

const disabledStatesArray = [
    { name: "abandonedBuildingNo", isDisabled: false, style: "check-box-filter" },
    { name: "abandonedBuildingYes", isDisabled: false, style: "check-box-filter" },
    { name: "availableNo", isDisabled: false, style: "check-box-filter" },
    { name: "availableYes", isDisabled: false, style: "check-box-filter" },
    { name: "bicyclesNo", isDisabled: false, style: "check-box-filter" },
    { name: "bicyclesYes", isDisabled: false, style: "check-box-filter" },
    { name: "boatYes", isDisabled: false, style: "check-box-filter" },
    { name: "challengecacheYes", isDisabled: false, style: "check-box-filter" },
    { name: "climbingNo", isDisabled: false, style: "check-box-filter" },
    { name: "climbingYes", isDisabled: false, style: "check-box-filter" },

    { name: "fieldPuzzleNo", isDisabled: false, style: "check-box-filter" },
    { name: "fieldPuzzleYes", isDisabled: false, style: "check-box-filter" },
    { name: "flashlightYes", isDisabled: false, style: "check-box-filter" },
    { name: "hikeShortNo", isDisabled: false, style: "check-box-filter" },
    { name: "hikeShortYes", isDisabled: false, style: "check-box-filter" },
    { name: "mineYes", isDisabled: false, style: "check-box-filter" },
    { name: "nightNo", isDisabled: false, style: "check-box-filter" },
    { name: "nightYes", isDisabled: false, style: "check-box-filter" },
    { name: "parkingNo", isDisabled: false, style: "check-box-filter" },
    { name: "parkingYes", isDisabled: false, style: "check-box-filter" },

    { name: "parkngrabNo", isDisabled: false, style: "check-box-filter" },
    { name: "parkngrabYes", isDisabled: false, style: "check-box-filter" },
    { name: "powertrailYes", isDisabled: false, style: "check-box-filter" },
    { name: "rappellingYes", isDisabled: false, style: "check-box-filter" },
    { name: "snowshoesYes", isDisabled: false, style: "check-box-filter" },
    { name: "sToolYes", isDisabled: false, style: "check-box-filter" },
    { name: "teamworkNo", isDisabled: false, style: "check-box-filter" },
    { name: "teamworkYes", isDisabled: false, style: "check-box-filter" },
    { name: "treeclimbingNo", isDisabled: false, style: "check-box-filter" },
    { name: "treeclimbingYes", isDisabled: false, style: "check-box-filter" },

    { name: "uVYes", isDisabled: false, style: "check-box-filter" },
    { name: "wadingYes", isDisabled: false, style: "check-box-filter" },
    { name: "winterNo", isDisabled: false, style: "check-box-filter" },
    { name: "winterYes", isDisabled: false, style: "check-box-filter" },
];

const DEFAULT_DISPLAY_VALUE = false;

const AttributesFilter = ({
    onChange,
    attributes,
    eventKey
}: Props) => {
    const [disabledStates, setDisabledStates] = useState(disabledStatesArray);

    const modifyAttributes = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof Attributes;
        const value = e.target.checked;
        const oppositeName = e.currentTarget.getAttribute("data-value");
        if(value==true && oppositeName!=null && oppositeName!=""){
            updateState(oppositeName, true, "check-box-filter disabled");
        }
        if(value==false && oppositeName!=null && oppositeName!=""){
            updateState(oppositeName, false, "check-box-filter");
        }
        onChange({
            ...attributes,
            [name]: value
        });
    };

    const updateState= (name:string, updatedIsDisabled:boolean, style:string) => {
        setDisabledStates(
            disabledStates.map((state) =>
                state.name === name
                    ? { ...state, isDisabled: updatedIsDisabled, style: style }
                    : { ...state }
            )
        );
    };

    const findStateByName= (name:string) => {
        const state = disabledStates.find(state => state.name === name);
        if(state){
            return(state.isDisabled);
        }
        else{
            return(false);
        }
    };

    const findStyleByName= (name:string) => {
        const state = disabledStates.find(state => state.name === name);
        if(state){
            return(state.style);
        }
        else{
            return( "check-box-filter");
        }
    };

    const initAttrArray = () => {
        const keys: (keyof Attributes)[] = ["abandonedBuildingNo","abandonedBuildingYes","availableNo","availableYes","bicyclesNo","bicyclesYes","boatYes","challengecacheYes","climbingNo","climbingYes","fieldPuzzleNo","fieldPuzzleYes", "flashlightYes","hikeShortNo","hikeShortYes","mineYes","nightNo","nightYes","parkingNo","parkingYes","parkngrabNo","parkngrabYes","powertrailYes","rappellingYes","snowshoesYes","sToolYes","teamworkNo","teamworkYes","treeclimbingNo","treeclimbingYes","uVYes","wadingYes","winterNo","winterYes"];
        const names = ["abandonedBuildingNo","abandonedBuildingYes","availableNo","availableYes","bicyclesNo","bicyclesYes","boatYes","challengecacheYes","climbingNo","climbingYes","fieldPuzzleNo","fieldPuzzleYes", "flashlightYes","hikeShortNo","hikeShortYes","mineYes","nightNo","nightYes","parkingNo","parkingYes","parkngrabNo","parkngrabYes","powertrailYes","rappellingYes","snowshoesYes","sToolYes","teamworkNo","teamworkYes","treeclimbingNo","treeclimbingYes","uVYes","wadingYes","winterNo","winterYes"];
        const images = [abandonedBuildingNo,abandonedBuildingYes,availableNo,availableYes,bicyclesNo,bicyclesYes, boatYes,challengecacheYes,climbingNo,climbingYes,fieldPuzzleNo, fieldPuzzleYes, flashlightYes,hikeShortNo,hikeShortYes,mineYes,nightNo,nightYes,parkingNo,parkingYes,parkngrabNo,parkngrabYes,powertrailYes,rappellingYes,snowshoesYes,sToolYes,teamworkNo,teamworkYes,treeclimbingNo,treeclimbingYes,uVYes,wadingYes,winterNo,winterYes];
        const titles = ["Ei raunioita","Raunioita","Ei saatavilla ympäri vuorokauden","Käytävissä ympäri vuorokauden","Ei sovellu polkupyörille","Soveltuu polkupyörille","Tarvitsee veneen","Haastekätkö","Ei vaikeaa nousua","Vaikea nousu","Ei field puzzlea","Field puzzle","Tarvitsee taskulampun","Vähintään 1 km:n matka","Lyhyt,alle 1 km:n matka","Varo hylättyjä kaivoksia","Yökäyntiä ei suositella","Käyntiä suositellaan yöllä","Ei parkkipaikkaa","Pysäköintialue","Ei drive-in -kätkö","Drive-in -kätkö","Power trail","Tarvitsee kiipeilyvälineet","Voi tarvita lumikengät","Tarvitsee erikoistyökalun","Ei ryhmätyökätköä","Tiimityökätkö","Ei puukiipeilykätköä","Puuhunkiipeämiskätkö","Tarvitsee UV-lampun","Voi vaatia kahlaamista","Ei löydy lumisena aikana","Löytyy myös lumisena aikana"];
        const opposites = ["abandonedBuildingYes","abandonedBuildingNo","availableYes","availableNo","bicyclesYes","bicyclesNo","","","climbingYes","climbingNo","fieldPuzzleYes","fieldPuzzleNo","","hikeShortYes","hikeShortNo","","nightYes","nightNo","parkingYes","parkingNo","parkngrabYes","parkngrabNo","","","","","teamworkYes","teamworkNo","treeclimbingYes","treeclimbingNo","","","winterYes","winterNo"];
        const attrArray: Array<AttributeDisplay> = [];
        for (let i = 0; i < keys.length; i++) {
            const attr: AttributeDisplay = {
                name: keys[i],
                image: images[i],
                title: titles[i],
                oppositeName: opposites[i],
                isDisabled: findStateByName(names[i]),
                style:  findStyleByName(names[i])
            };  
            attrArray.push(attr);
        }
        return attrArray;
    };

    return (
        <MapFilterItem header="Attribuutit" eventKey={eventKey}>
            <div className="check-box-filters">
                {
                    initAttrArray().map(attr => {
                        return(
                            <div className="check-box-filters" key={attr.name}>
                                <div className={attr.style}>
                                    <input
                                        id={attr.name}
                                        type="checkbox"
                                        name={attr.name}
                                        onChange={modifyAttributes}
                                        data-value={attr.oppositeName}
                                        disabled= {attr.isDisabled}
                                        checked={attributes?.[attr.name] || DEFAULT_DISPLAY_VALUE}
                                    />
                                    <img src={attr.image} className="icon"/><label htmlFor={attr.name}>{attr.title}</label>
                                </div>                
                            </div>
                        );
                    })
                }
            </div>
        </MapFilterItem>
    );
};
export default AttributesFilter;