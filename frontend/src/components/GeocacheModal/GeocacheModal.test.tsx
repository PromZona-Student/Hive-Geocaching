import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import GeocacheModal from "./GeocacheModal";
import { BrowserRouter } from "react-router-dom";

const isOpen = true;
const toggle = jest.fn();
const currentCache = {
    referenceCode: "",
    name: "",
    placedDate: "",
    publishedDate: "",
    type: "",
    size: "",
    postedCoordinates: {
        latitude: 0,
        longitude: 0,
    },
    lastVisitedDate: "",
    isPremiumOnly: false,
    shortDescription: "",
    longDescription: "",
    hints: "",
    location: {
        country: "",
        countryId: 0,
        state: "",
        stateId: 0,
    },
    ownerAlias: "",
    difficulty: 0,
    terrain: 0
};

test("Component loads", async () => {
    render(
        <BrowserRouter>
            <GeocacheModal isOpen={isOpen} toggle={toggle} cache={currentCache}/>
        </BrowserRouter>
    );
    await waitFor(()=>{
        expect(screen.getByTestId("cache-modal-header")).toBeVisible();
    }); 
});