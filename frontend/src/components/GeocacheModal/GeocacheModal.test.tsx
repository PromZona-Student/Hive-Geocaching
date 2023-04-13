import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import GeocacheModal from "./GeocacheModal";
import { BrowserRouter } from "react-router-dom";

const isOpen = true;
const toggle = jest.fn();

test("Component loads", async () => {
    render(
        <BrowserRouter>
            <GeocacheModal isOpen={isOpen} toggle={toggle} cacheId={null}/>
        </BrowserRouter>
    );
    await waitFor(()=>{
        expect(screen.getByTestId("cache-modal-header")).toBeVisible();
    }); 
});