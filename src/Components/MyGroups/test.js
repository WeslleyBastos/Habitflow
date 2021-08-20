import { Tooltip, Button } from "antd";
import { EditOutlined, FormOutlined } from "@ant-design/icons";
import { GoalsList } from "../MyGoals";
import { EditGroupCard } from "../EditGroup";
import { useState } from "react";
import { AddGoalCard } from "../AddGoal";
import { EditGoalCard } from "../EditGoal";

export const InfoModes = ({ category, description, id }) => {
  const [edition, setEdition] = useState(0);

  const handleMode = (choice) => {
    const choices = [
      <></>,
      <EditGroupCard id={id} />,
      <AddGoalCard id={id} />,
      <EditGoalCard groupId={id} />,
    ];
    return edition ? (
      <>
        {choices[choice]}
        <button onClick={() => setEdition(0)}>voltar</button>
      </>
    ) : (
      ""
    );
  };

  return (
    <>
      {!edition && (
        <>
          <p>Categoria: {category}</p>
          <p>Descrição: {description}</p>
          <Tooltip title="Editar">
            <Button
              shape="circle"
              onClick={() => setEdition(1)}
              icon={<EditOutlined />}
              size="large"
            />
          </Tooltip>
          <Tooltip title="Adicionar Metas">
            <Button
              shape="circle"
              onClick={() => setEdition(2)}
              icon={<FormOutlined />}
              size="large"
            />
          </Tooltip>
          <GoalsList setEdition={setEdition} />
        </>
      )}
      {<>{handleMode(edition)}</>}
    </>
  );
};
