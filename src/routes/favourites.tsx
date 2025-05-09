import { Button, HStack, VStack } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favourites')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <VStack h={"full"} justifyContent={"center"}>
      <Button>Click me!</Button>
    </VStack>
  )
}
