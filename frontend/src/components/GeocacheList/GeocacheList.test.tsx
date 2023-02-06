import GeocacheList from "./GeocacheList";
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

test("component loads", async () => {
    render(<GeocacheList/>);
    expect(screen.getByText("New geocaches")).toBeVisible();
});