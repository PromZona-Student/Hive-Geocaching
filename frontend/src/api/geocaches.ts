import axios from "axios";
import { Geocache } from "../model/Geocache"; 

export const getGeoCaches = async () => {
    const geocaches: Array<Geocache> = await axios.get("/api/geocaches");
    return geocaches;
};   


  

