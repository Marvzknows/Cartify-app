import { SetStateAction, useContext, useEffect, useState } from "react";
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
import { BaseApi } from "../../API/BaseApi";
import Pagination from "../../components/Pagination/Pagination";
import axios from 'axios';
import { CartItemsTypes } from "../../Types/CartItemsT";
import CardLoadingLayout from "../../components/CardLoadingLayout/CardLoadingLayout";
import CartToast from "../../components/Toast/Toast";
import CheckoutModal from "../../components/Modals/CheckoutModal";

type CardsType = {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
  rating: {
    count: number,
    rate: number,
  }
}

const ProductsPage = () => {
  const context = useContext(UserContext);

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState<CardsType[] | []>([]); // OverAll items
  const [dataIsReady, setDataIsReady] = useState(false); // Counter for which Function to invoke in useeffect
  const [isLoading, setIsLoading] = useState(false);

  const [itemsPerPage, setItemsPerPage] = useState<CardsType[] | []>([]);
  const [curentPage, setCurrentPage] = useState(1);
  const [itemsFirstCount, setItemsFirstCount] = useState(0);
  const [itemsLastCount, setItemsLastCount] = useState(4); // gmaitin sa pagination pag mag click ng page number or next page (by 4 lang ang items)
  const [itemsLength, setItemsLength] = useState(0); // gano karami overall yung data/items
  const [isChangingQuantity, setIsChangingQuantity] = useState(false);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showErrorToast, setShowErrorToast] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [cartitems, setCartItems] = useState<CartItemsTypes[] | null>(null); // carts item lists

  const [disablePaginationButton, setDisablePaginationButton] = useState({
    nextBtn: false,
    prevBtn: false
  });

  const handleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const onClickCart = () => {
    setShowCart(!showCart);
  };

  const getAllProducts = async (signal: AbortSignal) => {
    if(!context?.session?.token) return;

    try {
      setIsLoading(true);
      const response = await BaseApi({token: context.session.token, signal}).get('/products');
      if(response.data === null || !response.data) {
        return setItems([]);
      }

      setDataIsReady(true);
      setDisablePaginationButton({nextBtn: false, prevBtn: false});
      setCurrentPage(1);
      const data = response.data;
      setItemsLength(data.length);
      setIsLoading(false);
      setItems(data);
      setItemsPerPage(data.slice(0,4)); // Display the first page of the rendered itemsPerpage
      // Reset the counter for slicing pagination (handlePagination);
      setItemsFirstCount(0);
      setItemsLastCount(4);

    } catch(error: unknown) {
      if (axios.isAxiosError(error) && error.name !== 'AbortError') {
        console.log(error);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  const nextPage = () => {
    if(itemsFirstCount + 4 === itemsLength) {
      // Disable or Hide the Next Button
      setDisablePaginationButton((prev) => ({...prev, nextBtn: true}));
      console.log('Already reached Last page');
    } else {
      if(disablePaginationButton.nextBtn === true || disablePaginationButton.prevBtn === true) {
        setDisablePaginationButton({nextBtn: false, prevBtn: false});
      }
      setCurrentPage((prev) => (prev + 1));
      setItemsFirstCount((prev) => (prev + 4));
      setItemsLastCount((prev) => (prev + 4));
    }
  }

  const prevPage = () => {
    if(itemsFirstCount <= 0) {
      // Disable or Hide the Prev Button
      setDisablePaginationButton((prev) => ({...prev, prevBtn: true}));
      console.log('Already reached First page');
    } else {
      if(disablePaginationButton.nextBtn === true || disablePaginationButton.prevBtn === true) {
        setDisablePaginationButton({nextBtn: false, prevBtn: false});
      }      
      setCurrentPage((prev) => (prev - 1));
      setItemsFirstCount((prev) => (prev - 4));
      setItemsLastCount((prev) => (prev - 4));
    }
  }

  const handlePagination = () => {
    setItemsPerPage(items.slice(itemsFirstCount, itemsLastCount));
  }

  const getProductsFromCategory = async (categoryName: string, signal: AbortSignal) => {
    if(!context?.session?.token) return;

    try {
      setIsLoading(true);
      const response = await BaseApi({token: context.session.token, signal}).get(`/products/category/${categoryName}`);
      if(response.data === null || !response.data) {
        return setItems([]);
      }

      setDataIsReady(true);
      setDisablePaginationButton({nextBtn: false, prevBtn: false});
      setCurrentPage(1);
      setIsLoading(false);
      const data = response.data;
      setItemsLength(data.length);
      setItems(data);
      setItemsPerPage(data.slice(0,4));  // Display the first page of the rendered itemsPerpage
      // Reset the counter for slicing pagination (handlePagination)
      setItemsFirstCount(0);
      setItemsLastCount(4);

    } catch(error: unknown) {
      if (axios.isAxiosError(error) && error.name !== 'AbortError') {
        console.log(error);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  useEffect(() => {
    showCart || showModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
  }, [showCart, showModal]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if(!dataIsReady) {
      getAllProducts(signal);
      return;
    }

    if(dataIsReady) {
      handlePagination();
      return;
    }

    return () => {
      controller.abort();
    };

  }, [itemsFirstCount, itemsLastCount, dataIsReady]);

  return (
    <>
      <Cart
        onClickCart={onClickCart}
        showCart={showCart}
        cartitems={cartitems}
        setCartItems={setCartItems}
        isChangingQuantity={isChangingQuantity}
        setIsChangingQuantity={setIsChangingQuantity}
        setShowModal={setShowModal}
      />

      <PageLayout>
        {showToast && (
          <CartToast
            children={toastMessage}
            variant={"success"}
            position={"center"}
            showToast={showToast}
            isShowToast={setShowToast}
          />
        )}
        {showErrorToast && (
          <CartToast
            children={"Item already added to your cart"}
            variant={"danger"}
            position={"topleft"}
            showToast={showErrorToast}
            isShowToast={setShowErrorToast}
          />
        )}

        {showModal && 
          <CheckoutModal 
            setShowModal={setShowModal} 
          />}

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
              {cartitems?.length ? cartitems.length : 0}
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

        <Categories
          getProductsFromCategory={(categoryName) =>
            getProductsFromCategory(categoryName, new AbortController().signal)
          }
          getAllProducts={() => getAllProducts(new AbortController().signal)}
        />

        <div className="products-cards-container mt-3">
          {/* Loading Layout Component */}
          {isLoading && <CardLoadingLayout />}

          {/* Items Card Output */}
          {itemsPerPage &&
            !isLoading &&
            itemsPerPage.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                category={item.category}
                description={item.description}
                image={item.image}
                rating={item.rating.rate}
                cartitems={cartitems}
                setCartItems={setCartItems}
                setShowToast={setShowToast}
                setToastMessage={setToastMessage}
                setShowErrorToast={setShowErrorToast}
              />
            ))}
        </div>

        <Pagination
          curentPage={curentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          itemsLength={itemsLength}
          disablePaginationButton={disablePaginationButton}
          setDisablePaginationButton={setDisablePaginationButton}
        />
      </PageLayout>
    </>
  );
};

export default ProductsPage;
