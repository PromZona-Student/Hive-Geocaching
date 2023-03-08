import {useState} from "react";
import {User} from "../model/User";
import UserContext from "./UserContext";

type AuthUser = User;

type UserContextProviderType ={
    children: React.ReactNode;
}

export const UserContextProvider = ({children}: UserContextProviderType) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    return(
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};