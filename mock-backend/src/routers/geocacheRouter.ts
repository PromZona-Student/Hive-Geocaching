import { Router } from "express";
import { generateGeoCaches } from "../util/generateGeocaches";
import { Filters } from "../../../frontend/src/model/Filters";

export const geocacheRouter = Router();

const geocaches = generateGeoCaches(1000);

const LIMIT_DEFAULT = 20;

// Mean Earth Radius (https://rosettacode.org/wiki/Haversine_formula)
const R = 6371000;

interface LatLng {
    lat: number,
    lng: number
}


// distance between two geographical points (https://en.wikipedia.org/wiki/Spherical_law_of_cosines)
const meterDistance = (latlng1: LatLng, latlng2: LatLng): number => {
    const rad = Math.PI / 180;
    const lat1 = latlng1.lat * rad;
    const lat2 = latlng2.lat * rad;
    const sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2)
    const sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2)
    const a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c;
}

geocacheRouter.get("/", async (request, response) => {
    const limit = request.query.limit ? parseInt(request.query.limit as string) : LIMIT_DEFAULT
    response.json(geocaches.slice(0, limit));
});

geocacheRouter.get("/:id", async (request, response) => {
    const geocache = geocaches.find(g => g.referenceCode === request.params.id)
    if (geocache !== undefined) {
        response.json(geocache);
    }
    else {
        response.status(404).send("No geocache found");
    }
});

geocacheRouter.post("/search", async (request, response) => {
    const filters = request.body as Filters;
    const center = filters.centerPoint!;
    const distance = filters.maxDistance!;
    let g = geocaches.filter(c => {
        const dist = meterDistance(center, {
            lat: c.postedCoordinates.latitude,
            lng: c.postedCoordinates.longitude
        }) / 1000
        return dist <= distance
    })

    g = g.slice(0, filters.limit ? filters.limit : LIMIT_DEFAULT);
    return response.json(g);
})