import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/menu')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Grid
      templateRows={"5em 3em 1fr"}>
      <Box
        bg={"white"}
        pt={"0.5em"}
        textAlign={"center"}>
        <Heading
          className='tg_font'
          letterSpacing={"0.6px"}
          color={"black"}
          size={"sm"}
        >внимание любителям корейской еды!
        </Heading>
        <Text color={"grey"} fontSize={"sm"}>Адрес навынос : г.Южно-Сахалинск, улица Мира 231/9</Text>
        <Text color={"grey"} fontSize={"sm"}>Принимаем заказы : ежедневно с 10:00 до 21:30</Text>
      </Box>
      <Box bg={"red.500"}>

      </Box>
      <Box>

      </Box>

    </Grid>
  )
}
