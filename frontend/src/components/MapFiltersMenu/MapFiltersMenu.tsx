import { Accordion, Offcanvas } from "react-bootstrap";
import "./MapFiltersMenu.scss";
import { useContext, useState } from "react";
import { CacheTypes, CacheSize, Difficulty, Filters } from "../../model/Filters";
import { FiltersContext } from "../../context/FiltersContextProvider";
import CacheTypeFilter from "../MapFilters/CacheTypeFilter";
import CacheSizeFilter from "../MapFilters/CacheSizeFilter";
import DifficultyFilter from "../MapFilters/DifficultyFilter";
import LimitFilter from "../MapFilters/LimitFilter";
import CustomRuleFilter from "../MapFilters/CustomRuleFilter";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonWarning from "../Buttons/ButtonWarning";
import { initFilters } from "../../model/Filters";

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
    const { updateFilters } = useContext(FiltersContext);
    const [mapFilters, setMapFilters] = useState<Filters>(initFilters);

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

    //const modifyDifficulty = (difficulty: Array<string>) => {
    const modifyDifficulty = (difficulty: Difficulty) => {
        setMapFilters({
            ...mapFilters,
            difficulty
        });
    };

    const confirmFilters = () => {
        updateFilters({ ...mapFilters });
        onConfirmFilters();
    };

    const resetFilters = () => {
        setMapFilters(initFilters);
        updateFilters({ ...initFilters });
    };

    return (
        <Offcanvas show={show} onHide={onHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Tarkenna hakua</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Accordion alwaysOpen>
                    <CustomRuleFilter onChange={modifyCustomRule} customRule={mapFilters.customRule} eventKey="0"/>
                    <LimitFilter onChange={modifyLimit} limit={mapFilters.limit} eventKey="1"/>
                    <CacheTypeFilter onChange={modifyCacheTypes} cacheTypes={mapFilters.cacheTypes} eventKey="2"/>
                    <CacheSizeFilter onChange={modifyCacheSize} size={mapFilters.size} eventKey="3"/>
                    <DifficultyFilter onChange={modifyDifficulty} difficulty={mapFilters.difficulty} eventKey="4"/>
                </Accordion>
            </Offcanvas.Body>
            <div className="mapfilters-buttons-section">
                <ButtonPrimary onClick={confirmFilters} data-test-id="confirmFiltersButton">Käytä</ButtonPrimary>
                <ButtonWarning onClick={resetFilters}>Tyhjennä</ButtonWarning>
            </div>
        </Offcanvas>
    );
};

export default MapFiltersMenu;