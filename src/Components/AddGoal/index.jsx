import { Input, Button, Form, Select } from "antd";
import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { Container, CardGroup, FormGroup } from "./style";

export const AddGoalCard = ({setAddAGoal, setEditAGoal, setEditAGroup, setMyActivities}) => {
  const { setGroupGoal } = useMyGoals();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    setGroupGoal(values);
    goBack()
  };
  const goBack = () => {
    setAddAGoal(false)
    setEditAGroup(false)
    setEditAGoal(false)
    setMyActivities(false)
  }

  return (
    <Container>
      <CardGroup title="Crie uma meta">
        <FormGroup>
        <Form form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="title">
            <Input placeholder="Nome da meta" />
          </Form.Item>
          <Form.Item name="difficulty">
            <Select placeholder="Dificuldade">
              <Select.Option value="Fácil">Fácil</Select.Option>
              <Select.Option value="Médio">Médio</Select.Option>
              <Select.Option value="Difícil">Difícil</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="how_much_achieved">
            <Input placeholder="Quanto você já atingiu dessa meta de 0 a 100" />
          </Form.Item>
          <Button  style={{background: "#B8DCCB", color: "black"}} type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form>
       </FormGroup>
      </CardGroup>
    </Container>
  );
};
