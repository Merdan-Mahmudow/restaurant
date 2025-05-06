import { Box } from "@chakra-ui/react";
import { Header } from "../Header";

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
            <Box bg={"red.600"}></Box>
            <Box bg={"teal"}></Box>
            <Box bg={"teal.500"}></Box>
        </Box>
    )
}