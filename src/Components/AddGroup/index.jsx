import { Input, Button, Form } from "antd";
import { useAddNewGroup } from "../../Providers/addGroups/AddGroups";
import { Container, CardGroup } from "./style";

const { TextArea } = Input;
export const AddGroupCard = () => {
  const { AddNewGroup } = useAddNewGroup();

  const [form] = Form.useForm();
  const onFinishAddGroups = (values) => {
    AddNewGroup(values);
  };

  return (
    <Container>
      <CardGroup title="Crie um Grupo">
        <Form
          className="formt"
          form={form}
          name="control-hooks"
          onFinish={(values) => onFinishAddGroups(values)}
        >
          <Form.Item name="name">
            <Input placeholder="Nome do grupo" />
          </Form.Item>
          <Form.Item name="category">
            <Input placeholder="Categoria" />
          </Form.Item>
          <Form.Item name="description">
            <TextArea placeholder="Descrição" />
          </Form.Item>
          <Button
            style={{ background: "#CAFFBF", color: "black" }}
            type="primary"
            htmlType="submit"
          >
            Enviar
          </Button>
        </Form>
      </CardGroup>
    </Container>
  );
};
