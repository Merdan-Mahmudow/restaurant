import type { Category } from "@/types/interfaces";
import { Button, HStack } from "@chakra-ui/react";

const categories: Category[] = [
    { id: 0, name: 'Популярное' },
    { id: 2506, name: 'Говядина' },
    { id: 2424, name: 'Морепродукты' },
    { id: 2425, name: 'Без мяса' },
    { id: 2426, name: 'Свинина острая' },
    { id: 2427, name: 'Свинина неострая' },
    { id: 2424, name: 'Супы' },
    { id: 2516, name: 'Сосиски' },
    { id: 2465, name: 'Фри' },
    { id: 2423, name: 'Курица' },
    { id: 2552, name: 'Добавки' },
    { id: 2441, name: 'Соусы' },
    { id: 2475, name: 'Бар' },
    { id: 2528, name: 'Холодильник' },
    { id: 2476, name: 'Десерты' },
]
interface CategoryProps {
    onChangeCategory: (id: number) => void
}
export function Categories({ onChangeCategory }: CategoryProps) {
    return (
        <HStack
         bg={"red.500"}
         overflowX={"auto"}
         whiteSpace={"wrap"}
         display={"flex"}
         px={"1em"}
         scrollbarWidth={"0"}
         scrollbar={"hidden"}>
            {categories.map((_, id) => (
                <Button
                    key={id}
                    onClick={() => onChangeCategory(_.id)}
                    rounded={"full"}
                    bg={"whiteAlpha.400"}
                    color={"white"}
                    size={"sm"}

                >{_.name}</Button>
            ))}
        </HStack>
    )
}