import { Button, Divider, Tooltip } from "antd";
import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { Container } from "./style";
import { DeleteOutlined } from "@ant-design/icons";

export const GoalsList = () => {
  const { myGoals, DeleteGroupGoal } = useMyGoals();

  const handleRemove = (id) => {
    DeleteGroupGoal(id);
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
        </>
      ))}
    </Container>
  );
};
