import { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { useAuth } from "../auth/Auth";


const findHabitsContext = createContext();

export const FindHabitsProvider = ({children}) => {

    const [findHabits, setFindHabits] = useState([]);
    const { token } = useAuth();

    console.log(token)
    useEffect(()=> {
        axios
        .get("https://kabit-api.herokuapp.com/habits/personal/", {
            headers: {

                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
        .then(response => {
            console.log(response.data)
            console.log(findHabits)
            setFindHabits(response.data)
        })
        .catch(err => alert(err + "not found"))

    }, [])
    
    return (
        <findHabitsContext.Provider value={{findHabits}}>
            {children}
        </findHabitsContext.Provider>
    )
}

export const useFindHabits = () => useContext(findHabitsContext)