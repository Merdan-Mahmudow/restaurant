import { Button, Heading, Text, VStack } from "@chakra-ui/react"

type EmptyProps = {
    title: string
    text: string
    image?: string
}

export function EmptyContent({ title, text }: EmptyProps) {
    return (
        <VStack textAlign={"center"} h={"full"} justifyContent={"center"} gap={"7"}>
            <Heading
                className="tg_font"
                size={"4xl"}
                letterSpacing={"3px"}
                color={"black"}
            >{title}</Heading>

            <Text color={"black"} textTransform={"uppercase"}>{text}</Text>
            <Button textTransform={"uppercase"} backgroundColor={"red.600"} color={"white"} borderRadius={"lg"}>На главную</Button>
        </VStack>
    )
}