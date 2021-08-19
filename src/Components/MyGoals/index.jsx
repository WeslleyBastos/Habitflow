import { Button, Divider, Tooltip } from "antd";
import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { Container } from "./style";
import { DeleteOutlined, EditFilled } from "@ant-design/icons";

export const GoalsList = () => {
  const { myGoals, DeleteGroupGoal, setEditGoal } = useMyGoals();

  const handleRemove = (id) => {
    DeleteGroupGoal(id);
  };

  const handleEdit = (id) => {
    setEditGoal(id);
  };
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
              onClick={() => handleRemove(elem.id)}
              icon={<DeleteOutlined />}
              size="large"
            />
          </Tooltip>
          <Tooltip title="Editar Metas">
            <Button
              shape="circle"
              onClick={() => handleEdit(elem.id)}
              icon={<EditFilled />}
              size="large"
            />
          </Tooltip>
        </>
      ))}
    </Container>
  );
};
