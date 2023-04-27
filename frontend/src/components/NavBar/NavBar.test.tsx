import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import {Router} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";
import {User} from "../../model/User";
import UserContext from "../../context/UserContext";
import {UserContextType} from "../../context/UserContext";
import * as AuthApi from "../../api/auth";

type UserContextProviderType = React.ReactNode;

const logoutMockFn = jest.spyOn(AuthApi, "logout").mockImplementation(() => Promise.resolve());

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
    userEvent.click(screen.getByLabelText("Avaa valikko"));
    await waitFor(() => {
        expect(screen.getByText("Kätköt")).toBeVisible();
    });
    userEvent.click(screen.getByText("Kätköt"));
    userEvent.click(screen.getByText("Kartta"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/map");
    });
    userEvent.click(screen.getByLabelText("Etusivulle"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/");
    });
});

test("Test Dropdown logged off", async () => {
    render(<NavBar />, {wrapper: BrowserRouter});
    userEvent.click(screen.getByLabelText("Käyttäjätiedot"));
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
            userEvent.click(screen.getByLabelText("Käyttäjätiedot"));
            await waitFor(()=>{
                expect(screen.getByText("Kirjaudu ulos")).toBeVisible();                
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

test("Logout api is called and user menu is closed after logout is pressed", async () => {
    const user = {
        id: "usr1",
        username: "teppo",
        password: "teppo123",
        email: "teppo@gmail.com",
        isPremium: true
    } as User;
    customRender(<NavBar/>, user);
    userEvent.click(screen.getByLabelText("Käyttäjätiedot"));
    await waitFor(() => {
        userEvent.click(screen.getByText("Kirjaudu ulos"));
    });
    expect(logoutMockFn).toHaveBeenCalled();
    await waitFor(() => {
        expect(screen.queryByText("Kirjaudu ulos")).not.toBeInTheDocument();
    });
});