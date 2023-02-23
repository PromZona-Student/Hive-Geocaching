
import HomePage from "./HomePage";

//test("component loads", async () => {<HomePage />;});

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as GeocacheApi from "../../api/geocaches";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from "axios";
jest.mock("axios");

test("component loads", async () => {
    jest.spyOn(GeocacheApi, "getGeoCaches").mockImplementation(async () => {
        return [
            {
                id: "GCK25A",
                latitude: 10,
                longitude: 20,
                name: "Geo 1",
                placedDate: "2004-07-22T00:00:00.000",
                publishedDate: "2004-07-22T00:00:00.000"
            },
            {
                id: "GCK25B",
                latitude: -10,
                longitude: 1,
                name: "Geo 2",
                placedDate: "2004-07-22T00:00:00.000",
                publishedDate: "2004-07-22T00:00:00.000"
            }
        ];
    });

    render(<HomePage />);
    await waitFor(() => {
        expect(screen.getByText("Uusimmat")).toBeVisible();
    });
});
