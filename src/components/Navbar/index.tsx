import { Box, chakra, HStack, Icon, Text } from "@chakra-ui/react";
import { Link, useLocation } from "@tanstack/react-router";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { PiBowlFood, PiBowlFoodFill } from "react-icons/pi";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { PATHNAME } from "@/types/enums";
const Route = chakra(Link)

export function Navbar() {
    const location = useLocation()


    return (
        <HStack bg={"white"} justifyContent={"space-around"} px={"1em"}>

            <Route to="/">
                {location.pathname !== PATHNAME.MAIN && <Icon as={AiOutlineHome} color={"black"} size={"lg"} />}
                {location.pathname === PATHNAME.MAIN &&
                    <Box
                        bg={"blackAlpha.300"}
                        py={"3px"}
                        px={"5px"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"5px"}
                        rounded={"full"}>
                        <Icon as={AiFillHome} color={"black"} size={"lg"} />
                        <Text fontSize={"sm"} color={"black"}>Главная</Text>
                    </Box>
                }
            </Route>

            <Route to="/menu">
                {location.pathname !== PATHNAME.MENU &&
                    <Box
                        bg={"orange.300"}
                        py={"3px"}
                        px={"3px"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"5px"}
                        rounded={"full"}>
                        <Icon as={PiBowlFood} color={"black"} size={"lg"} />
                    </Box>
                }
                {location.pathname === PATHNAME.MENU &&
                    <Box
                        bg={"orange.300"}
                        py={"3px"}
                        px={"5px"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"5px"}
                        rounded={"full"}>
                        <Icon as={PiBowlFoodFill} color={"black"} size={"lg"} />
                        <Text fontSize={"sm"} color={"black"}>Меню</Text>
                    </Box>}
            </Route>

            <Route to="/favourites">
                {location.pathname !== PATHNAME.FAVOURITES && <Icon as={GoHeart} color={"black"} size={"lg"} />}
                {location.pathname === PATHNAME.FAVOURITES &&
                    <Box
                        bg={"blackAlpha.300"}
                        py={"3px"}
                        px={"5px"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"5px"}
                        rounded={"full"}>
                        <Icon as={GoHeartFill} color={"red.600"} size={"lg"} />
                        <Text fontSize={"sm"} color={"black"}>Избранное</Text>
                    </Box>
                }
            </Route>

            <Route to="/cart">
                {location.pathname !== PATHNAME.CART && <Icon as={RiShoppingCartLine} color={"black"} size={"lg"} />}
                {location.pathname === PATHNAME.CART &&
                    <Box
                        bg={"blackAlpha.300"}
                        py={"3px"}
                        px={"5px"}
                        display={"flex"}
                        alignItems={"center"}
                        gap={"5px"}
                        rounded={"full"}>
                        <Icon as={RiShoppingCartFill} color={"black"} size={"lg"} />
                        <Text fontSize={"sm"} color={"black"}>Корзина</Text>
                    </Box>
                }
            </Route>

        </HStack>
    )
}