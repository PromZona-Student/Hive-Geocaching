import { Router } from "express";
import { Geocache } from "../../../frontend/src/model/Geocache"

export const geocacheRouter = Router();

const geocaches: Array<Geocache> = [
    {
        id: "GCK25A",
        latitude: 10,
        longitude: 20,
        name: "Geo 1",
        placedDate: "2004-07-22T00:00:00.000",
        publishedDate: "2004-07-22T00:00:00.000"
    },
    {
        id: "GCK25B",
        latitude: -10,
        longitude: 1,
        name: "Geo 2",
        placedDate: "2004-07-22T00:00:00.000",
        publishedDate: "2004-07-22T00:00:00.000"
    },
    {
        id: "GCK25C",
        latitude: -10,
        longitude: 3,
        name: "Geo 3",
        placedDate: "2004-07-22T00:00:00.000",
        publishedDate: "2004-07-22T00:00:00.000"
    }
];

geocacheRouter.get("/", async (request, response) => {
    response.json(geocaches)
});

geocacheRouter.get("/:id", async (request, response) => {
    const geocache = geocaches.find(g => g.id === request.params.id)
    if(geocache !== undefined){
        response.json(geocache);
    }
    else{
        response.status(404).send("No geocache found");
    }
});