import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import { useAuth } from "../auth/Auth";

const MyGoals = createContext();

export const MyGoalsProvider = ({ children }) => {
  const { token } = useAuth();
  const [myGoals, setMyGoals] = useState([]);
  const [editGoal, setEditGoal] = useState(0);

  const getGroupGoal = (id) => {
    api
      .get(`/goals/?group=${id}`)
      .then((response) => setMyGoals([...response.data.results]))
      .catch((err) => console.log(err));
  };

  const setGroupGoal = (data, id) => {
    api
      .post(
        `/goals/`,
        {
          title: data.title,
          difficulty: data.difficulty,
          how_much_achieved: data.how_much_achieved,
          group: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => toast.success("Meta adicionada com sucesso!"))
      .catch((err) => console.log(err));

    getGroupGoal(id);
  };

  const DeleteGroupGoal = (id) => {
    api
      .delete(`/goals/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => toast.success("Meta removida com sucesso!"))
      .catch((err) => console.log(err));
    getGroupGoal(id);
  };

  const EditGroupGoal = (data, groupId) => {
    let achivied = Number(data.how_much_achieved);
    api
      .patch(
        `/goals/${editGoal}/`,
        {
          title: data.title,
          difficulty: data.difficulty,
          how_much_achieved: achivied,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => toast.success("Meta editada com sucesso!"))
      .catch((err) => console.log(err));
    getGroupGoal(groupId);
  };

  return (
    <MyGoals.Provider
      value={{
        getGroupGoal,
        myGoals,
        setGroupGoal,
        setEditGoal,
        DeleteGroupGoal,
        EditGroupGoal,
      }}
    >
      {children}
    </MyGoals.Provider>
  );
};
export const useMyGoals = () => useContext(MyGoals);
