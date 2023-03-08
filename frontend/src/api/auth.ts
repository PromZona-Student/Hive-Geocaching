import axios from "axios";
import { User } from "../model/User";

export const login = async (username?: string, password?: string) => {
    try {
        const response = await axios.post("/api/auth/login", {params: {username,password}});
        if (response.status === 200) {
            return response.data as User;
        }
    } catch (err) {
        return null;
    }
};