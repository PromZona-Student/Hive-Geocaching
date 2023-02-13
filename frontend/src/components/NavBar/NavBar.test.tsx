import NavBar from "./NavBar";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("Navbar in home (default page)", async () => {
    render(<NavBar/>);
    expect(screen.getByText("New geocaches")).toBeInTheDocument();
});

test("Go to map page", async () => {
    render(<NavBar/>);
    userEvent.click(screen.getByText("Map"));
    expect(screen.getByText("OpenStreetMap")).toBeInTheDocument();
});

test("Go to home page from navbar", async () => {
    render(<NavBar/>);
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("New geocaches")).toBeInTheDocument();
});

test("Go to home page from logo", async () => {
    render(<NavBar/>);
    userEvent.click(screen.getByText("Geocache.fi"));
    expect(screen.getByText("New geocaches")).toBeInTheDocument();
});