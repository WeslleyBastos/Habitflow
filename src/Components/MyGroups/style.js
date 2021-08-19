import styled from "styled-components";
import { Card } from "antd";

export const Container = styled.div`
  color: var(--black);
  .code-box-demo p {
    margin: 0;
  }

  .ant-collapse-item {
    min-width: 240px;
  }
  .ant-collapse-header {
    background-color: #eff7f6;
    font-weight: bold;
  }
`;

export const CardGroup = styled(Card)`
  width: 75vw;
  .ant-card {
    margin-bottom: 30px;
    border-radius: 25px;
    min-width: 292px;
    min-height: 282px;
  }
  .ant-card-head {
    background-color: #eff7f6;
    border-radius: 25px 25px 0 0;
    text-align: center;
    font-weight: bold;
  }
  .ant-card-body {
    padding: 25px 0 24px 0;
  }
`;
