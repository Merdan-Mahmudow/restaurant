import { request } from "@/libs/request";

interface LikeItem {
    product_id: number
}

interface GetLikesResponse {
    items: LikeItem[]
}
interface User {
    id: number
    user: string
}

export function useLikes () {
    const user: string = localStorage.getItem("user") || ""
    const userJSON = JSON.parse(user) as User
    async function get_likes(): Promise<GetLikesResponse> {
        const response = request("get", `/favourites/${userJSON.id}`)
        return (await response).data as GetLikesResponse
    }
    return {
        get_likes
    }
}