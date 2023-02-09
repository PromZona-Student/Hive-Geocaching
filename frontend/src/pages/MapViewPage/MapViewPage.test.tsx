import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import MapViewPage from "./MapViewPage";

test("component loads", async () => {
    render(<MapViewPage/>);
    expect(screen.getByText("OpenStreetMap")).toBeVisible();
});
