import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { HStack } from '@chakra-ui/react'
import "./styles/index.css"
import { Layout } from './components/Layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <HStack justifyContent={"center"} alignItems={"flex-end"} h={"100vh"}>
        <Layout />
      </HStack>

    </Provider>
  </StrictMode>
)
