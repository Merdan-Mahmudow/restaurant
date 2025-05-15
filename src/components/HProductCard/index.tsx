import type { Product } from "@/types/interfaces";
import { Button, Card, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Counter } from "../Counter";
import { useNavigate } from "@tanstack/react-router";

type ProductProps = {
    item: Product
}

export function HProductCard({ item }: ProductProps) {
    const navigate = useNavigate()
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => Math.max(0, prev - 1))

    const handleProductNavigate = () => {
        navigate({to: "/product/$id", params: {id: item.id}})
    }
    return (
        <Card.Root
            overflow="hidden"
            key={item.id}
            bg={"white"}
            rounded={0}
            borderX={"none"}
            borderTop={"none"}>


            <Card.Body flexDir={"row"} p={"0.5em"}>
                <Image
                    src={item.image}
                    alt="Green double couch with wooden legs"
                    w={"6em"}
                    h={"6em"}
                    rounded={"xl"}
                    onClick={handleProductNavigate}
                />
                <Flex flexDir={"column"} px={"2"} gap={"2"}>

                    <Text
                        fontSize={"md"}
                        color={"black"}
                        className="tg_font"
                        letterSpacing="1px"
                        lineHeight={"1em"}
                        onClick={handleProductNavigate}
                    >{item.name}</Text>

                    <Card.Description
                        lineClamp={2}
                        fontSize={"2xs"}
                        lineHeight={"10px"}>
                        {item.description}
                    </Card.Description>


                    <Flex justifyContent={"space-between"}>
                        <Text color={"black"}
                            textStyle="xl"
                            fontWeight="medium"
                            letterSpacing="2px"
                            mt="2"
                            className="tg_font"
                            lineHeight={"10px"}
                        >
                            {item.price}p
                        </Text>
                        <Flex gap={"1"}>

                            {count !== 0 && <Counter count={count} increment={increment} decrement={decrement} />}

                            {count === 0 && <Button
                                border={"1px solid red"}
                                rounded={"xl"}
                                size={"xs"}
                                p={2}
                                onClick={increment}
                            >Добавить</Button>}

                            <IconButton
                                as={!isLiked ? GoHeart : GoHeartFill}
                                size={"xs"}
                                color={"red"}
                                onClick={() => setIsLiked(!isLiked)}></IconButton>
                        </Flex>
                    </Flex>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}