import { Router } from "express";
import { users } from "../data/users";
import { User } from "../../../frontend/src/model/User"
export const authRouter = Router();

interface LoginRequest {
    username: string,
    password: string
}

authRouter.post("/login", async (request, response) => {
    const loginRequest = request.body as LoginRequest;

    if (!loginRequest.username || !loginRequest.password) {
        return response.status(401).send();
    }

    const user = users.find(user => user.username === loginRequest.username);

    if (!user || (loginRequest.password !== user.password)) {
        return response.status(401).send();
    }

    return response.json(
        {
            id: user.id,
            username: user.username,
            email: user.email,
            isPremium: user.isPremium
        } as User
    );
});