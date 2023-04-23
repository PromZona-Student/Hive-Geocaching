import "./AttributesFilter.scss";
import { ChangeEvent } from "react";
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
}

const DEFAULT_DISPLAY_VALUE = false;

const AttributesFilter = ({
    onChange,
    attributes,
    eventKey
}: Props) => {

    const modifyAttributes = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof Attributes;
        const value = e.target.checked;
        //console.log(e.currentTarget.getAttribute("data-value"));
        onChange({
            ...attributes,
            [name]: value
        });
    };

    const initAttrArray = () => {
        const keys: (keyof Attributes)[] = ["abandonedBuildingNo","abandonedBuildingYes","availableNo","availableYes","bicyclesNo","bicyclesYes","boatYes","challengecacheYes","climbingNo","climbingYes","fieldPuzzleNo","fieldPuzzleYes", "flashlightYes","hikeShortNo","hikeShortYes","mineYes","nightNo","nightYes","parkingNo","parkingYes","parkngrabNo","parkngrabYes","powertrailYes","rappellingYes","snowshoesYes","sToolYes","teamworkNo","teamworkYes","treeclimbingNo","treeclimbingYes","uVYes","wadingYes","winterNo","winterYes"];
        const images = [abandonedBuildingNo,abandonedBuildingYes,availableNo,availableYes,bicyclesNo,bicyclesYes, boatYes,challengecacheYes,climbingNo,climbingYes,fieldPuzzleNo, fieldPuzzleYes, flashlightYes,hikeShortNo,hikeShortYes,mineYes,nightNo,nightYes,parkingNo,parkingYes,parkngrabNo,parkngrabYes,powertrailYes,rappellingYes,snowshoesYes,sToolYes,teamworkNo,teamworkYes,treeclimbingNo,treeclimbingYes,uVYes,wadingYes,winterNo,winterYes];
        const titles = ["Ei raunioita","Raunioita","Ei saatavilla ympäri vuorokauden","Käytävissä ympäri vuorokauden","Ei sovellu polkupyörille","Soveltuu polkupyörille","Tarvitsee veneen","Haastekätkö","Ei vaikeaa nousua","Vaikea nousu","Ei field puzzlea","Field puzzle","Tarvitsee taskulampun","Vähintään 1 km:n matka","Lyhyt,alle 1 km:n matka","Varo hylättyjä kaivoksia","Yökäyntiä ei suositella","Käyntiä suositellaan yöllä","Ei parkkipaikkaa","Pysäköintialue","Ei drive-in -kätkö","Drive-in -kätkö","Power trail","Tarvitsee kiipeilyvälineet","Voi tarvita lumikengät","Tarvitsee erikoistyökalun","Ei ryhmätyökätköä","Tiimityökätkö","Ei puukiipeilykätköä","Puuhunkiipeämiskätkö","Tarvitsee UV-lampun","Voi vaatia kahlaamista","Ei löydy lumisena aikana","Löytyy myös lumisena aikana"];
        const opposites = ["abandonedBuildingYes","abandonedBuildingNo","availableYes","availableNo","bicyclesYes","bicyclesNo","","","climbingYes","climbingNo","fieldPuzzleYes","fieldPuzzleNo","","hikeShortYes","hikeShortNo","","nightYes","nightNo","parkingYes","parkingNo","parkngrabYes","parkngrabNo","","","","","teamworkYes","teamworkNo","treeclimbingYes","treeclimbingNo","","","winterYes","winterNo"];
        const attrArray: Array<AttributeDisplay> = [];
        for (let i = 0; i < keys.length; i++) {
            const attr: AttributeDisplay = {
                name: keys[i],
                image: images[i],
                title: titles[i],
                oppositeName: opposites[i]
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
                                <div className="check-box-filter">
                                    <input
                                        id={attr.name}
                                        type="checkbox"
                                        name={attr.name}
                                        onChange={modifyAttributes}
                                        data-value={attr.oppositeName}
                                        disabled= {false}
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