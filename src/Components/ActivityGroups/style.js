import styled from "styled-components";
import { Card, Form } from "antd";

export const Container = styled.div`
  color: var(--black);
  .ant-input {
    width: 250px;
  }
  .ant-input:focus {
    border: 1px solid #B2F7EF;
    box-shadow: 1px 1px 1px #999;
  }
  .ant-input:hover {
    border: 1px solid #B2F7EF;
  }
  .ant-btn-primary {
    background: #caffbf;
    border-color: #B2F7EF;
    color: black;

    margin: 5px 0 5px 0;
  }
  .ant-btn:hover {
    background-color: #B2F7EF;
    border-color: #B2F7EF;
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
    background-color: #B2F7EF;
    border-radius: 25px 25px 0 0;
    text-align: center;
    font-weight: bold;
    width: 75vw;
  }
  .ant-card-body {
    width: 75vw;
  }
  .ant-collapse-header{
    background-color: #B2F7EF;
  }
  padding: 0;
`;

export const ButtonGroup = styled.div`
  background-color: #B2F7EF;
`;
