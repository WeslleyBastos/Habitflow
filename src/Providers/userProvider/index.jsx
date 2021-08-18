import { createContext, useState, useContext } from "react";
import api from "../../Services/api";
import { useEffect } from "react";
import {useAuth } from "./../auth/Auth"

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const {userID, token} = useAuth()

  const [userName, setUserName] = useState("")

  useEffect(() => {
      if (token !== " ") {
    api
      .get(`/users/${userID}/`).then((response) => {
        setUserName(response.data.username)
    })
    }
  }, []);
  return (
    <UserContext.Provider value={{ userName }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
