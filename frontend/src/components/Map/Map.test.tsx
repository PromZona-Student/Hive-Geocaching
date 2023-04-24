import Map from "./Map";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MapContext } from "../../context/MapContext";

test("component loads", async () => {
    
    render(
        <MapContext>
            <Map geocaches={[]} />
        </MapContext>
    );
    expect(screen.getByText("OpenStreetMap")).toBeVisible();
});
