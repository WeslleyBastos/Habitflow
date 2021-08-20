import { Input, Button, Form, Select, Card } from "antd";
import { useMyGoals } from "../../Providers/myGoals/MyGoals";
import { Container } from "./style";

export const EditGoalCard = ({ groupId }) => {
  const { EditGroupGoal } = useMyGoals();

  const [form] = Form.useForm();
  console.log(groupId);
  const onFinishEditGoals = (values) => {
    EditGroupGoal(values, groupId);
  };

  return (
    <Container>
      <Card>
        <Form
          form={form}
          name="control-hooks"
          onFinish={(values) => onFinishEditGoals(values)}
        >
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
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};
