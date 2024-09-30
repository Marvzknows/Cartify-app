import { ReactNode, createContext, useState } from "react";
import { Session } from 'inspector';
import { useCookies } from "react-cookie";

type UserContextType = {
    session?: SessionType,
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
    saveSession: () => {},
    removeSession: () => {}
})

const UserProvider = ({ children }: UserProviderType) => {

    const [cookies, setCookie, removeCookie] = useCookies(['session', 'isLoggedIn']);

    const saveSession = (userCredential: Session) => {
        setCookie('isLoggedIn', true);
        setCookie('session', userCredential);
    };

    const removeSession = () => {
        removeCookie('session');
    }

    return(
        <UserContext.Provider
        value={{
            session: cookies.session,
            saveSession,
            removeSession
        }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;