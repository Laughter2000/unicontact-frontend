import account from "@/services/routes/user";
import React, { createContext, useContext, useState, useEffect} from "react";


export const userContext = createContext({});

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const getUserDetails = async() => {
            try {
                const details = await account.user_details.request()
                setUser(details.data)
            }
            catch(error){
                //nothing
            }
        }


        getUserDetails()
    }, [])

    return (
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )

}


export const useAuth = () => useContext(userContext);