import { Router } from "express";
import { Geocache } from "../../../frontend/src/model/Geocache"

export const geocacheRouter = Router();

const geocaches: Array<Geocache> = [
    {
        id: "GCK25A",
        latitude: 10,
        longitude: 20
    },
    {
        id: "GCK25B",
        latitude: -10,
        longitude: 1
    }
]

geocacheRouter.get("/", async (request, response) => {
    response.json(geocaches)
});

geocacheRouter.get("/:id", async (request, response) => {
    const geocache = geocaches.find(g => g.id === request.params.id)
    if(geocache){
        response.json(geocache);
    }
    else{
        response.status(404).send("No geocache found");
    }
});