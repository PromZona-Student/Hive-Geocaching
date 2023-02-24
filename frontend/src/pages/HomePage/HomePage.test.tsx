
import HomePage from "./HomePage";

//test("component loads", async () => {<HomePage />;});

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as GeocacheApi from "../../api/geocaches";
jest.mock("axios");

test("component loads", async () => {
    jest.spyOn(GeocacheApi, "getGeoCaches").mockImplementation(async () => {
        return [];
    });

    render(<HomePage />);
    await waitFor(() => {
        expect(screen.getByText("Uusimmat geokätköt")).toBeVisible();
    });
});
