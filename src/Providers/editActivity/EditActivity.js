import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../auth/Auth";
import axios from "axios";

const EditActivity = createContext();

export const EditActivityProvider = ({ children }) => {
  const { token } = useAuth();

  const handleEditActivity = (id, newTitle) => {
    axios
      .patch(
        `https://kabit-api.herokuapp.com/activities/${id}/`,
        {
          title: newTitle,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => toast.success("Atividade editada com sucesso"))
      .catch(() => toast.error("Falha ao tentar editar atividade"));
  };

  return (
    <EditActivity.Provider value={{ handleEditActivity }}>
      {children}
    </EditActivity.Provider>
  );
};

export const useEditActivity = () => useContext(EditActivity);
