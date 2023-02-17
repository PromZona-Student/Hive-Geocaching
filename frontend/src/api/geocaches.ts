import axios from "axios";
import { Geocache } from "../model/Geocache";

export const getGeoCaches = async () => {
    const geocaches = await axios("/api/geocaches");
    return geocaches.data as Array<Geocache>;
};

