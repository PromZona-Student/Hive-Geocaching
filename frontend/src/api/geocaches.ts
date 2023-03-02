import axios from "axios";
import { Geocache } from "../model/Geocache";
import { Filters } from "../model/Filters";
//import { UserDetailsResponse } from "../model/UserDetailsResponse";

export const getGeoCaches = async (filters?: Filters) => {
    const geocaches = await axios.get("/api/geocaches", {params: filters});
    return geocaches.data as Array<Geocache>;
};

/*
Login:
- User exists?
- Password is correct? (for this user)
 */
export const login = async (username?: string, password?: string) => {
    const response = await axios.post("/api/auth/login", {params: [username,password]});
    return response.data;
    //console.log(username,password);
};

