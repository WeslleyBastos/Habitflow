import { toast } from "react-toastify";
import { useFindHabits } from "../../Providers/findHabitos/FindHabitos";
import api from "../../Services/api";
import { useAuth } from "../../Providers/auth/Auth";
import {Container, SContainer, DeleteHabbit} from "./styles"
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./style.css"


export const MyHabbitCard = () => {
    const {findHabits} = useFindHabits();
    const {token} = useAuth();
    
    console.log(findHabits)

    const handlerDelete = (id) => {
        api.delete(
            `/habits/${id}/`,
            {
                headers:{
                    Authorization: `Bearer ${token}`
                },
            }
        ).then(()=> {
            toast.success("Hábito Removido");
        });
        console.log(id)
    }
      
        return (
        <div>
         <Container>
            {findHabits.map((elem) =>(
                <SContainer
                className="habbit-render">
                    <p>Hábito: {elem.title}</p>
                    <p>Categoria: {elem.category}</p>
                    <p>Dificuldade: {elem.difficulty}</p>
                    <p>Frequência: {elem.frequency}</p>
                    
                    <Button
                    shape="circle"
                    onClick={() => handlerDelete(elem.id)}
                    icon={<DeleteOutlined />}
                    size="large"
                    />
                    
                </SContainer>
               
               ))}
         </Container>
        </div>
    )
}

export default MyHabbitCard