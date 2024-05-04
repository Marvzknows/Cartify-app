import { ReactNode, createContext, useState } from "react";
import { Session } from 'inspector';
import { useCookies } from "react-cookie";

type UserContextType = {
    session?: SessionType,
    isLoggedin: boolean,
    setIsLoggedIn:React.Dispatch<React.SetStateAction<boolean>>,
    saveSession: (userCredential: Session) => void,
    removeSession: () => void
}

type UserProviderType = {
    children: ReactNode
}

type SessionType = {
    token?: string | null
}

export const UserContext = createContext<UserContextType | null>({
    isLoggedin: false,
    setIsLoggedIn: () => {},
    saveSession: () => {},
    removeSession: () => {}
})

const UserProvider = ({ children }: UserProviderType) => {

    const [cookies, setCookie, removeCookie] = useCookies(['session', 'isLoggedIn']);
    const [isLoggedin, setIsLoggedIn] = useState(false);

    const saveSession = (userCredential: Session) => {
        setCookie('isLoggedIn', true);
        setCookie('session', userCredential);
    };

    const removeSession = () => {
        removeCookie('isLoggedIn');
        removeCookie('session');
    }

    return(
        <UserContext.Provider
        value={{
            session: cookies.session,
            isLoggedin,
            setIsLoggedIn,
            saveSession,
            removeSession
        }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;