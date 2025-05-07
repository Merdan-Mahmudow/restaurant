import { Box } from "@chakra-ui/react";
import { Header } from "../Header";
import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../Navbar";
import { Navigation } from "../Navigation";

export function Layout() {
    return (
        <Box
            w={"93%"}
            h={"98%"}
            bg={"whiteAlpha.600"}
            roundedTop={"2em"}
            overflow={"hidden"}
            display={"grid"}
            gridTemplateRows={"6em 4em 1fr 4em"}
        >
            <Header />
            <Navigation />
            <Outlet />
            <Navbar />
        </Box>
    )
}