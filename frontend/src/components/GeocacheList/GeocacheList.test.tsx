import GeocacheList from "./GeocacheList";
import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import * as GeocacheApi from "../../api/geocaches";
import { Filters } from "../../model/Filters";
jest.mock("axios");

test("component loads", async () => {
    jest.spyOn(GeocacheApi, "getGeoCaches").mockImplementation(async (filters?: Filters) => {
        return [
            {
                referenceCode: "GCK25A",
                postedCoordinates: {
                    latitude: 10,
                    longitude: 20
                },
                name: "Geo 1",
                placedDate: "2004-07-22T00:00:00.000",
                publishedDate: "2004-07-22T00:00:00.000",
                type: "Type1",
                size: "Size1",
                lastVisitedDate: "2004-07-22T00:00:00.000",
                isPremiumOnly: false,
                shortDescription: "Desc1",
                longDescription: "Desc1",
                hints: "hints1"
            },
            {
                referenceCode: "GCK25B",
                postedCoordinates: {
                    latitude: -10,
                    longitude: 1,
                },
                name: "Geo 2",
                placedDate: "2004-07-22T00:00:00.000",
                publishedDate: "2004-07-22T00:00:00.000",
                type: "Type2",
                size: "Size2",
                lastVisitedDate: "2004-07-22T00:00:00.000",
                isPremiumOnly: false,
                shortDescription: "Desc2",
                longDescription: "Desc2",
                hints: "hints2"
            }
        ];
    });
   
    render(<GeocacheList/>);
    await waitFor(()=>{
        expect(screen.getByText("New geocaches")).toBeVisible();
    });
    
});