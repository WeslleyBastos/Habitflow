import styled from "styled-components";
import { Card } from "antd";

export const Container = styled.div`
  display: flex;
  
`

export const CardGroup = styled(Card)`
  .code-box-demo p {
    margin: 0;
  }
  .ant-card {
   
    border-radius: 25px;
  }
  .ant-card-head {
    width:200px;
    background-color: #263238;
    border-radius: 25px 25px 0 0;
    text-align: center;
    font-weight: bold;
  }
  .ant-card-head-title{
    color: #F0F0F0;
  } 
  .ant-card-body{
    height: 280px;
    text-align: center;
    width: 200px;
    margin: -3rem 1rem 0rem 0rem;
    border-radius: 25px 25px 0 0;
    border: solid 1px #263238;
  }
  
  padding: 0;
`
