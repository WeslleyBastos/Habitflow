import { Card, Collapse, Tooltip, Button, Form, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEditActivity } from "../../Providers/editActivity/EditActivity";
import { useMyGroup } from "../../Providers/myGroups/MyGroups";
import { useState } from "react";
import { Container, CardGroup, FormGroup } from "./style";
import { RemoveActivityContext } from "../../Providers/removeActivity/RemoveActivity";
const { Panel } = Collapse;

const ActivityGroups = () => {
  const { myList } = useMyGroup();

  const { RemoveFromActivity } = RemoveActivityContext();

  const { handleEditActivity } = useEditActivity();

  const [edit, setEdit] = useState(false);

  const handleClick = (id, data) => {
    setEdit(false);
    handleEditActivity(id, data.title);

  };

  return (
  <Container>
    <CardGroup title="Atividades">
        <>
      <Collapse accordion>
        {myList.map(({ activities }) =>
          activities.map(({ id, title, realization_time }) => (
            <Panel header={title} key={id}>
              {edit ? (
                <FormGroup onFinish={(values) => handleClick(id, values)}>
                  <Form.Item name="title">
                    <Input placeholder="Novo título" />
                  </Form.Item>
                  <Button style={{background: "#B2F7EF"}} type="primary" htmlType="submit">
                    Salvar
                  </Button>
                </FormGroup>
              ) : (
                <p>Título: {title}</p>
              )}
              <p>Data: {realization_time}</p>
              <Tooltip title="Editar">
                <Button
                  onClick={() => setEdit(true)}
                  shape="circle"
                  icon={<EditOutlined />}
                  size="large"
                  htmlType="submit"
                />
              </Tooltip>
            </Panel>
          ))
        )}
      </Collapse>
        </>
    </CardGroup>
  </Container>
  );
};

export default ActivityGroups;
