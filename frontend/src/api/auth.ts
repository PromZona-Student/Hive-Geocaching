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

export const logout = async () => {
    await axios.post("/api/auth/logout");
};

export const register = async (username: string, email: string, password: string, confirm: string) => {
    if(password !== confirm) {
        return { status: 400, message: "Salasanat eivät täsmää" };
    }

    const emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9-]+[.]{1}[a-z]{2,4}$");
    const isEmailValid = emailPattern.test(email);
    if(!isEmailValid) {
        return { status: 400, message: "Sähköpostiosoite ei kelpaa" };
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

export const refreshSession = async () => {
    const response = await axios.get("/api/auth/session");
    if(response.data.user){
        return response.data.user as User;
    }
    else{
        return null;
    }
};
