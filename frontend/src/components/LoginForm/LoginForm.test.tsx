import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

jest.mock("axios");
import axios from "axios";

const toggleContent = jest.fn();
const toggleShowParent = jest.fn();

test("Component loads", async () => {
    render(<LoginForm handleOnClick={toggleContent} toggleShowParent={toggleShowParent}/>);
    await waitFor(()=>{
        expect(screen.getByTestId("login-title")).toBeVisible();
    });
});

test("Login api call is made", async () => {          
    render(<LoginForm handleOnClick={toggleContent} toggleShowParent={toggleShowParent}/>);
    const usernnameField = screen.getByTestId("username-login");
    const passwordField = screen.getByTestId("password-login");  
    const username = "teppo";
    const password = "teppo123"; 
    userEvent.type(usernnameField, username);
    userEvent.type(passwordField, password);
    userEvent.click(screen.getByTestId("login-submit"));
    await waitFor(()=>{      
        expect(axios.post).toBeCalledWith(
            "/api/auth/login",
            {params:{username, password}},
        );              
    });
});