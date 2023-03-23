import {render, screen, waitFor} from "@testing-library/react";
import "@testing-library/jest-dom";
import SignupForm from "./SignUpForm";

const toggleContent = jest.fn();

test("Component loads", async () => {
    render(<SignupForm handleOnClick={toggleContent}/>);
    await waitFor(()=>{
        expect(screen.getByTestId("signup-title")).toBeVisible();
    });
});

