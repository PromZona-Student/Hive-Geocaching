import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import MapPage from "./MapPage";

let component = null;

test("component loads", async () => {
    component = render(<MapPage />);
    expect(component).toBeVisible();
});
