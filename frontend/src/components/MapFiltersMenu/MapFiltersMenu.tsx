import { Accordion } from "react-bootstrap";
import "./MapFiltersMenu.scss";
import { useContext, useState } from "react";
import { CacheTypes, CacheSize, Difficulty, Terrain, StartEndDate, Filters } from "../../model/Filters";
import { FiltersContext } from "../../context/FiltersContextProvider";
import CacheTypeFilter from "../MapFilters/CacheTypeFilter";
import CacheSizeFilter from "../MapFilters/CacheSizeFilter";
import DifficultyFilter from "../MapFilters/DifficultyFilter";
import TerrainFilter from "../MapFilters/TerrainFilter";
import PublishedHiddenFilter from "../MapFilters/PublishedHiddenFilter";
import LimitFilter from "../MapFilters/LimitFilter";
import CustomRuleFilter from "../MapFilters/CustomRuleFilter";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonWarning from "../Buttons/ButtonWarning";
import { initFilters } from "../../model/Filters";
import NameContainsFilter from "../MapFilters/NameContainsFilter";
import OffcanvasMenu from "../OffcanvasMenu";
import CacheDescriptionFilter from "../MapFilters/CacheDescriptionFilter";
import UserContext from "../../context/UserContext";


interface Props {
    show: boolean
    onHide: () => void
    onConfirmFilters: () => void
}

const MapFiltersMenu = ({
    show,
    onHide,
    onConfirmFilters
}: Props) => {

    const userContext = useContext(UserContext);
    let filters: Filters = {};
    if (!localStorage.getItem("filters")) {
        localStorage.setItem("filters", JSON.stringify(initFilters));
    }

    if (localStorage.getItem("user")) {
        const userData = localStorage.getItem("user");
        if (userData && userContext.user) {
            const savedUsername = JSON.parse(userData).username;
            const currentUsername = userContext.user.username;
            console.log(savedUsername, " => ", currentUsername);
            if (savedUsername !== currentUsername) {
                localStorage.setItem("filters", JSON.stringify(initFilters));
            }
        } else {
            localStorage.setItem("filters", JSON.stringify(initFilters));
        }
    }

    const filterData = localStorage.getItem("filters");
    if (filterData) filters = JSON.parse(filterData);

    
    console.log(filters);

    const { updateFilters } = useContext(FiltersContext);
    const [mapFilters, setMapFilters] = useState<Filters>(filters);

    const modifyCustomRule = (customRule: string) => {
        setMapFilters({
            ...mapFilters,
            customRule
        });
    };

    const modifyLimit = (limit: number) => {
        setMapFilters({
            ...mapFilters,
            limit
        });
    };

    const modifyCacheTypes = (cacheTypes: CacheTypes) => {
        setMapFilters({
            ...mapFilters,
            cacheTypes
        });
    };

    const modifyCacheSize = (size: CacheSize) => {
        setMapFilters({
            ...mapFilters,
            size
        });
    };

    const modifyNameContains = (nameContains: string) => {
        setMapFilters({
            ...mapFilters,
            nameContains
        });
    };

    const modifyDescriptionContains = (description: string) => {
        setMapFilters({
            ...mapFilters,
            description
        });
    };

    const modifyDifficulty = (difficulty: Difficulty) => {
        setMapFilters({
            ...mapFilters,
            difficulty
        });
    };

    const modifyTerrain = (terrain: Terrain) => {
        setMapFilters({
            ...mapFilters,
            terrain
        });
    };

    const modifyIsPublic = (isPublic: string | undefined, publicSince: StartEndDate | undefined, publicUntil: StartEndDate | undefined) => {
        setMapFilters({
            ...mapFilters,
            isPublic,
            publicSince,
            publicUntil
        });
    };  
    
    const confirmFilters = () => {
        updateFilters({ ...mapFilters });
        localStorage.setItem("filters", JSON.stringify(mapFilters));
        localStorage.setItem("user", JSON.stringify(userContext.user));
        onConfirmFilters();
    };

    const resetFilters = () => {
        setMapFilters(initFilters);
        updateFilters({ ...initFilters });
        localStorage.setItem("filters", JSON.stringify(initFilters));
        onHide();
    };

    return (

        <OffcanvasMenu
            open={show}
            onClose={onHide}
            header="Tarkenna hakua"
            body={
                <Accordion alwaysOpen>
                    <CustomRuleFilter onChange={modifyCustomRule} customRule={mapFilters.customRule} eventKey="0"/>
                    <LimitFilter onChange={modifyLimit} limit={mapFilters.limit} eventKey="1"/>
                    <CacheTypeFilter onChange={modifyCacheTypes} cacheTypes={mapFilters.cacheTypes} eventKey="2"/>
                    <CacheSizeFilter onChange={modifyCacheSize} size={mapFilters.size} eventKey="3"/>
                    <NameContainsFilter onChange={modifyNameContains} nameContains={mapFilters.nameContains} eventKey="4"/>
                    <CacheDescriptionFilter onChange={modifyDescriptionContains} description={mapFilters.description} eventKey="5"/> 
                    <DifficultyFilter onChange={modifyDifficulty} difficulty={mapFilters.difficulty} eventKey="6"/>
                    <TerrainFilter onChange={modifyTerrain} terrain={mapFilters.terrain} eventKey="7"/> 
                    <PublishedHiddenFilter onChange={modifyIsPublic} isPublic={mapFilters.isPublic} publicSince=
                        {mapFilters.publicSince} publicUntil={mapFilters.publicUntil} eventKey="9"/>
                </Accordion>
            }
            footer={
                <div className="mapfilters-buttons-section">
                    <ButtonPrimary onClick={confirmFilters} data-test-id="confirmFiltersButton">Käytä</ButtonPrimary>
                    <ButtonWarning onClick={resetFilters}>Tyhjennä</ButtonWarning>
                </div>
            }
        />
    );
};

export default MapFiltersMenu;
