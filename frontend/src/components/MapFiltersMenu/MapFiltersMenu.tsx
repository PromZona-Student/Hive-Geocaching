import { Accordion, Button, Offcanvas } from "react-bootstrap";
import "./MapFiltersMenu.scss";
import "../../styles/custom.scss";
import MapFilterItem from "../MapFilterItem";
import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import { CacheTypes, Filters } from "../../model/Filters";
import { FiltersContext } from "../../context/FiltersContextProvider";

interface Props {
    show: boolean
    onHide: () => void
    onConfirmFilters: () => void
}

const initFilters: Filters = {
    cacheTypes: {
        vainRatkaistutMultit: false,
        vainRatkaistutMysteerit: false,
        vainOmiaMerkittyjäSisältäenMultit: false,
        vainOmiaMerkittyjäSisältäenMysteerit: false
    },
    maxDistance: 200,
    customRule: "-",
};

const MapFiltersMenu = ({
    show,
    onHide,
    onConfirmFilters
}: Props) => {
    const { setFilters } = useContext(FiltersContext);
    const [mapFilters, setMapFilters] = useState<Filters>(initFilters);

    const modifyCustomRule = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        const value = e.currentTarget.value;
        console.log(value);
        setMapFilters({
            ...mapFilters,
            customRule: value === "" ? undefined : value
        });
    };

    const modifyAmount = (e: SyntheticEvent<HTMLSelectElement, Event>) => {
        const value = e.currentTarget.value;
        console.log(value);
        setMapFilters({
            ...mapFilters,
            limit: parseInt(value)
        });
    };

    const modifyCacheTypes = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name as keyof CacheTypes;
        const value = e.target.checked;
        setMapFilters({
            ...mapFilters,
            cacheTypes: {
                ...mapFilters.cacheTypes,
                [name]: value
            }
        });
    };

    const confirmFilters = () => {
        setFilters({ ...mapFilters });
        onConfirmFilters();
    };

    const resetFilters = () => {
        setMapFilters(initFilters);
        setFilters({ ...initFilters });
    };

    return (
        <Offcanvas show={show} onHide={onHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Tarkenna hakua</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Accordion alwaysOpen>
                    <MapFilterItem header="Oma ehto" eventKey="0">
                        <select onChange={modifyCustomRule} name="oma-ehto" id="oma-ehto-filter" value={mapFilters.customRule}>
                            <option value="">-</option>
                            <option value="Löytämättä">Löytämättä</option>
                        </select>
                    </MapFilterItem>
                    <MapFilterItem header="Määrä" eventKey="1">
                        {"Näytä enintään "}
                        <select onChange={modifyAmount} name="amount" id="amount-filter" value={mapFilters.limit}>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="500">500</option>
                            <option value="1000">1000</option>
                            <option value="2000">2000</option>
                        </select>
                        {" kätköä"}
                    </MapFilterItem>
                    <MapFilterItem header="Kätkötyyppi" eventKey="2">
                        <div className="check-box-filters">
                            <div className="check-box-filter">
                                <input
                                    type="checkbox"
                                    name="vainRatkaistutMultit"
                                    onChange={modifyCacheTypes}
                                    checked={mapFilters.cacheTypes?.vainRatkaistutMultit}
                                />
                                <label htmlFor="vainRatkaistutMultit">Vain ratkaistut multit</label>
                            </div>
                            <div className="check-box-filter">
                                <input
                                    type="checkbox"
                                    name="vainOmiaMerkittyjäSisältäenMultit"
                                    onChange={modifyCacheTypes}
                                    checked={mapFilters.cacheTypes?.vainOmiaMerkittyjäSisältäenMultit}
                                />
                                <label htmlFor="vainRatkaistutMultit">Vain omia merkittyjä sisältäen multit</label>
                            </div>
                        </div>
                    </MapFilterItem>
                </Accordion>
            </Offcanvas.Body>
            <div className="mapfilters-buttons-section">
                <Button variant="success" onClick={confirmFilters}>Käytä</Button>
                <Button variant="danger" onClick={resetFilters}>Tyhjennä</Button>
            </div>
        </Offcanvas>
    );
};

export default MapFiltersMenu;