export const PATHNAME = {
    MAIN: "/",
    FAVOURITES: "/favourites",
    CART: "/cart",
    MENU: "/menu"
}
export type PATHNAME = typeof PATHNAME[keyof typeof PATHNAME]
