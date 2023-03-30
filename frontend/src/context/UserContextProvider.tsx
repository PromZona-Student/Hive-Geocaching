import {useState} from "react";
import {User} from "../model/User";
import UserContext from "./UserContext";

type UserContextProviderType ={
    children: React.ReactNode;
}

export const UserContextProvider = ({children}: UserContextProviderType) => {
    const [user, setUser] = useState<User | null>(null);
    return(
        <UserContext.Provider value = {{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};