import React from "react";
import "antd/dist/antd.css";
import { Menu, Dropdown, Button, message, Space } from "antd";
import { DownOutlined, UserOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useUser } from "../../Providers/userProvider";
import { useHistory } from "react-router-dom";


const DDMenu = ({setMyNewHabit, setNewGroup, setMyHabit, setMyActivities, setMyGroups, setMyGoals}) => {
  
const history = useHistory()
  const {userName} = useUser()

  const logOut = () => {
    localStorage.clear()
    history.push('/')
  }

  function handleMenuClick(e) {
    message.info(`Volte sempre, ${userName}`);
    logOut()
    window.location.reload()
    console.log("click", e);
  }

  const menu = (
    <Menu >
      <Menu.Item key="1" icon={<UserOutlined />}
     onClick={() => {
      setMyNewHabit(false);
      setNewGroup(false);
      setMyHabit(false);
      setMyGroups(false);
      setMyActivities(false);
      setMyGoals(false)
    }}>
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
