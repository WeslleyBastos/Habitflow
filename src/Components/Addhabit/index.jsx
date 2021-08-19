// import "./style.css"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
// import { useState } from "react";
import { useAuth } from "../../Providers/auth/Auth";
import { useAddHabit } from '../../Providers/addHabitos/AddHabitos';
import { Container, Form, Input, SContainer, Select } from './styles';
import { Button } from '@material-ui/core';
import {useEffect} from 'react'

const HabitForm = ({setMyNewHabit, setMyHabit, setNewGroup, setMyGroups}) => {

const {setNewHabit, AddHabit } = useAddHabit()
const {userID} = useAuth()

    const schema = yup.object().shape({
        title: yup.string().required("Por favor, preencha este campo"),
        category:yup.string().required("Por favor, preencha este campo"),
        difficulty: yup.string().required("Por favor, preencha este campo"),
        frequency: yup.string().required("Por favor, preencha este campo"),
    });

    const {register, reset , handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)});
    
    const handleForm = (data) => {
        const newData = {...data, achieved: false, how_much_achieved: 0, user: userID}
           setNewHabit(newData)
           AddHabit(newData)
           reset()
            goBack()
        }

        const goBack = () => {
            setMyNewHabit(false)
            setNewGroup(false)
            setMyHabit(false)
            setMyGroups(false)
        }

    return (
        <Container>
        <Form onSubmit={handleSubmit(handleForm)}>
        <div className="formDiv">
        <Input type="text" placeholder="Titulo"  {...register("title")} />
        </div>
        <div className="formDiv">
        <Input className="formInput" type="text" placeholder="Categoria"  {...register("category")} />
        </div>
        <SContainer>
        <label for="difficult">Dificuldade:</label>
        <Select className="classe" name="difficult" {...register('difficulty') }> 
            <option value="Muito Fácil">Muito Fácil</option>
            <option value="Normal">Normal</option>
            <option value="Dificil">Difícil</option>
            <option value="Muito Difícil">Muito Difícil</option>
        </Select>
        </SContainer>
        <div className="formDiv">
        <Input className="formInput"  type="string" placeholder="Frequência"  {...register("frequency")} />
        </div>
        <div>
        </div>
        <div className="btnDiv" >
            {/* <button className="submitBtn" type="submit" >Adicionar</button> */}
            <Button 
            type="submit" 
            variant="contained"
            size='small'
            color='primary'
            // onClick={()=> {
            //     setMyNewHabit(false)
            //     setNewGroup(false)
            //     setMyHabit(false)
            //     setMyGroups(false)
            // }}
            >Adicionar</Button>
        </div>
        </Form>
        </Container>
    )
}

export default HabitForm