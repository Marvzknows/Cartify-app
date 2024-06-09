import { FaBagShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import CartCard from "./CartCard";
import { CartItemsTypes } from "../../Types/CartItemsT";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

type CartTypes = {
    onClickCart: React.Dispatch<React.SetStateAction<boolean>>,
    showCart: boolean;
    cartitems: CartItemsTypes[] | null;
    setCartItems: React.Dispatch<React.SetStateAction<CartItemsTypes[] | null>>
}

const Cart = ({onClickCart, showCart, cartitems, setCartItems}: CartTypes) => {

    const closeCart = () => {
        onClickCart(false);
    }

    return (
      <>
        {/* Onclick Background Overlay */}
        <div
          onClick={closeCart}
          className={`${
            !showCart && "hidden"
          } fixed top-0 left-0 w-full h-full flex justify-end z-10`}
        ></div>
        {/* Cart Body */}
        <div
          className={`cartBody flex flex-col fixed top-0 ${
            showCart ? "right-[0]" : "right-[-100%]"
          } bg-white shadow-2xl h-screen w-full md:w-[50%] z-20 transition-all ease-in duration-200`}
        >
          <div className="flex border-b border-gray-200 shadow-md">
            <div className="w-full flex items-center gap-2 text-[28px] border-r border-gray-300 px-8 py-3 text-primary">
              <FaBagShopping />
              <p className="text-lg text-slate-900 font-bold pt-1">Cart</p>
            </div>
            <div className="w-[20%] flex justify-center text-[32px] p-3 cursor-pointer text-slate-500 hover:text-slate-900 md:w-[10%]">
              <IoMdClose onClick={closeCart} />
            </div>
          </div>

          <div className="overflow-auto flex items-center flex-col h-full">
            {cartitems &&
              cartitems.length !== 0 &&
              showCart ?
              cartitems.map((item, i) => (
                <CartCard
                  key={i}
                  id={item.id}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  setCartItems={setCartItems}
                />
              )) : (
                <div className="w-full h-full flex justify-center items-center text-slate-200">
                    <MdOutlineRemoveShoppingCart size={45}/>
                </div>
              )
              }
          </div>
        </div>
      </>
    );
}

export default Cart;