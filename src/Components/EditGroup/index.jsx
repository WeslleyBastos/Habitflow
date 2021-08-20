import { Input, Button, Form } from "antd";
import { useEditGroup } from "../../Providers/editGroup/EditGroup";
import { Container } from "./style";
const { TextArea } = Input;

export const EditGroupCard = ({ setEdition, id }) => {
  const { HandleEditGroup } = useEditGroup();

  const [form] = Form.useForm();

  const onFinishEdit = (values) => {
    HandleEditGroup(values, id);
    setEdition({ group: false });
  };

  return (
    <Container>
      <Form
        form={form}
        name="control-hooks"
        onFinish={(values) => onFinishEdit(values)}
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
          Salvar
        </Button>
      </Form>
    </Container>
  );
};
