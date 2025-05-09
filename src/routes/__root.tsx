import * as React from 'react'
import { createRootRoute } from '@tanstack/react-router'
import { Layout } from '@/components/Layout'
import { HStack } from '@chakra-ui/react'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { useQuery } from '@tanstack/react-query'
import { useLikes } from '@/hooks/useLikes'


export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    const likes = useLikes()
    const { data, isSuccess } = useQuery({
        queryKey: ["likes"],
        queryFn: likes.get_likes
    })
    React.useEffect(() => {
        if (isSuccess) console.log(data)
    }, [isSuccess])
    return (
        <React.Fragment>
            <HStack justifyContent={"center"} alignItems={"flex-end"} h={"100vh"}>
                <Layout />
            </HStack>
            <TanStackRouterDevtools />
        </React.Fragment>
    )
}
