import { createContext } from "react";
import { User } from "../model/User";

export type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext({} as UserContextType);

export default UserContext;