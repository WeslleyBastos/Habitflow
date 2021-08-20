import styled from "styled-components";
import {Card} from "antd";

export const CardHabbit = styled(Card)`
 color: var(--black);
  .ant-input {
    width: 250px;
  }
  .ant-input:focus {
    border: 1px solid #98e788;
    box-shadow: 1px 1px 1px #999;
  }
  .ant-input:hover {
    border: 1px solid #98e788;
  }
  .ant-btn-primary {
    background: #caffbf;
    border-color: #98e788;
    color: black;

    margin: 5px 0 5px 0;
  }
  .ant-btn:hover {
    background-color: #caffbf;
    border-color: #98e788;
    color: black;
  }
  .ant-btn:focus {
    background-color: #b9ebaf;
    border-color: #98e788;
    color: black;
  }
  .ant-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
  .ant-col .ant-col-8 {
    border-radius: 25px 25px 0 0;
  }
` 
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

  `

  export const SContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  `

export const Select = styled.select`
width: 25%;
height: 25px;
display: flex;
flex-direction: column;
border-radius: 5px;
margin-bottom: 15px;
border: solid 1px lightgray;
background-color: white;

`
export const Input = styled.input `
border: solid 1px lightgray;
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
