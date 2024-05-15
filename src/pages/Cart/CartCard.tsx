import { FaMinus, FaPlus } from "react-icons/fa6";

const CartCard = () => {
  return (
    <div className="flex w-full gap-2 items-center bg-lighter border border-light shadow-md py-3 px-2">
      <div className="w-[30%] bg-white rounded-lg p-3">
        <img
          className="w-full h-full object-contain"
          src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
        />
      </div>
      <div className="flex flex-col gap-1 w-[70%] p-1">
        <p className="text-xs text-slate-600 font-medium">Men's Clothing</p>
        <p className="text-sm text-slate-800 font-bold truncate">
          3 x Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus hic quibusdam nam Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Perferendis, dicta.?
        </p>
        <p className="text-primary text-sm font-bold">$109.95</p>

        <div className="flex mt-5">
          <button className="bg-primary text-white text-xs font-bold px-3 hover:bg-sky-500">
            <FaMinus />
          </button>
          <span className="bg-primarylight border border-primary text-sm text-slate-800 font-medium px-2">
            2
          </span>
          <button className="bg-primary text-white text-xs font-bold px-3 hover:bg-sky-500">
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
