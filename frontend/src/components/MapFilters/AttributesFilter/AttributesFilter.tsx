import "./AttributesFilter.scss";
import { ChangeEvent, useState, useEffect } from "react";
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
    isDisabled: boolean;
    style: string;
    opposite: string;
    oppositeKey?: keyof Attributes;
}

const DEFAULT_DISPLAY_VALUE = false;

const getIsDisabled = (oppositeKey:keyof Attributes, attributes?:Attributes) => {
    if(oppositeKey){
        const isChecked = attributes?.[oppositeKey];
        if(isChecked){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
};

const initAttrArray = (attributes?:Attributes) => {
    console.log("INIT");
    const keys: (keyof Attributes)[] = ["abandonedBuildingNo","abandonedBuildingYes","availableNo","availableYes","bicyclesNo","bicyclesYes","boatYes","challengecacheYes","climbingNo","climbingYes","fieldPuzzleNo","fieldPuzzleYes", "flashlightYes","hikeShortNo","hikeShortYes","mineYes","nightNo","nightYes","parkingNo","parkingYes","parkngrabNo","parkngrabYes","powertrailYes","rappellingYes","snowshoesYes","sToolYes","teamworkNo","teamworkYes","treeclimbingNo","treeclimbingYes","uVYes","wadingYes","winterNo","winterYes"];
    const images = [abandonedBuildingNo,abandonedBuildingYes,availableNo,availableYes,bicyclesNo,bicyclesYes, boatYes,challengecacheYes,climbingNo,climbingYes,fieldPuzzleNo, fieldPuzzleYes, flashlightYes,hikeShortNo,hikeShortYes,mineYes,nightNo,nightYes,parkingNo,parkingYes,parkngrabNo,parkngrabYes,powertrailYes,rappellingYes,snowshoesYes,sToolYes,teamworkNo,teamworkYes,treeclimbingNo,treeclimbingYes,uVYes,wadingYes,winterNo,winterYes];
    const titles = ["Ei raunioita","Raunioita","Ei saatavilla ympäri vuorokauden","Käytettävissä ympäri vuorokauden","Ei sovellu polkupyörille","Soveltuu polkupyörille","Tarvitsee veneen","Haastekätkö","Ei vaikeaa nousua","Vaikea nousu","Ei field puzzlea","Field puzzle","Tarvitsee taskulampun","Vähintään 1 km:n matka","Lyhyt,alle 1 km:n matka","Varo hylättyjä kaivoksia","Yökäyntiä ei suositella","Käyntiä suositellaan yöllä","Ei parkkipaikkaa","Pysäköintialue","Ei drive-in -kätkö","Drive-in -kätkö","Power trail","Tarvitsee kiipeilyvälineet","Voi tarvita lumikengät","Tarvitsee erikoistyökalun","Ei ryhmätyökätköä","Tiimityökätkö","Ei puukiipeilykätköä","Puuhunkiipeämiskätkö","Tarvitsee UV-lampun","Voi vaatia kahlaamista","Ei löydy lumisena aikana","Löytyy myös lumisena aikana"];
    const opposites = ["abandonedBuildingYes","abandonedBuildingNo","availableYes","availableNo","bicyclesYes","bicyclesNo","","","climbingYes","climbingNo","fieldPuzzleYes","fieldPuzzleNo","","hikeShortYes","hikeShortNo","","nightYes","nightNo","parkingYes","parkingNo","parkngrabYes","parkngrabNo","","","","","teamworkYes","teamworkNo","treeclimbingYes","treeclimbingNo","","","winterYes","winterNo"];
    const oppositeKeys : (keyof Attributes)[] =  ["abandonedBuildingYes","abandonedBuildingNo","availableYes","availableNo","bicyclesYes","bicyclesNo","abandonedBuildingYes","abandonedBuildingYes","climbingYes","climbingNo","fieldPuzzleYes","fieldPuzzleNo","abandonedBuildingYes","hikeShortYes","hikeShortNo","abandonedBuildingYes","nightYes","nightNo","parkingYes","parkingNo","parkngrabYes","parkngrabNo","abandonedBuildingYes","abandonedBuildingYes","abandonedBuildingYes","abandonedBuildingYes","teamworkYes","teamworkNo","treeclimbingYes","treeclimbingNo","abandonedBuildingYes","abandonedBuildingYes","winterYes","winterNo"];
    
    const attrArray: Array<AttributeDisplay> = [];
    for (let i = 0; i < keys.length; i++) {
        let attr;
        if(opposites[i]!=""){
            const isDisabled = getIsDisabled(oppositeKeys[i], attributes);
            if(isDisabled){
                attr = {
                    name: keys[i],
                    image: images[i],
                    title: titles[i],
                    isDisabled: isDisabled,
                    style: "check-box-filter disabled",
                    opposite: opposites[i],
                    oppositeKey: oppositeKeys[i]
    
                }; 
            } else{
                attr = {
                    name: keys[i],
                    image: images[i],
                    title: titles[i],
                    isDisabled: isDisabled,
                    style: "check-box-filter",
                    opposite: opposites[i],
                    oppositeKey: oppositeKeys[i]
    
                }; 
            }
        }
        else{
            attr = {
                name: keys[i],
                image: images[i],
                title: titles[i],
                isDisabled: false,
                style: "check-box-filter",
                opposite: opposites[i]
            };  
        }
        attrArray.push(attr);
    }
    return attrArray;
};

const AttributesFilter = ({
    onChange,
    attributes,
    eventKey
}: Props) => {
    const [attrArray, setAttrArray] = useState(initAttrArray(attributes));
 
    const modifyAttributes = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof Attributes;
        const value = e.target.checked;
        const oppositeName = e.currentTarget.getAttribute("data-value");
        if(oppositeName!=null && oppositeName!=""){
            if(value==true){
                updateIsDisabled(oppositeName, true);
            }
            else{
                updateIsDisabled(oppositeName, false);
            }
        }
        
        onChange({
            ...attributes,
            [name]: value
        });
    };

    const updateIsDisabled= (name:string, isDisabled:boolean) => {
        const attrArrayUpdated = attrArray;
        attrArrayUpdated.map(attr => { 
            if(attr.name==name){
                attr.isDisabled=isDisabled;
                if(isDisabled){
                    attr.style="check-box-filter disabled";
                }
                else{
                    attr.style="check-box-filter";
                }
            }
        });
        setAttrArray(attrArrayUpdated);
    };

    return (
        <MapFilterItem header="Attribuutit" eventKey={eventKey}>
            <div className="check-box-filters">
                {
                    attrArray.map(attr => {
                        return(
                            <div className="check-box-filters" key={attr.name}>
                                <div className={attr.style}>
                                    <input
                                        id={attr.name}
                                        type="checkbox"
                                        name={attr.name}
                                        onChange={modifyAttributes}
                                        data-value={attr.opposite}
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