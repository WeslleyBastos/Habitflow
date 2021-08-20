import styled from "styled-components";
import { Card, Form } from "antd";

export const Container = styled.div`
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
`;
export const FormGroup = styled(Form)`
  /* background-color: #f0f0f0; */
  padding: 5%;
`;

export const CardGroup = styled(Card)`
  .code-box-demo p {
    margin: 0;
  }
  .ant-card {
    border-radius: 25px;
  }
  .ant-card-head {
    background-color: #263238;
    border-radius: 25px 25px 0 0;
    text-align: center;
    font-weight: bold;
  }
  .ant-card-head-title{
    color: #F0F0F0;
  } 
  padding: 0;
`;

export const ButtonGroup = styled.div`
  background-color: #263238;
  color: #F0F0F0;
`;
