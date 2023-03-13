import CachePage from "./CachePage";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as GeocacheApi from "../../api/geocaches";
import { BrowserRouter } from "react-router-dom";
import { Geocache } from "../../model/Geocache";
jest.mock("axios");

test("component loads", async () => {
    const cache: Geocache = {
        referenceCode: "zyx",
        name: "Esimerkkikätkö",
        placedDate: "",
        publishedDate: "",
        type: "Oma kätkö",
        size: "Joku",
        postedCoordinates: {
            latitude: 0,
            longitude: 0
        },
        lastVisitedDate: "",
        isPremiumOnly: false,
        shortDescription: "",
        longDescription: "",
        hints: "Ei vihjeitä"
    };
    jest.spyOn(GeocacheApi, "getCache").mockImplementation(async () => {
        return cache;
    });

    render(<CachePage />, { wrapper: BrowserRouter });
    await waitFor(() => {
        expect(screen.getByText("Kätkön id:tä ei annettu tai sitä ei löytynyt. Id: ()")).toBeVisible();
    });

    /* We need to render with a parameter to make this second test
    
    render(<CachePage />, { wrapper: BrowserRouter });
    await waitFor(() => {
        expect(screen.getByText("Esimerkkikätkö")).toBeVisible();
    });
    */
});
