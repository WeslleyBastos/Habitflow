import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { Container } from "./style";
import { Collapse } from "antd";
const { Panel } = Collapse;

export const AllGoalsCard = () => {
  const { allgoals } = useMyGoals();
  console.log(allgoals);
  return (
    <Container>
      <Collapse accordion>
        {allgoals.map((elem) => (
          <Panel header={elem.title} key={elem.id}>
            <p>Hábito: {elem.title}</p>
            <p>Categoria: {elem.category}</p>
            <p>Dificuldade: {elem.difficulty}</p>
            <p>Frequência: {elem.frequency}</p>
          </Panel>
        ))}
      </Collapse>
    </Container>
  );
};
