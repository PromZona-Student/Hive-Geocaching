import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

test("component loads", async () => {
    render(<HomePage/>);
    expect(screen.getByText("Here is the page's content")).toBeVisible();
});