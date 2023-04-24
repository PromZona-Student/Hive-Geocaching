import axios from "axios";
import { Geocache, GeocacheMapDetails } from "../model/Geocache";
import { Filters } from "../model/Filters";

export interface SearchRequest{
    filters: Filters
    orderBy?: "newest"
    skip?: number
    take?: number
}

export const getGeoCaches = async (filters?: Filters) => {
    const geocaches = await axios.get("/api/geocaches", {params: filters});
    return geocaches.data as Array<Geocache>;
};

export const getCache = async (id: string) => {
    const path = "/api/geocaches/" + id;
    const response = await axios.get(path);
    return response.data as Geocache;
};

export const searchGeoCaches = async (filters: Filters, orderBy?: string, skip?: number, take?: number): Promise<Array<Geocache>> => {
    const response = await axios.post("/api/geocaches/search", {
        filters,
        orderBy,
        skip,
        take
    } as SearchRequest);
    return response.data as Array<Geocache>;
};

export const searchGeoCacheMapDetails = async (filters: Filters, orderBy?: string): Promise<Array<GeocacheMapDetails>> => {
    const response = await axios.post("/api/geocaches/mapsearch", {
        filters,
        orderBy
    } as SearchRequest);
    return response.data as Array<GeocacheMapDetails>;
};
