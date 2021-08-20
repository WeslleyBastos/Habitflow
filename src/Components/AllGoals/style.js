import styled from "styled-components";
import { Card } from "antd";

export const Container = styled.div`
  display: flex;
`;

export const CardGroup = styled(Card)`
  .code-box-demo p {
    margin: 0;
  }
  .ant-card {
    border-radius: 25px;
    margin-top: 25px;
  }
  .ant-card-head {
    width: 200px;
    height: 0;
    background-color: #263238;
    border-radius: 25px 25px 0 0;
    margin: 1rem 0rem 0rem 0rem;
    text-align: center;
    font-weight: bold;
  }
  .ant-card-head-title {
    color: #f0f0f0;
    vertical-align: middle;
  }
  .ant-card-head-title p {
  }
  .ant-card-body {
    height: 250px;
    text-align: center;
    width: 200px;
    margin: -3rem 0rem 0rem 0rem;
    border-radius: 25px;
    border: solid 1px #263238;
  }
  .ant-card {
    width: fit-content;
  }

  padding: 0;
`;
