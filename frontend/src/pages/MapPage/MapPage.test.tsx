import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import MapPage from "./MapPage";

test("component loads", async () => {
    render(<MapPage/>);
    expect(screen.getByText("OpenStreetMap")).toBeVisible();
});
