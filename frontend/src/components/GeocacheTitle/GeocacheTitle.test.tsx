import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import GeocacheTitle from "./GeocacheTitle";

test("Component loads", async () => {
    render(
        <GeocacheTitle date={new Date()}/>
    );
    await waitFor(()=>{
        expect(screen.getByTestId("geocache-title-div")).toBeVisible();
    }); 
});