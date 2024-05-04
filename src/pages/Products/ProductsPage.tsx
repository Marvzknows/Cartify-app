// Products page, nasa assets folder layout

import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import PageLayout from "../../components/Layout/PageLayout";

const ProductsPage = () => {

    const context = useContext(UserContext)
    console.log(context?.session?.token)
    console.log(context?.isLoggedin)
    return(
        <PageLayout>
            <small>Search component</small>
        </PageLayout>
    )
}

export default ProductsPage;