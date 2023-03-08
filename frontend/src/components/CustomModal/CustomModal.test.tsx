import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomModal from "./CustomModal";
import userEvent from "@testing-library/user-event";

const toggle = jest.fn();

test("Component loads and navigates", async () => {
    render(
        <CustomModal isOpen={true} toggle={toggle}/> 
    );
    expect(screen.getByTestId("login-title")).toBeVisible();
    userEvent.click(screen.getByTestId("signup-button"));
    await waitFor(()=>{
        expect(screen.getByTestId("signup-title")).toBeVisible();
    });
    userEvent.click(screen.getByTestId("login-button"));
    await waitFor(()=>{
        expect(screen.getByTestId("login-title")).toBeVisible();
    });
});