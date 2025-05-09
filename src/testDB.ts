import type { Product } from "./types/interfaces";

export const products: Product[] = [
    {
        id: "1",
        name: "Паста Карбонара",
        description: "Классическое итальянское паста с яйцами, сыром, панчеттой и перцем.",
        price: 420,
        image: "https://example.com/images/spaghetti-carbonara.jpg"
    },
    {
        id: "2",
        name: "Салат Цезарь",
        description: "Свежий салат с гриль курицей, листьями романо, гренками и соусом Цезарь.",
        price: 350,
        image: "https://example.com/images/chicken-caesar-salad.jpg"
    },
    {
        id: "3",
        name: "Гамбургер",
        description: "Сочная говяжья котлета с салатом, помидором, луком и специальным соусом на булке с кунжутом.",
        price: 265,
        image: "https://example.com/images/beef-burger.jpg"
    },
    {
        id: "4",
        name: "Пицца Маргарита",
        description: "Традиционная пицца с томатным соусом, сыром моцарелла и свежим базиликом.",
        price: 750,
        image: "https://example.com/images/margherita-pizza.jpg"
    },
    {
        id: "5",
        name: "Шоколадный торт",
        description: "Тёплый шоколадный торт с жидкой шоколадной начинкой, подаётся с мороженым ванильным.",
        price: 669,
        image: "https://example.com/images/chocolate-lava-cake.jpg"
    }
];