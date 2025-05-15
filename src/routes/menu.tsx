import { Categories } from '@/components/Categories'
import { HProductCard } from '@/components/HProductCard'
import { products } from '@/testDB'
import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { z } from 'zod'

const searchSchema = z.object({
  category: z.number().default(0)
})

export const Route = createFileRoute('/menu')({
  component: RouteComponent,
  validateSearch: searchSchema
})

function RouteComponent() {
  const { category } = Route.useSearch()
  const navigate = useNavigate()

  const handleChangeCategory = (id: number) => {
    navigate({ to: ".", search: { category: id } })
  }

  useEffect(() => console.log(category), [category])
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
      <Categories onChangeCategory={handleChangeCategory} />
      <Grid>
        {products.map((item, index) => (
          <HProductCard item={item} key={index}/>
        ))}
      </Grid>

    </Grid>
  )
}
