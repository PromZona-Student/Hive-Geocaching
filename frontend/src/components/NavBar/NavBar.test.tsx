import {render, screen, waitFor} from "@testing-library/react";
import { createMemoryHistory } from "history";
import {Router} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NavBar from "./NavBar";

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
    userEvent.click(screen.getByText("Home"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/");
    });
    userEvent.click(screen.getByText("Map"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/map");
    });
    userEvent.click(screen.getByLabelText("Geocache.fi"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/");
    });
});