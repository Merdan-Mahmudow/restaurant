import { Button, Group, HStack, Input } from '@chakra-ui/react'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const [user, setUser] = useState<string>("")
  const authed = localStorage.getItem("user") || ""
  const handleSaveUser = () => {
    localStorage.setItem("user", JSON.stringify({id: Math.floor(Math.random() * 100000), user: user}))
  }

  return (
    <HStack h={"full"}>
      {authed === "" && 
      <Group attached w="full" maxW="sm">
    
        <Input
          flex="1"
          placeholder="Введи свой Телеграм"
          color={'black'}
          _placeholder={{ color: "black" }} 
          onChange={(e) => setUser(e.target.value)}/>

        <Button
          bg="bg.subtle"
          variant="outline"
          onClick={handleSaveUser}>
          Сохранить
        </Button>

      </Group>}
    </HStack>
  )
}
