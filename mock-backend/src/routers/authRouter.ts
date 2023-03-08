import { Router } from "express";
import { users } from "../data/users";
import { User } from "../../../frontend/src/model/User"
import { generateSession } from "../data/sessions";
export const authRouter = Router();

interface LoginRequest {
    username: string,
    password: string
}

authRouter.post("/login", async (request, response) => {
    //console.log(request);
    const loginRequest = request.body.params as LoginRequest;

    if (!loginRequest.username || !loginRequest.password) {
        return response.status(401).send();
    }

    const user = users.find(user => user.username === loginRequest.username);

    if (!user || (loginRequest.password !== user.password)) {
        return response.status(401).send();
    }

    const session = generateSession(user.id);

    response.cookie("SID", session.sessionId);

    return response.json(
        {
            id: user.id,
            username: user.username,
            email: user.email,
            isPremium: user.isPremium
        } as User
    );
});