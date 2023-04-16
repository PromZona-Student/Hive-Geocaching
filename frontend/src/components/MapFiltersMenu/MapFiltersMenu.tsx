import { Accordion } from "react-bootstrap";
import "./MapFiltersMenu.scss";
import { useContext, useState } from "react";
import { CacheTypes, CacheSize, Filters } from "../../model/Filters";
import { FiltersContext } from "../../context/FiltersContextProvider";
import CacheTypeFilter from "../MapFilters/CacheTypeFilter";
import CacheSizeFilter from "../MapFilters/CacheSizeFilter";
import LimitFilter from "../MapFilters/LimitFilter";
import CustomRuleFilter from "../MapFilters/CustomRuleFilter";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonWarning from "../Buttons/ButtonWarning";
import { initFilters } from "../../model/Filters";
import NameContainsFilter from "../MapFilters/NameContainsFilter";
import OffcanvasMenu from "../OffcanvasMenu";

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

    const modifyNameContains = (nameContains: string) => {
        setMapFilters({
            ...mapFilters,
            nameContains
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

        <OffcanvasMenu
            open={show}
            onClose={onHide}
            header="Tarkenna hakua"
            body={
                <Accordion alwaysOpen>
                    <CustomRuleFilter onChange={modifyCustomRule} customRule={mapFilters.customRule} eventKey="0" />
                    <LimitFilter onChange={modifyLimit} limit={mapFilters.limit} eventKey="1" />
                    <CacheTypeFilter onChange={modifyCacheTypes} cacheTypes={mapFilters.cacheTypes} eventKey="2" />
                    <CacheSizeFilter onChange={modifyCacheSize} size={mapFilters.size} eventKey="3" />
                    <NameContainsFilter onChange={modifyNameContains} nameContains={mapFilters.nameContains} eventKey="4" />
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