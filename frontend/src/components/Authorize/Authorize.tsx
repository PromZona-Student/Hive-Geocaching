import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Outlet } from "react-router";
import { User } from "../../model/User";
import UnauthorizedPage from "../../pages/UnauthorizedPage";

type Role = "guest" | "basic" | "premium";

interface Props {
    allowedRoles: Array<Role>
    unauthorizedMsg: string
}

const Authorize = ({ 
    allowedRoles,
    unauthorizedMsg 
}: Props) => {
    const { user } = useContext(UserContext);

    const getUserRole = (user: User | null): Role => {
        if(user === null){
            return "guest";
        }
        else if(user.isPremium){
            return "premium";
        }
        else{
            return "basic";
        }
    };

    const isAuthorized = () => {
        const userRole = getUserRole(user);
        return allowedRoles.includes(userRole);
    };

    return (
        <>
            {isAuthorized() && (
                <Outlet />
            )}
            {!isAuthorized() && (
                <UnauthorizedPage msg={unauthorizedMsg}/>
            )}
        </>
    );
};

export default Authorize;