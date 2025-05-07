import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { HStack } from '@chakra-ui/react'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <React.Fragment>
            <HStack justifyContent={"center"} alignItems={"flex-end"} h={"100vh"}>
                <Layout />
            </HStack>
        </React.Fragment>
    )
}
