import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "./HomePage";

test("component loads", async () => {
    render(<HomePage/>);
    await waitFor(() => {
        expect(screen.getByText("Uusimmat")).toBeVisible();
    });    
});
