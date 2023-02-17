import { Router } from "express";
import { Geocache } from "../../../frontend/src/model/Geocache"
import { generateGeoCaches } from "../util/generateGeocaches";

export const geocacheRouter = Router();

const geocaches = generateGeoCaches(1000);

geocacheRouter.get("/", async (request, response) => {
    response.json(geocaches.slice(0, 100))
});

geocacheRouter.get("/:id", async (request, response) => {
    const geocache = geocaches.find(g => g.referenceCode === request.params.id)
    if(geocache !== undefined){
        response.json(geocache);
    }
    else{
        response.status(404).send("No geocache found");
    }
});