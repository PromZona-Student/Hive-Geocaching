import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import {Router} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";
import {User} from "../../model/User";
import UserContext from "../../context/UserContext";
import {UserContextType} from "../../context/UserContext";

type UserContextProviderType = React.ReactNode;

const customRender = (children: UserContextProviderType, mockUser: User) => {
    const mockSetUser = jest.fn();
    const mockProps = {
        user: mockUser,
        setUser: mockSetUser
    } as UserContextType;
    return render(
        <UserContext.Provider value = {mockProps}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </UserContext.Provider>
    );
};

test("Loads and navigates", async () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <NavBar/>
        </Router>
    );
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/");
    });
    userEvent.click(screen.getByText("Etusivu"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/");
    });
    userEvent.click(screen.getByText("Kartta"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/kartta");
    });
    userEvent.click(screen.getByLabelText("Geocache.fi"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/");
    });
});

test("Test Dropdown logged off", async () => {
    render(<NavBar />, {wrapper: BrowserRouter});
    userEvent.click(screen.getByTestId("drop-button"));
    await waitFor(()=>{
        expect(screen.getByText("Kirjaudu/Rekisteröidy")).toBeVisible();
    });
});

describe("Test Dropdown logged in", () => {
    [
        {
            scenario: "Premium user",
            user: {
                id: "usr1",
                username: "teppo",
                password: "teppo123",
                email: "teppo@gmail.com",
                isPremium: true
            } as User
        },
        {
            scenario: "Regular user",
            user: {
                id: "usr2",
                username: "miisa",
                password: "miisa123",
                email: "miisa@gmail.com",
                isPremium: false
            } as User
        }
    ].forEach(({scenario, user}) => {
        test(scenario, async () => {            
            customRender(<NavBar/>, user);
            userEvent.click(screen.getByTestId("drop-button"));
            await waitFor(()=>{
                expect(screen.getByText("Kirjaa ulos")).toBeVisible();                
            });    
            await waitFor(()=>{               
                if(user.isPremium){
                    expect(screen.getByLabelText("Premium user")).toBeVisible();
                }
                else{
                    expect(screen.queryByLabelText("Premium user")).toBeNull();
                }
            });
        });
    });
});