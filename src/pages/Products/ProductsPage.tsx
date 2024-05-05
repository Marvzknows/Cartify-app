import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import PageLayout from "../../components/Layout/PageLayout";
import InputField from "../../components/Input/InputField";
import { IoIosSearch } from "react-icons/io";
import profileIcon from "../../assets/profileicon.png";

const ProductsPage = () => {

    const context = useContext(UserContext)
    console.log(context?.session?.token)
    console.log(context?.isLoggedin)
    return(
        <PageLayout>
            <div className="flex justify-end gap-2 items-center">
                <InputField 
                    type="text" 
                    placeholder="Search" 
                    icon={<IoIosSearch />} 
                />
                <img className="rounded-2xl cursor-pointer" src={profileIcon} width={30} />
            </div>
        </PageLayout>
    )
}

export default ProductsPage;