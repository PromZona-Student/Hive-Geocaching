import axios, { AxiosError } from "axios";
import { User } from "../model/User";

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post("/api/auth/login", { username, password });
        if (response.status === 200) {
            return response.data as User;
        }
    } catch (err) {
        return null;
    }
};

export const register = async (username: string, email: string, password: string, confirm: string) => {
    if(password !== confirm) {
        return { status: 400, message: "Salasanat eivät täsmää"};
    }
    try {
        const response = await axios.post("/api/auth/register", { username, password, email });
        if (response.status == 200) {
            const user: User = response.data as User;
            return { status: 200, data: user };
        }
        else {
            return { status: 400, message: "Ei sallittu" };
        }
    } catch (err) {
        const error = err as AxiosError<Error>;
        const status = error.response?.status;
        const msg = error.response?.data;
        return { status: status, message: msg };
    }
};
