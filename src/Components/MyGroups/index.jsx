import { Collapse } from "antd";
import { useMyGroup } from "../../Providers/myGroups/MyGroups";
import { Container, CardGroup } from "./style";
import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { InfoModes } from "./test";
import { AddGoalCard } from "../AddGoal";
import { EditGroupCard } from "../EditGroup";
import { useState } from "react";

const { Panel } = Collapse;

export const MyGroupCard = () => {
  const { getGroupGoal } = useMyGoals();
  const { myList } = useMyGroup();

  const [addAGoal, setAddAGoal] = useState(false);
  const [editAGroup, setEditAGroup] = useState(false);

  function callback(key) {
    getGroupGoal(key);
  }

  // return (
  if (addAGoal === false && editAGroup === false) {
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
  }
  if (addAGoal === true) {
    return (
      <Container>
        <CardGroup style={{ background: "#EFF7F6" }} title="Meus Grupos">
          <AddGoalCard
            setAddAGoal={setAddAGoal}
            setEditAGroup={setEditAGroup}
          />
        </CardGroup>
      </Container>
    );
  }
  if (editAGroup === true) {
    return (
      <Container>
        <CardGroup style={{ background: "#EFF7F6" }} title="Meus Grupos">
          <EditGroupCard />
        </CardGroup>
      </Container>
    );
  }
  // );
};
