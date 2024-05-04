import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const ProtectedRoute = () => {

    const context = useContext(UserContext);

    if(!context?.isLoggedin) {
        return <Navigate to={'/'} />;
    }

    if(!context.session) {
        return <Navigate to={'/'} />;
    }

    if(!context.session.token) {
        return <Navigate to={'/'} />;
    }

    return <Outlet />
}

export default ProtectedRoute;