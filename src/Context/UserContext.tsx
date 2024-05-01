import { ReactNode, createContext, useState } from "react";

type UserContextType = {
    access_token?: string | null,
    setAccess_token: React.Dispatch<React.SetStateAction<string | null>>
}

type UserProviderType = {
    children: ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)

const UserProvider = ({ children }: UserProviderType) => {

    const [access_token, setAccess_token] = useState<string | null>(null);

    return(
        <UserContext.Provider
        value={{access_token, setAccess_token}}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;