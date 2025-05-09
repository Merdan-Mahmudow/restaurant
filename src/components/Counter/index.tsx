import { Button, HStack, Text } from "@chakra-ui/react"

type CounterProps = {
    count: number
    increment: () => void
    decrement: () => void
}

export function Counter({ count, increment, decrement }: CounterProps) {
    return (
        <HStack>
            <Button variant={"plain"} onClick={decrement} border={"1px solid red"} color={"black"} h={"8"} minW={"1"} w={"2"} rounded={"full"}>-</Button>

            <Text color={"black"} >{count}</Text>

            <Button variant={"plain"} onClick={increment} border={"1px solid red"} color={"black"} h={"8"} minW={"1"} w={"2"} rounded={"full"}>+</Button>
        </HStack>
    )
}