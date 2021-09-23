import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useState } from "react";

interface UserContextData{
    logado: boolean,
    login: () => void,
    logout: () => void,
}

interface UserContextProviderProps{
    children: ReactNode;
}
export const UserContext = createContext({} as UserContextData)

export function UserContextProvider({children}: UserContextProviderProps){
    const router = useRouter();
    const [logado, setLogado] = useState(false);

    const login = () => {
        setLogado(true);
    }

    const logout = () => {
        setLogado(false);
        router.push("/login");
    }

    return(
        <UserContext.Provider
            value={{
                logado,
                login,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () =>{
    return useContext(UserContext);
}

