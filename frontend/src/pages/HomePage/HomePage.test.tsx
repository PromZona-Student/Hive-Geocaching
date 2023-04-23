import HomePage from "./HomePage";
//test("component loads", async () => {<HomePage />;});
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as GeocacheApi from "../../api/geocaches";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

test("component loads", async () => {
    jest.spyOn(GeocacheApi, "getGeoCaches").mockImplementation(async () => {
        return [];
    });
    jest.spyOn(GeocacheApi, "getMeetings").mockImplementation(async () => {
        return [];
    });

    render(<HomePage />, {wrapper: BrowserRouter});
    await waitFor(() => {
        expect(screen.getByText("Uusimmat geokätköt")).toBeVisible();
    });
});
