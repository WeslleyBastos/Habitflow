import { Collapse } from "antd";
import { useMyGroup } from "../../Providers/myGroups/MyGroups";
import { Container, CardGroup } from "./style";
import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { InfoModes } from "./test";

const { Panel } = Collapse;

export const MyGroupCard = () => {
  const { getGroupGoal } = useMyGoals();
  const { myList } = useMyGroup();

  function callback(key) {
    getGroupGoal(key);
  }

  return (
    <Container>
      <CardGroup style={{ background: "#EFF7F6" }} title="Meus Grupos">
        <Collapse
          style={{ background: "#EFF7F6" }}
          onChange={callback}
          accordion
        >
          {myList.map(({ id, name, category, description }, index) => (
            <Panel header={name} key={id}>
              <InfoModes
                category={category}
                description={description}
                id={id}
              />
            </Panel>
          ))}
        </Collapse>
      </CardGroup>
    </Container>
  );
};
