import Map from "./Map";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { MapContext } from "../../context/MapContext";

test("component loads", async () => {
    render(
        <MapContext>
            <Map geocaches={[]} onBoundsChanged={() => {return;}}/>
        </MapContext>
    );
    expect(screen.getByText("OpenStreetMap")).toBeVisible();
});
