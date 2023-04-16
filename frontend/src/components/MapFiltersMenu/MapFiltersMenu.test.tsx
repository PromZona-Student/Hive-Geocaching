import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MapFiltersMenu from "./MapFiltersMenu";
import { BrowserRouter } from "react-router-dom";
import { MapContext } from "../../context/MapContext";
import { FiltersContext } from "../../context/FiltersContextProvider";
import { mockMatchMedia } from "../../tests/mockMatchMedia";
import { initFilters } from "../../model/Filters";

const onHide = jest.fn();
const onConfirmFilters = jest.fn();

let filters = {...initFilters};
const updateFilters = jest.fn();

beforeEach(() => {
    mockMatchMedia();
    render(
        <BrowserRouter>
            <FiltersContext.Provider value={{filters, updateFilters}}>
                <MapContext>
                    <MapFiltersMenu show={true} onHide={onHide} onConfirmFilters={onConfirmFilters} />
                </MapContext>
            </FiltersContext.Provider>
        </BrowserRouter>
    );
});

afterEach(() => {
    jest.clearAllMocks();
    filters = {...initFilters};
});

const clickReset = () => {
    const resetFiltersButton = screen.getByText("Tyhjennä", { selector: "button" });
    fireEvent.click(resetFiltersButton);
};

const clickConfirm = () => {
    const confirmButton = screen.getByText("Käytä", { selector: "button" });
    fireEvent.click(confirmButton);
};

test("Custom rule value is changed correctly", async () => {
    const customRuleAccordion = screen.getByText("Oma ehto", { selector: "button" });
    fireEvent.click(customRuleAccordion);
    const customRuleSelect = screen.getByTestId("oma-ehto") as HTMLSelectElement;
    expect(customRuleSelect.value).toEqual("");
    fireEvent.change(customRuleSelect, { target: { value: "Löytämättä" } });
    expect(customRuleSelect.value).toEqual("Löytämättä");
    clickConfirm();
    expect(updateFilters).toHaveBeenCalledWith({
        ...initFilters,
        customRule: "Löytämättä"
    });
    clickReset();
    expect(updateFilters).toHaveBeenCalledWith({...initFilters});
});

test("Limit value is changed correctly", async () => {
    const limitAccordion = screen.getByText("Määrä", { selector: "button" });
    fireEvent.click(limitAccordion);
    const limitSelect = screen.getByTestId("limit-filter") as HTMLSelectElement;
    expect(limitSelect.value).toEqual("200");
    fireEvent.change(limitSelect, { target: { value: "1000" } });
    expect(limitSelect.value).toEqual("1000");
    clickConfirm();
    expect(updateFilters).toHaveBeenCalledWith({
        ...initFilters,
        limit: 1000
    });
    clickReset();
    expect(updateFilters).toHaveBeenCalledWith({...initFilters});
});

test("cache types values are changed correctly", async () => {
    const cacheTypeAccordion = screen.getByText("Määrä", { selector: "button" });
    fireEvent.click(cacheTypeAccordion);
    const vainRatkaistutMultitInput = screen.getByLabelText("Vain ratkaistut multit") as HTMLInputElement;
    expect(vainRatkaistutMultitInput.checked).toEqual(false);
    fireEvent.click(vainRatkaistutMultitInput);
    clickConfirm();
    expect(updateFilters).toHaveBeenCalledWith({
        ...initFilters,
        cacheTypes: {
            ...initFilters.cacheTypes,
            vainRatkaistutMultit: true
        }
    });
    clickReset();
    expect(updateFilters).toHaveBeenCalledWith({...initFilters});
});

test("cache size values are changed correctly", async () => {
    const cacheSizeAccordion = screen.getByText("Koko", { selector: "button" });
    fireEvent.click(cacheSizeAccordion);
    const virtuaali = screen.getByLabelText("Virtuaali") as HTMLInputElement;
    expect(virtuaali.checked).toEqual(false);
    fireEvent.click(virtuaali);
    clickConfirm();
    expect(updateFilters).toHaveBeenCalledWith({
        ...initFilters,
        size: {
            ...initFilters.size,
            virtuaali: true
        }
    });
    clickReset();
    expect(updateFilters).toHaveBeenCalledWith({...initFilters});
});

test("name contains filter search box text is saved correctly", async () => {
    const searchInput = screen.getByTestId("name-contains-filter") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" }});
    expect(searchInput.value).toBe("test");
});

test("cache description filter search box text is saved correctly", async () => {
    const searchInput = screen.getByTestId("description-contains-filter") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" }});
    expect(searchInput.value).toBe("test");
});

test("difficulty values are changed correctly", async () => {
    const difficultyAccordion = screen.getByText("Vaikeus", { selector: "button" });
    fireEvent.click(difficultyAccordion);
    const three = screen.getByTestId("difficulty-3") as HTMLInputElement;
    fireEvent.click(three);
    clickConfirm();
    expect(updateFilters).toHaveBeenCalledWith({
        ...initFilters,
        difficulty: {
            ...initFilters.difficulty,
            3: true
        }
    });
    clickReset();
    expect(updateFilters).toHaveBeenCalledWith({...initFilters});
});

test("terrain values are changed correctly", async () => {
    const terrainAccordion = screen.getByText("Maasto", { selector: "button" });
    fireEvent.click(terrainAccordion);
    const two = screen.getByTestId("terrain-2") as HTMLInputElement;
    fireEvent.click(two);
    clickConfirm();
    expect(updateFilters).toHaveBeenCalledWith({
        ...initFilters,
        terrain: {
            ...initFilters.terrain,
            2: true
        }
    });
    clickReset();
    expect(updateFilters).toHaveBeenCalledWith({...initFilters});
});
