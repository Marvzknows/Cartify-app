import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const AccountDropdown = () => {

    const context = useContext(UserContext);
    const navigate = useNavigate();

    const HandleLogout = () => {
        context?.removeSession();
        navigate('/');
    }
    
    return(
        <div className="w-[160px] flex flex-col bg-slate-300 text-xs border-gray-400 shadow-xl rounded">
            <div onClick={HandleLogout} className=" font-medium p-3 cursor-pointer hover:bg-slate-200">
                Logout
            </div>
        </div>
    )
}

export default AccountDropdown;