import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import PageLayout from "../../components/Layout/PageLayout";
import InputField from "../../components/Input/InputField";
import { IoIosSearch } from "react-icons/io";
import profileIcon from "../../assets/profileicon.png";
import bannerImage from "../../assets/banner4.png";
import Categories from "../../components/Categories/Categories";
import "./ProductsPage.scss";
import Card from "../../components/Cards/Card";
import { TbShoppingCartPlus } from "react-icons/tb";
import AccountDropdown from "../../components/Dropdown/AccountDropdown";
import Cart from "../Cart/Cart";

const ProductsPage = () => {
  const context = useContext(UserContext);
//   console.log(context?.session?.token);
//   console.log(context?.isLoggedin);

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showCart, setShowCart] = useState(true);

  const handleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const onClickCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    showCart ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
  }, [showCart])

  return (
    <>
        {showCart && <Cart onClickCart={onClickCart}/>}
        <PageLayout>
        <div className="flex justify-end gap-2 items-center">
            <InputField type="text" placeholder="Search" icon={<IoIosSearch />} />
            <div className="relative">
            <img
                onClick={handleProfileDropdown}
                className="rounded-2xl cursor-pointer"
                src={profileIcon}
                width={30}
            />
            {showProfileDropdown && (
                <div className="absolute top-[35px] right-0 md:left-0">
                <AccountDropdown />
                </div>
            )}
            </div>
            <small
            onClick={handleProfileDropdown}
            className="hidden cursor-pointer hover:text-gray-400 md:block"
            >
            Username
            </small>
            <div className="border border-slate-400 rounded-3xl py-3 md:py-2"></div>
            <button className="relative p-3.5 overflow-hidden">
            <div className="absolute top-0 right-0 bg-danger font-semibold text-white rounded-full w-5 h-4 text-[10px] flex items-center justify-center">
                10
            </div>
            <TbShoppingCartPlus
                onClick={onClickCart}
                className="text-lg transition-transform duration-300 hover:scale-110"
            />
            </button>
        </div>
        <div className="rounded-2xl mx-auto mt-5 shadow-xl md:h-[320px] w-full overflow-hidden">
            <img
            className="object-cover object-center w-full h-full"
            src={bannerImage}
            />
        </div>

        <Categories />

        <div className="products-cards-container mt-3">
            <Card />
        </div>
        </PageLayout>
    </>
  );
};

export default ProductsPage;
