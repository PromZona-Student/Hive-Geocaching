/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";

export type UserContextType = {
  user: any;
  setUser: any;
}

const UserContext = createContext({} as UserContextType);

export default UserContext;