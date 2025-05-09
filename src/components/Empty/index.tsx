import { Heading, Text, VStack } from "@chakra-ui/react"

type EmptyProps = {
    title: string
    text: string
    image?: string
}

export function EmptyContent({ title, text }: EmptyProps) {
    return (
        <VStack textAlign={"center"} h={"full"} justifyContent={"center"}>
            <Heading
                className="tg_font"
                size={"2xl"}
                letterSpacing={"3px"}
            >{title}</Heading>

            <Text>{text}</Text>
        </VStack>
    )
}