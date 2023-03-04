import axios from "axios";
import { Geocache } from "../model/Geocache";
import { Filters } from "../model/Filters";

export const getGeoCaches = async (filters?: Filters) => {
    const geocaches = await axios.get("/api/geocaches", {params: filters});
    return geocaches.data as Array<Geocache>;
};

export const getCache = async (id: string) => {
    const path = "/api/geocaches/" + id; 
    const response = await axios.get(path);
    return response.data as Geocache;
};
