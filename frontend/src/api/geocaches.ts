import axios from "axios";
import { Geocache } from "../model/Geocache";
import { Filters } from "../model/Filters";

export const getGeoCaches = async (filters?: Filters) => {
    const geocaches = await axios.get("/api/geocaches", {params: filters});
    return geocaches.data as Array<Geocache>;
};

export const getCache = async (id?: string | undefined) => {
    if(!(id)) { id = "null"; }
    const cache = (await getGeoCaches()).filter(item => item.referenceCode==id);
    if(!cache || cache.length < 1) return {} as Geocache;
    return cache[0] as Geocache; 
};
