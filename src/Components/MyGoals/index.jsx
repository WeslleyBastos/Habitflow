import { Button, Divider, Tooltip } from "antd";
import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { Container } from "./style";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";
import { useState } from "react";

export const GoalsList = ({ setEdition }) => {
  const { myGoals, DeleteGroupGoal, setEditGoal } = useMyGoals();
  const [newMyGoals, setNewMyGoals] = useState(myGoals);

  return (
    <Container>
      {myGoals.map((elem) => (
        <>
          <Divider key={elem.id} />
          <p>Meta: {elem.title}</p>
          <p>Dificuldade: {elem.difficulty}</p>
          <p>Alcançado: {elem.how_much_achieved}%</p>
          <Tooltip title="Remover Metas">
            <Button
              shape="circle"
              onClick={() => DeleteGroupGoal(elem.id)}
              icon={<DeleteOutlined />}
              size="large"
            />
          </Tooltip>
          <Tooltip title="Editar Metas">
            <Button
              shape="circle"
              onClick={() => {
                setEditGoal(elem.id);
                setEdition(3);
              }}
              icon={<EditFilled />}
              size="large"
            />
          </Tooltip>
        </>
      ))}
    </Container>
  );
};
