import { EmptyContent } from '@/components/Empty'
import { Box } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/favourites')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Box h={"full"} backgroundColor={"white"}>
      <EmptyContent title='Избранные пустые' text='Здесь пока, что ничего нету. Начните добавлять свои любимые блюда'/>
    </Box>
  )
}
