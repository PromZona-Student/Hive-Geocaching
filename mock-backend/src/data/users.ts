import { UserDetails } from "../model/UserDetails"

export const users: Array<UserDetails> = [
    {
        id: "usr1",
        username: "teppo",
        password: "teppo123",
        email: "teppo@gmail.com",
        isPremium: true
    },
    {
        id: "usr2",
        username: "miisa",
        password: "miisa123",
        email: "miisa@gmail.com",
        isPremium: false
    }
]

export const getUser = (userId: string) => {
    return users.find(u => u.id === userId);
};