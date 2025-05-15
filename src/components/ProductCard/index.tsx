import type { Product } from "@/types/interfaces";
import { Button, Card, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Counter } from "../Counter";

type ProductProps = {
    item: Product
}

export function ProductCard({ item }: ProductProps) {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0);
    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => Math.max(0, prev - 1))
    return (
        <Card.Root
            overflow="hidden"
            key={item.id}
            bg={"white"}
            borderColor={"red.500"}
            borderWidth={"2px"}
            rounded={"3xl"}>

            <Image
                src={item.image}
                alt="Green double couch with wooden legs"
                h={"10em"}
            />
            <Card.Body px={"10px"} py={"5px"} gap={"1"} justifyContent={"space-between"}>

                <Text
                    fontSize={"md"}
                    color={"black"}
                    className="tg_font"
                    letterSpacing="2px"
                    lineHeight={"1em"}
                >{item.name}</Text>

                <Card.Description
                    lineClamp={2}
                    fontSize={"2xs"}
                    lineHeight={"10px"}>
                    {item.description}
                </Card.Description>

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

            </Card.Body>

            <Card.Footer
                p={2}
                display={"flex"}
                justifyContent={"space-between"}>


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

            </Card.Footer>
        </Card.Root>
    )
}