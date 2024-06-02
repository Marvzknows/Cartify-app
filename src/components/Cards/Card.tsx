import { TbShoppingCartPlus } from "react-icons/tb";
import star from '../../assets/star.svg';
import { CartItemsTypes } from "../../Types/CartItemsT";
import { BaseApi } from "../../API/BaseApi";
import { UserContext } from "../../Context/UserContext";
import { useContext, useState } from "react";

type CardsType = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: number,
    setCartItems: React.Dispatch<React.SetStateAction<CartItemsTypes[] | null>>
}

const Card = ({id, title, price, category, image, rating, setCartItems}: CardsType) => {

    const context = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);

    const renderStars = (rating: number) => {
        const stars = [];
        for(let i = 0; i < Math.floor(rating); i++) {
            stars.push(<img key={i} src={star} width={15} alt="star" />);
        }

        return stars
    }

    const handleAddToCart = async(id: number) => {
        if(isLoading) return;
        if(!context?.session?.token) return;
        setIsLoading(true);

        try {
            const response = await BaseApi({token: context.session.token}).get(`/products/${id}`);
            console.log(response.data);
        } catch(error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }


        // setCartItems() -> Store base sa response na manggagaling sa API call
    }

    return (
      <>
        <div className="bg-white flex flex-col border border-gray-200 rounded-lg shadow p-2.5 overflow-hidden">
          <div className="w-full h-72 overflow-hidden rounded-md">
            <img
              className="block w-full h-full object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
              src={image}
            />
          </div>
          <div className="flex flex-col gap-1 p-2.5 mt-auto">
            <p className="text-md font-bold text-slate-700 truncate">{title}</p>
            <small className="text-xs text-slate-600 font-light">
              {category}
            </small>
            <div className="flex flex-row justify-between items-center">
              <small>Rating : {rating}</small>
              <div className="flex justify-center items-center gap-1">
                {renderStars(rating)}
              </div>
            </div>
          </div>
          <div className="flex justify-between p-2.5">
            <p className="text-slate-800 text-md font-medium text-start underline w-full">
              ${price}
            </p>
            <button className="bg-warning w-full flex justify-center items-center rounded-lg hover:bg-warninglight">
              <TbShoppingCartPlus />
              <p onClick={() => handleAddToCart(id)} className="text-xs mx-1 font-medium">
                Add to Cart
              </p>
            </button>
          </div>
        </div>
      </>
    );
}

export default Card;