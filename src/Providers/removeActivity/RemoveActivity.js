import { createContext, useContext } from "react";
import api from "../../Services/api";
import { useAuth } from "../auth/Auth";
import { toast } from "react-toastify";

const RemoveActivity = createContext();

export const RemoveActivityProvider = ({ children }) => {
  const { token } = useAuth();

  const RemoveFromActivity = (id) => {
    api
      .delete(`/activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Atividade  Removida");
      })
      .catch((err) => console.log("deu erro"));
  };

  return (
    <RemoveActivity.Provider value={{ RemoveFromActivity }}>
      {children}
    </RemoveActivity.Provider>
  );
};

export const RemoveActivityContext = () => useContext(RemoveActivity);
