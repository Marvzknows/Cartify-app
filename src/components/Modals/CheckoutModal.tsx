import { IoMdClose } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import Button from "../Button/Button";
import { GoChecklist } from "react-icons/go";
import { CartItemsTypes } from "../../Types/CartItemsT";

type CheckoutModalType = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  cartitems: CartItemsTypes[] | null;
}

const CheckoutModal = ({ setShowModal, cartitems }: CheckoutModalType) => {
  return (
    <>
      {/* Modal Bg Overlay */}
      <div
        onClick={() => setShowModal(false)}
        className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-30"
      ></div>

      {/* Modal Container */}
      <div className="absolute flex flex-col border border-slate-300 bg-slate-100 shadow-2xl w-[90%] md:w-[40%] h-[80%] md:max-w-[1280px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg">
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-primarylight w-full p-4">
          <div className="flex items-center gap-2 font-bold text-slate-800">
            <IoBagCheckOutline size={22} />
            Checkout Summary
          </div>
          <IoMdClose
            size={18}
            className="hover:text-slate-500 cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>

        {/* Modal Body */}
        <div className="flex-grow overflow-auto p-4">
          <div className="flex flex-col items-center gap-2">

            {/* Items */}
            {cartitems &&
              cartitems.map((item) => {
                return (
                  <div className="border border-slate-200 shadow rounded overflow-hidden flex flex-col md:flex-row items-center gap-1 w-full p-2">
                    <div className="relative w-[40%] md:w-[20%] bg-white rounded ">
                      <img
                        className="w-full h-full object-contain"
                        src={item.image}
                        alt="Item"
                      />
                    </div>
                    <div className="flex flex-col justify-around items-start gap-1 w-full text-sm text-slate-600 p-2">
                      <div className="text-xs md:text-sm">
                        {item.description}
                      </div>
                      <div className="font-light underline text-xs">
                        {item.category}
                      </div>
                      <div className="w-full xs:flex xs:justify-between xs:mt-1">
                        <div className="font-bold">
                          Quantity: <span>{item.quantity}</span>
                        </div>
                        <div className="font-bold">
                          Total: <span>{item.quantity * item.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-300 flex items-center justify-between p-4">
          <input
            type="text"
            placeholder="Enter amount"
            className="w-[50%] h-full border-b-2 border-primarylight bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-primary focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />

          <Button size={"lg"} icon={<GoChecklist size={18} />}>
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
}

export default CheckoutModal;
