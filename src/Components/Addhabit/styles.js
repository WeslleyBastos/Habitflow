import styled from "styled-components";
// import { Input, Form } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  /* width: 397px;
  height: 400px; */
  /* padding: 40px; */
  /* background-color: #eadeda; */
  border-radius: 12px;
  `
  export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #F0F0F0;
  `

  export const SContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  `

export const Select = styled.select`
width: 25%;
display: flex;
flex-direction: column;
border-radius: 5px;
margin-bottom: 15px;
background-color: white;
`
export const Input = styled.input `
border: solid 1px gray;
width: 25%;
height: 2rem;
border-radius: 5px;
margin-bottom: 15px;
`
export const SendButton = styled.button `
border: solid 1px gray;
width: 20%;
height: 2rem;
border-radius: 5px;
background-color: #3F3F61;
color: white;
text-transform: uppercase;
`
