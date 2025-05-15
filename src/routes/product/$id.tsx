import { Counter } from '@/components/Counter'
import { products } from '@/testDB'
import { Box, Image, Button, Card, IconButton, Text } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'

export const Route = createFileRoute('/product/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const { id: productID } = Route.useParams()
  const product = products.find(el => el.id == productID)
  const [isLiked, setIsLiked] = useState<boolean>(false)
      const [count, setCount] = useState<number>(0);
      const increment = () => setCount(prev => prev + 1)
      const decrement = () => setCount(prev => Math.max(0, prev - 1))
      return (
          <Card.Root
              overflow="hidden"
              key={product?.id}
              bg={"white"}
              borderColor={"red.500"}
              borderWidth={"2px"}
              roundedBottom={"3xl"}>
  
              <Image
                  src={product?.image}
                  alt="Green double couch with wooden legs"
                  
              />
              <Card.Body px={"10px"} py={"10px"} gap={"2"} justifyContent={"space-between"}>
  
                  <Text
                      fontSize={"lg"}
                      color={"black"}
                      className="tg_font"
                      letterSpacing="2px"
                      lineHeight={"1em"}
                  >{product?.name}</Text>
  
                  <Card.Description
                      lineClamp={2}
                      fontSize={"xs"}
                      lineHeight={"10px"}>
                      {product?.description}
                  </Card.Description>
  
                  <Text color={"black"}
                      textStyle="xl"
                      fontWeight="medium"
                      letterSpacing="2px"
                      mt="2"
                      className="tg_font"
                      lineHeight={"10px"}
                  >
                      {product?.price}p
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
