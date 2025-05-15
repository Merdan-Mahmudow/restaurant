import type { Product } from "./types/interfaces";

export const products: Product[] = [
    {
        id: "1",
        name: "Паста Карбонара",
        description: "Классическое итальянское паста с яйцами, сыром, панчеттой и перцем.",
        price: 420,
        image: "https://avatars.mds.yandex.net/get-znatoki/880589/2a0000017ff9f732db10f0567527b9149e8a/orig"
    },
    {
        id: "2",
        name: "Салат Цезарь",
        description: "Свежий салат с гриль курицей, листьями романо, гренками и соусом Цезарь.",
        price: 350,
        image: "https://gryadushka.ru/wp-content/uploads/2024/11/1666443536_12-podach.jpg"
    },
    {
        id: "3",
        name: "Гамбургер",
        description: "Сочная говяжья котлета с салатом, помидором, луком и специальным соусом на булке с кунжутом.",
        price: 265,
        image: "https://avatars.mds.yandex.net/get-altay/11396712/2a0000018c10a7f7601642eae54c11597ad7/XXXL"
    },
    {
        id: "4",
        name: "Пицца Маргарита",
        description: "Традиционная пицца с томатным соусом, сыром моцарелла и свежим базиликом.",
        price: 750,
        image: "https://www.chefmarket.ru/blog/wp-content/uploads/2020/10/pizza-margherita--2000x1200.jpg"
    },
    {
        id: "5",
        name: "Шоколадный торт",
        description: "Тёплый шоколадный торт с жидкой шоколадной начинкой, подаётся с мороженым ванильным.",
        price: 669,
        image: "https://media.cdnbb8.com/image_source/deal_gallery/2024-10/406b54f5-7c64-457a-8ff7-8c6cc9bf656a.jpeg"
    }
];