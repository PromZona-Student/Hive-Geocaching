import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { MapContext } from "../../context/MapContext";
import { FiltersContextProvider } from "../../context/FiltersContextProvider";
import { mockMatchMedia } from "../../tests/mockMatchMedia";
import MapMenu from "./MapMenu";

beforeEach(() => {
    mockMatchMedia();
});

test("Filter menu is opened when pressing filter button and closed when pressing confirm", async () => {  
    const onSearchClicked = jest.fn();
    render(
        <BrowserRouter>
            <FiltersContextProvider>
                <MapContext>
                    <MapMenu onSearchClicked={onSearchClicked}/>
                </MapContext>
            </FiltersContextProvider>
        </BrowserRouter>
    );
    const searchButton = screen.getByText("Etsi alueelta", { selector: "button" });
    expect(searchButton).toBeVisible();
    const filterButton = screen.getByLabelText("Tarkenna hakua", { selector: "button" });
    expect(filterButton).toBeVisible();
    fireEvent.click(filterButton);
    const filterMenuHeading = screen.getByText("Tarkenna hakua");
    expect(filterMenuHeading).toBeVisible();
    expect(screen.getByText("Oma ehto")).toBeVisible();
    expect(screen.getByText("Määrä")).toBeVisible();
    expect(screen.getByText("Kätkötyyppi")).toBeVisible();
    const useButton = screen.getByText("Käytä", { selector: "button" });
    fireEvent.click(useButton);
    await waitFor(() => {
        expect(filterMenuHeading).not.toBeInTheDocument();
    });
});
