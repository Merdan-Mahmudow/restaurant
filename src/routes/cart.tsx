import { EmptyContent } from '@/components/Empty'
import { Box } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cart')({
  component: RouteComponent,
})

function RouteComponent() {
  <Box h={"full"} backgroundColor={"white"}>
     <EmptyContent title='Корзина пуста' text='Корзина пуста, давайте добавим туда что нибудь'/>
  </Box>
}
