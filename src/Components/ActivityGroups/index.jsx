import { Card, Collapse, Tooltip, Button, Form, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useEditActivity } from "../../Providers/editActivity/EditActivity";
import { useMyGroup } from "../../Providers/myGroups/MyGroups";
import { useState } from "react";
const { Panel } = Collapse;

const ActivityGroups = () => {
  const { myList } = useMyGroup();

  const { handleEditActivity } = useEditActivity();

  const [edit, setEdit] = useState(false);

  const handleClick = (id, data) => {
    setEdit(false);
    handleEditActivity(id, data.title);
  };

  return (
    <Card title="Atividades">
      <Collapse accordion>
        {myList.map(({ activities }) =>
          activities.map(({ id, title, realization_time }) => (
            <Panel header={title} key={id}>
              {edit ? (
                <Form onFinish={(values) => handleClick(id, values)}>
                  <Form.Item name="title">
                    <Input placeholder="Novo título" />
                  </Form.Item>
                  <Button type="primary" htmlType="submit">
                    Salvar
                  </Button>
                </Form>
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
    </Card>
  );
};

export default ActivityGroups;
