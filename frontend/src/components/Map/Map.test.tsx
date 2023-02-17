import Map from "./Map";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

test("component loads", async () => {
    render(<Map geocaches={[]}/>);
    expect(screen.getByText("OpenStreetMap")).toBeVisible();
});
