import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MapViewPage from "./MapViewPage";
import { BrowserRouter } from "react-router-dom";
import { MapContext } from "../../context/MapContext";
import { FiltersContextProvider } from "../../context/FiltersContextProvider";

test("Component loads and shows map menu", async () => {
    render(
        <BrowserRouter>
            <FiltersContextProvider>
                <MapContext>
                    <MapViewPage />
                </MapContext>
            </FiltersContextProvider>
        </BrowserRouter>
    );
    expect(screen.getByText("OpenStreetMap")).toBeVisible();
    const searchButton = screen.getByText("Etsi alueelta", { selector: "button" });
    expect(searchButton).toBeVisible();
    const filterButton = screen.getByLabelText("Tarkenna hakua", { selector: "button" });
    expect(filterButton).toBeVisible();
});
