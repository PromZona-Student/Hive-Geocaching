import {render, screen, waitFor} from "@testing-library/react";
import { createMemoryHistory } from "history";
import {Router} from "react-router-dom";
import App from "../../App";
import userEvent from "@testing-library/user-event";

test("Loads and navigates", async () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <App />
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
    userEvent.click(screen.getByText("Geocache.fi"));
    await waitFor(()=>{
        expect(history.location.pathname).toEqual("/");
    });
});