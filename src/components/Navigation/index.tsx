import { PATHNAME } from "@/types/enums";
import { Heading, HStack, Icon, VStack } from "@chakra-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { FaArrowLeftLong } from "react-icons/fa6";

export function Navigation() {
    const location = useLocation()
    return (
        <HStack bg={"red.600"} px={"1em"}>
            {(location.pathname !== PATHNAME.MAIN && location.pathname !== PATHNAME.MENU) && (
                <Link to="/menu">
                    <Icon as={FaArrowLeftLong} size={"xl"} />
                </Link>
            )}

            <VStack w={"full"}>
                <Heading
                    className="tg_font"
                    size={"3xl"}
                    letterSpacing={"4px"}
                    pos={"relative"}
                    right={location.pathname !== PATHNAME.MAIN ? "0.5em" : ""}>

                    {location.pathname === PATHNAME.MAIN && "Главная"}
                    {location.pathname === PATHNAME.MENU && "Меню"}
                    {location.pathname === PATHNAME.FAVOURITES && "Избранное"}
                    {location.pathname === PATHNAME.CART && "Корзина"}
                    {location.pathname.includes("/product") && "Описание"}
                </Heading>
            </VStack>

        </HStack>
    )
}