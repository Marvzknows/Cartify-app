import { FaMinus, FaPlus } from "react-icons/fa6";
import { CartItemsTypes } from "../../Types/CartItemsT";
import { TiDelete } from "react-icons/ti";
import { ParseToPHP } from "../../utils/Formatter";

const CartCard = ({
  id,
  title,
  description,
  price,
  category,
  image,
  setCartItems,
  quantity,
  handleAddQuantity,
  handleDecreaseQuantity
}: CartItemsTypes) => {

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) =>
      prev ? prev.filter((item) => item.id !== id) : prev
    );
  };

  return (
    <div className="flex w-full gap-2 items-center bg-lighter border border-light py-3 px-2">
      <div className="relative w-[30%] bg-white rounded p-3">
        <img className="w-full h-full object-contain" src={image} />
        <TiDelete
          onClick={() => handleRemoveItem(id)}
          size={28}
          className="absolute top-[-10px] left-[-10px] text-slate-400 hover:text-slate-300 cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-1 w-[70%] p-1">
        <p className="text-xs text-slate-600 font-medium">{category}</p>
        <p className="text-sm text-primary font-bold">{title}</p>
        <p className="text-sm text-slate-800 font-bold truncate">
          {description}
        </p>
        <p className="text-primary text-xs font-bold">{ParseToPHP(price)}</p>

        <div className="flex mt-5">
          <button onClick={() => handleDecreaseQuantity(id)} className="bg-primary text-white text-xs font-bold px-3 hover:bg-sky-500">
            <FaMinus />
          </button>
          <span className="bg-primarylight border border-primary text-sm text-slate-800 font-medium px-2">
            {quantity}
          </span>
          <button
            onClick={() => handleAddQuantity(id)}
            className="bg-primary text-white text-xs font-bold px-3 hover:bg-sky-500"
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
