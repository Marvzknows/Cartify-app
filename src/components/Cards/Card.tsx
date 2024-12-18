import { TbShoppingCartPlus } from "react-icons/tb";
import star from '../../assets/star.svg';
import { CartItemsTypes } from "../../Types/CartItemsT";
import { BaseApi } from "../../API/BaseApi";
import { UserContext } from "../../Context/UserContext";
import { useContext, useState } from "react";
import { ParseToPHP } from "../../utils/Formatter";

type CardsType = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    rating: number,
    cartitems: CartItemsTypes[] | null,
    setCartItems: React.Dispatch<React.SetStateAction<CartItemsTypes[] | null>>,
    setShowToast: React.Dispatch<React.SetStateAction<boolean>>,
    setToastMessage: React.Dispatch<React.SetStateAction<string>>,
    setShowErrorToast: React.Dispatch<React.SetStateAction<boolean>>,
}

const Card = ({
  id,
  title,
  price,
  category,
  image,
  rating,
  cartitems,
  setCartItems,
  setShowToast,
  setToastMessage,
  setShowErrorToast,
}: CardsType) => {

  const context = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<img key={i} src={star} width={15} alt="star" />);
    }

    return stars;
  };

  const checkExistingItem = (existingId: number) => {
    const filteredItems = cartitems?.some((item) => item.id === existingId);
    return filteredItems;
  };

  const handleAddToCart = async (id: number, category: string) => {
    
    if (isLoading) return;
    if (!context?.session?.token) return;
    setShowToast(false);

    const filteringId = checkExistingItem(id);
    if (filteringId) {
      setShowErrorToast(true);
      return;
    }
    setShowErrorToast((prev) => (prev && false));
    setIsLoading(true);
    setShowToast(true);
    setToastMessage(`A ${category} item has been added to you cart `);

    try {
      const response = await BaseApi({ token: context.session.token }).get(
        `/products/${id}`
      );
      if (!response || !response.data || response.data === null) {
        return alert("Display Error message Modal");
      }
      const newItem = {...response.data, quantity: 1} // Default quantity of 1
      setCartItems((prev) =>
        prev ? [...prev, newItem] : [newItem]
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

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
            {ParseToPHP(price)}
          </p>
          <button
            onClick={() => handleAddToCart(id, category)}
            className="bg-warning w-full flex justify-center items-center rounded-lg hover:bg-warninglight"
          >
            <TbShoppingCartPlus />
            <p className="text-xs mx-1 font-medium">Add to Cart</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;