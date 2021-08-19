import { Collapse, Tooltip, Button } from "antd";
import { useMyGroup } from "../../Providers/myGroups/MyGroups";
import { EditOutlined, FormOutlined } from "@ant-design/icons";
import { Container, CardGroup } from "./style";
import { useEditGroup } from "../../Providers/editGroup/EditGroup";
import { useAddNewGoal } from "../../Providers/addGoal/AddGoal";
import { GoalsList } from "../MyGoals";
import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { useState } from "react";
import { AddGoalCard } from "../AddGoal";
import { EditGoal } from "../EditGoal";
import { EditGroupCard } from "../EditGroup";

const { Panel } = Collapse;

export const MyGroupCard = () => {
  const { getGroupGoal } = useMyGoals();
  const { myList } = useMyGroup();
  const { setEditGroup } = useEditGroup();
  const { setNewGoal } = useAddNewGoal();
  const { setEditGoal } = useMyGoals();

  const [addAGoal, setAddAGoal] = useState(false)
  const [editAGroup, setEditAGroup] = useState(false)


  function callback(key) {
    getGroupGoal(key);
    console.log(key);
  }
  const handleClick = (id) => {
    setEditGroup(id);
    setNewGoal(id);
    setEditGoal(id);
  };

  // return (
if (addAGoal === false && editAGroup === false ) {
  return(
    <Container>
      <CardGroup title="Meus Grupos">
        <Collapse accordion onChange={callback}>
          {myList.map((elem) => (
            <Panel header={elem.name} key={elem.id}>
              <p>Categoria: {elem.category}</p>
              <p>Descrição: {elem.description}</p>
              <Tooltip title="Editar">
                <Button
                  shape="circle"
                  onClick={() => {
                    handleClick(elem.id)
                    setAddAGoal(false)
                    setEditAGroup(true)
                  }}
                  icon={<EditOutlined />}
                  size="large"
                />
              </Tooltip>
              <Tooltip title="Adicionar Metas">
                <Button
                  shape="circle"
                  onClick={() => {
                  handleClick(elem.id)
                  setAddAGoal(true)
                  setEditAGroup(false)
                }}
                  icon={<FormOutlined />}
                  size="large"
                />
              </Tooltip>
              <GoalsList />
            </Panel>
          ))}
        </Collapse>
      </CardGroup>
    </Container>)
    } if (addAGoal === true) {
      return(
      <Container>
        <CardGroup style={{background: "#EFF7F6"}} title="Meus Grupos">
        <AddGoalCard setAddAGoal={setAddAGoal} setEditAGroup={setEditAGroup}  />
        </CardGroup>
      </Container>)
    } if (editAGroup === true) {
      return(
      <Container>
        <CardGroup style={{background: "#EFF7F6"}} title="Meus Grupos">
        <EditGroupCard />
        </CardGroup>
      </Container>)
    }
  // );
};
