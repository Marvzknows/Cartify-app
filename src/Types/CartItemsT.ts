export type CartItemsTypes = {
    id: number,
    category: string,
    title: string,
    description: string,
    price: number,
    image: string,
    setCartItems: React.Dispatch<React.SetStateAction<CartItemsTypes[] | null>>
}