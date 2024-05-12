import { useRef } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

type CartTypes = {
    onClickCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Cart = ({onClickCart}: CartTypes) => {

    const cartBodyRed = useRef<HTMLDivElement>(null)

    const closeCart = () => {
        onClickCart(false);
    }

    return(
        <>
        {/* Overlay */}
        <div onClick={closeCart} ref={cartBodyRed} className="bgOverlay fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-end z-10"></div>
        {/* Cart Body */}
        <div className="cartBody absolute top-0 right-0 bg-white shadow-2xl min-h-screen w-full md:w-[50%] z-50">
            <div className="flex border-b border-gray-400">
                <div className="w-full flex items-center gap-2 text-[28px] border-r border-gray-400 px-8 py-3 text-primary">
                    <FaBagShopping/>
                    <p className="text-lg text-slate-900 font-bold pt-1">Cart</p>
                </div>
                <div className="w-[20%] flex justify-center text-[32px] p-3 cursor-pointer text-slate-500 hover:text-slate-900 md:w-[10%]">
                    <IoMdClose onClick={closeCart}/>
                </div>
            </div>
          </div>
        </>
        
    )
}

export default Cart;