import { randomUUID } from "crypto";

interface Session{
    sessionId: string,
    userId: string,
};

type UserId = string;

const sessions = new Map<UserId, Session>();

export function getSession(userId: string){
    return sessions.get(userId)
}

export function generateSession(userId: string){
    const session = {
        sessionId: randomUUID(),
        userId
    };
    sessions.set(userId, session);
    return session;
}