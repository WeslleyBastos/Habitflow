import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button, message, Space } from "antd";
import { DownOutlined, UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useUser } from "../../Providers/userProvider";


const DDMenu = () => {

    const {userName} = useUser()

  function handleMenuClick(e) {
    message.info(`Volte sempre, ${userName}`);
    console.log("click", e);
  }

  const menu = (
    <Menu >
      <Menu.Item key="1" icon={<UserOutlined />}>
        {userName}
      </Menu.Item>
      <Menu.Item key="2">
        
      </Menu.Item>
      <Menu.Item key="3" icon={<PoweroffOutlined />} onClick={handleMenuClick}>
        Log Out
      </Menu.Item>
    </Menu>
  )

return(
    <Space wrap>
      <Dropdown overlay={menu}>
        <Button>
          {userName}<DownOutlined />
        </Button>
      </Dropdown>
    </Space>
)
  
};

export default DDMenu;
