import { TbShoppingCartPlus } from "react-icons/tb";
import star from '../../assets/star.svg';

const Card = () => {

    return(
        <>
            <div className="bg-white flex flex-col border border-gray-200 rounded-lg shadow p-2.5 overflow-hidden">
                <div className="w-full h-72 overflow-hidden rounded-md">
                    <img className="block w-full h-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                </div>
            <div className="flex flex-col gap-1 p-2.5 mt-auto">
                <p className="text-md font-bold text-slate-700 ">
                    Item title Lorem ipsum dolor sit amet lorem20.
                </p>
                <small className="text-xs text-slate-600 font-light" >men's clothing</small>
                <div className="flex flex-row justify-between items-center">
                    <small>Rating : 3.9</small>
                    <div className="flex justify-center items-center gap-1">
                        <img src={star} width={15} />
                        <img src={star} width={15} />
                        <img src={star} width={15} />
                        <img src={star} width={15} />
                        <img src={star} width={15} />
                    </div>
                </div>
            </div>
            <div className="flex justify-between p-2.5">
                <p className="text-slate-800 text-md font-medium text-start underline w-full">$109.95</p>
                <button className="bg-warning w-full flex justify-center items-center rounded-lg hover:bg-warninglight">
                    <TbShoppingCartPlus />
                </button>
            </div>
        </div>
        {/* "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" */}
        <div className="bg-white flex flex-col border border-gray-200 rounded-lg shadow p-2.5 overflow-hidden">
            <div className="w-full h-72 overflow-hidden rounded-md">
                <img className="block w-full h-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer" src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"/>
            </div>
            <div className="flex flex-col gap-1 p-2.5 mt-auto">
                <p className="text-md font-bold text-slate-700">
                    Item title Lorem ipsum dolor sit amet.
                </p>
                <small className="text-xs text-slate-600 font-light" >men's clothing</small>
                <div className="flex flex-row justify-between items-center">
                    <small>Rating : 3.9</small>
                    <div className="flex justify-center items-center gap-1">
                        <img src={star} width={15} />
                        <img src={star} width={15} />
                        <img src={star} width={15} />
                        <img src={star} width={15} />
                        <img src={star} width={15} />
                    </div>
                </div>
            </div>
            <div className="flex justify-between p-2.5">
                <p className="text-slate-800 text-md font-medium text-start underline w-full">$109.95</p>
                <button className="bg-warning w-full flex justify-center items-center rounded-lg hover:bg-warninglight">
                    <TbShoppingCartPlus />
                </button>
            </div>
        </div>
        </>
    
    )
}

export default Card;