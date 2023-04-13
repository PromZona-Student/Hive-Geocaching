import { randomUUID } from "crypto";

interface Session{
    sessionId: string,
    userId: string,
};

type UserId = string;
type SessionId = string;

export const sessions = new Map<SessionId, Session>();

export function getSession(userId: string){
    return sessions.get(userId)
}

export function generateSession(userId: string){
    const sessionId = randomUUID();
    const session = {
        sessionId,
        userId
    };
    sessions.set(sessionId, session);
    return session;
}