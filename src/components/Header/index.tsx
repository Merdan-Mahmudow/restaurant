import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import HeaderRamen from "@/assets/header_ramen.png"
import KIMCHISTOP from "@/assets/kimchistop.svg"
import FireHeart from "@/assets/fire-heart.png"

export function Header() {
    return (
        <HStack
            bg={"white"}
            px={"1.5em"}
            alignItems={"center"}
            justifyContent={"space-between"}>
            <Image
                src={HeaderRamen}
                w={"2.5em"} />
            <VStack >
                <Image
                    src={KIMCHISTOP}
                    w={"11em"} 
                    pos={"relative"}
                    top={"0.5em"}/>
                <Text
                    color={"black"}
                    fontSize={"sm"}
                    textTransform={"uppercase"}
                    className="na_regular_font"
                    letterSpacing={"1px"}
                    pos={"relative"}
                    top={"-0.5em"}
                >самая вкусная еда</Text>
            </VStack>
            <Image
                src={FireHeart}
                w={"3em"} />
        </HStack>
    )
}