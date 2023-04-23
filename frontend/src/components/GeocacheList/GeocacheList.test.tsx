import GeocacheList from "./GeocacheList";
import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Geocache } from "../../model/Geocache";
import { BrowserRouter } from "react-router-dom";
jest.mock("axios");

test("component loads", async () => {
    const geocaches: Array<Geocache> = [
        {
            referenceCode: "GCK25A",
            postedCoordinates: {
                latitude: 10,
                longitude: 20
            },
            name: "Geo 1",
            isMeeting: false,
            placedDate: "2004-07-22T00:00:00.000",
            publishedDate: "2004-07-22T00:00:00.000",
            type: "Type1",
            size: "Size1",
            lastVisitedDate: "2004-07-22T00:00:00.000",
            isPremiumOnly: false,
            shortDescription: "Desc1",
            longDescription: "Desc1",
            hints: "hints1",
            location: {
                country: "",
                countryId: 0,
                state: "",
                stateId: 0,
            },
            ownerAlias: "",
            difficulty: 0,
            terrain: 0
        },
        {
            referenceCode: "GCK25B",
            postedCoordinates: {
                latitude: -10,
                longitude: 1,
            },
            name: "Geo 2",
            isMeeting: false,
            placedDate: "2004-07-22T00:00:00.000",
            publishedDate: "2004-07-22T00:00:00.000",
            type: "Type2",
            size: "Size2",
            lastVisitedDate: "2004-07-22T00:00:00.000",
            isPremiumOnly: false,
            shortDescription: "Desc2",
            longDescription: "Desc2",
            hints: "hints2",
            location: {
                country: "",
                countryId: 0,
                state: "",
                stateId: 0,
            },
            ownerAlias: "",
            difficulty: 0,
            terrain: 0
        }
    ];
   
    render(
        <BrowserRouter>
            <GeocacheList geocaches={geocaches}/>
        </BrowserRouter>
    );
    await waitFor(()=>{
        expect(screen.getByText("Geo 1")).toBeVisible();
    });   
});
