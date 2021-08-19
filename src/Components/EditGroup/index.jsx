import { Input, Button, Form } from "antd";
import { useEditGroup } from "../../Providers/editGroup/EditGroup";
import { Container, CardGroup, FormGroup } from "./style";
const { TextArea } = Input;

export const EditGroupCard = () => {
  const { HandleEditGroup } = useEditGroup();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    HandleEditGroup(values);
  };

  return (
    <Container>
      <CardGroup title="Editar Grupo">
        <FormGroup>
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="name">
            <Input placeholder="Nome do grupo" />
          </Form.Item>
          <Form.Item name="category">
            <Input placeholder="Categoria" />
          </Form.Item>
          <Form.Item name="description">
            <TextArea placeholder="Descrição" />
          </Form.Item>
          <Button style={{background: "#CAFFBF", color: "black"}} type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form>
      </FormGroup>
      </CardGroup>
    </Container>
  );
};
