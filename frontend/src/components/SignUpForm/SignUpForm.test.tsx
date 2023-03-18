import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpForm from "./SignUpForm";
//import userEvent from "@testing-library/user-event";

jest.mock("axios");
//import axios from "axios";

const toggleContent = jest.fn();
const toggleShowParent = jest.fn();

test("Component loads", async () => {
    render(<SignUpForm handleOnClick={toggleContent} toggleShowParent={toggleShowParent}/>);
    await waitFor(()=>{
        expect(screen.getByTestId("signup-title")).toBeVisible();
    });
});
