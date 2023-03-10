import { Router } from "express";
import { users } from "../data/users";
import { User } from "../../../frontend/src/model/User"
import { generateSession } from "../data/sessions";
import { UserDetails } from "../model/UserDetails";
import { randomUUID } from "crypto";
export const authRouter = Router();

interface LoginRequest {
    username: string,
    password: string
}

interface RegisterRequest {
    username: string,
    email: string,
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

authRouter.post("/register", async (request, response) => {
    const registerRequest = request.body as RegisterRequest;

    if (!registerRequest.username) {
        return response.status(400).send("Username is required");
    }

    if (!registerRequest.password) {
        return response.status(400).send("Password is required");
    }

    if (!registerRequest.email) {
        return response.status(400).send("Email is required");
    }

    const foundUser = users.find(user => user.username === registerRequest.username);

    if (foundUser !== undefined) {
        return response.status(400).send("Username already taken");
    }

    const newUser: UserDetails = {
        id: randomUUID(),
        username: registerRequest.username,
        password: registerRequest.password,
        email: registerRequest.email,
        isPremium: false
    }

    users.push(newUser);
    const session = generateSession(newUser.id);
    response.cookie("SID", session.sessionId);

    return response.json(
        {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            isPremium: newUser.isPremium
        } as User
    );
});