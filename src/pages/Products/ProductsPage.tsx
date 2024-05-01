// Products page, nasa assets folder layout

import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const ProductsPage = () => {

    const token = useContext(UserContext)

    return(
        <div>
            products page
            token: <small>{token?.access_token}</small>
        </div>
    )
}

export default ProductsPage;