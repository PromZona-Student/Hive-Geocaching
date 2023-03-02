import { Router } from "express";
import { generateGeoCaches } from "../util/generateGeocaches";

export const geocacheRouter = Router();

const geocaches = generateGeoCaches(1000);

const LIMIT_DEFAULT = 20;

geocacheRouter.get("/", async (request, response) => {
    const limit = request.query.limit ? parseInt(request.query.limit as string) : LIMIT_DEFAULT
    response.json(geocaches.slice(0, limit));
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