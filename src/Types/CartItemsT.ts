export type CartItemsTypes = {
    id: number,
    category: string,
    title: string,
    description: string,
    price: number,
    image: string,
    quantity: number,
    setCartItems: React.Dispatch<React.SetStateAction<CartItemsTypes[] | null>>,
    handleAddQuantity: (id: number) => void,
    handleDecreaseQuantity: (id: number) => void
}