import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import MapViewPage from "./MapViewPage";
import { BrowserRouter } from "react-router-dom";

test("component loads", async () => {
    render(<MapViewPage/>, {wrapper: BrowserRouter});
    expect(screen.getByText("OpenStreetMap")).toBeVisible();
});
