import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import HabitForm from "../Addhabit";
import { useState } from "react";
import { AddGroupCard } from "../AddGroup";
import { MyGroupCard } from "../MyGroups";
import MyHabbitCard from "../MyHabbits";
import DDMenu from "../Dropdown";
import "./style.css";
import "./style";
import ActivityGroups from "../ActivityGroups";
import { GoalsList } from "../MyGoals";
import Calendary from "../Calendar";
import { FindGroupCard } from "../FindGroup";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home = () => {
  const [newHabit, setMyNewHabit] = useState(false);
  const [newGroup, setNewGroup] = useState(false);
  const [myHabit, setMyHabit] = useState(false);
  const [myGroups, setMyGroups] = useState(false);
  const [myActivities, setMyActivities] = useState(false);
  const [myGoals, setMyGoals] = useState(false);
  const [calendar, setCalendar] = useState(false);

  if (
    newHabit === false &&
    newGroup === false &&
    myHabit === false &&
    myGroups === false &&
    myActivities === false &&
    myGoals === false &&
    calendar === false
  ) {
    return (
      <Layout>
        <Header style={{ background: "#F0F0F0" }} className="header">
          <div className="logo"></div>
          <Menu
            style={{
              display: "flex",
              padding: "0",
              width: "22vw",
              background: "#F0F0F0",
            }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              <DDMenu
                setMyNewHabit={setMyNewHabit}
                setNewGroup={setNewGroup}
                setMyHabit={setMyHabit}
                setMyActivities={setMyActivities}
                setMyGroups={setMyGroups}
                setMyGoals={setMyGoals}
                setCalendar={setCalendar}
              />
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setCalendar(true)}>
              <CalendarOutlined /> Calendário
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "90vh", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                icon={<UserOutlined />}
                title="Hábitos"
                className="navside"
              >
                <Menu.Item
                  className="navside"
                  key="1"
                  onClick={() => {
                    setMyNewHabit(true);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(false);
                    setCalendar(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setMyNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(true);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(false);
                    setCalendar(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item
                  key="7"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(true);
                    setCalendar(false);
                  }}
                >
                  Atividades
                </Menu.Item>
                {/* <Menu.Item
                  key="8"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(true);
                    setCalendar(false);
                  }}
                >
                  Procurar Grupos
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 10px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="site-card-wrapper">
                <Row gutter={0}>
                  <Col span={4}>
                    <Card className="card">
                      <button
                        className="buttoncard"
                        onClick={() => {
                          setMyNewHabit(true);
                          setNewGroup(false);
                          setMyHabit(false);
                          setMyGroups(false);
                          setMyActivities(false);
                          setCalendar(false);
                        }}
                      >
                        Criar Hábito
                      </button>
                    </Card>
                  </Col>
                  <Col span={5}>
                    <Card className="carddois">
                      <button
                        className="buttoncard"
                        onClick={() => {
                          setMyNewHabit(false);
                          setNewGroup(false);
                          setMyHabit(true);
                          setMyGroups(false);
                          setMyActivities(false);
                          setCalendar(false);
                        }}
                      >
                        Meus Hábitos
                      </button>
                    </Card>
                  </Col>
                  <Col span={5}>
                    <Card className="cardtres">
                      <button
                        className="buttoncard"
                        onClick={() => {
                          setMyNewHabit(false);
                          setNewGroup(true);
                          setMyHabit(false);
                          setMyGroups(false);
                          setMyActivities(false);
                          setCalendar(false);
                        }}
                      >
                        Criar Grupo
                      </button>
                    </Card>
                  </Col>

                  <Col span={5}>
                    <Card className="cardquatro">
                      <button
                        onClick={() => {
                          setMyNewHabit(false);
                          setNewGroup(false);
                          setMyHabit(false);
                          setMyGroups(true);
                          setMyActivities(false);
                          setCalendar(false);
                        }}
                        className="buttoncard"
                      >
                        Meus Grupos
                      </button>
                    </Card>
                  </Col>
                  <Col span={5}>
                    <Card className="cardcinco">
                      <button
                        onClick={() => {
                          setMyNewHabit(false);
                          setNewGroup(false);
                          setMyHabit(false);
                          setMyGroups(true);
                          setMyActivities(false);
                        }}
                        className="buttoncard"
                      >
                        Minhas Metas
                      </button>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  if (newHabit === true) {
    return (
      <Layout style={{ background: "#F0F0F0" }}>
        <Header style={{ background: "#F0F0F0" }} className="header">
          <div className="logo" />
          <Menu
            style={{
              display: "flex",
              padding: "0",
              width: "22vw",
              background: "#F0F0F0",
            }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              <DDMenu
                setMyNewHabit={setMyNewHabit}
                setNewGroup={setNewGroup}
                setMyHabit={setMyHabit}
                setMyActivities={setMyActivities}
                setMyGroups={setMyGroups}
                setMyGoals={setMyGoals}
                setCalendar={setCalendar}
              />
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setCalendar(true)}>
              <CalendarOutlined /> Calendário{" "}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "90vh", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setMyNewHabit(true);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(false);
                    setCalendar(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setMyNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(true);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(false);
                    setCalendar(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item
                  key="7"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(true);
                    setCalendar(false);
                  }}
                >
                  Atividades
                </Menu.Item>
                {/* <Menu.Item
                  key="8"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(true);
                    setCalendar(false);
                  }}
                >
                  Procurar Grupos
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="site-card-wrapper">
                <Row gutter={0}>
                  <Col span={24}>
                    <Card
                      className="card-habbits"
                      title="Novo Hábito"
                      bordered={false}
                    >
                      <HabitForm
                        className="form-add-habbit"
                        setMyNewHabit={setMyNewHabit}
                        setNewGroup={setNewGroup}
                        setMyHabit={setMyHabit}
                        setMyActivities={setMyActivities}
                        setMyGroups={setMyGroups}
                        setMyGoals={setMyGoals}
                      />
                    </Card>
                  </Col>
                  <Col span={6}></Col>
                  <Col span={6}></Col>
                  <Col span={6}>
                    <button
                      className="return"
                      onClick={() => {
                        setMyNewHabit(false);
                        setNewGroup(false);
                        setMyHabit(false);
                        setMyGroups(false);
                        setMyActivities(false);
                        setCalendar(false);
                      }}
                    >
                      Voltar
                    </button>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }

  if (newGroup === true) {
    return (
      <Layout style={{ background: "#F0F0F0" }}>
        <Header style={{ background: "#F0F0F0" }} className="header">
          <div className="logo" />
          <Menu
            style={{
              display: "flex",
              padding: "0",
              width: "22vw",
              background: "#F0F0F0",
            }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              <DDMenu
                setMyNewHabit={setMyNewHabit}
                setNewGroup={setNewGroup}
                setMyHabit={setMyHabit}
                setMyActivities={setMyActivities}
                setMyGroups={setMyGroups}
                setMyGoals={setMyGoals}
                setCalendar={setCalendar}
              />
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setCalendar(true)}>
              <CalendarOutlined /> Calendário{" "}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setMyNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(true);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(false);
                    setCalendar(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item
                  key="7"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(true);
                    setCalendar(false);
                  }}
                >
                  Atividades
                </Menu.Item>
                {/* <Menu.Item
                  key="8"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(true);
                    setCalendar(false);
                  }}
                >
                  Procurar Grupos
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {/* <Col span={6}>
        <Card title="Novo Hábito" bordered={false}>
        
        </Card>
      </Col> */}
                  {/* <Col span={6}>
        <Card title="Meus Hábitos" bordered={false}>
        </Card>
      </Col> */}
                  <Col span={8}></Col>
                  {/* <Col span={10}>
                    <MyGroupCard />
                  </Col> */}
                  <Col span={8}>
                    <AddGroupCard />
                    {/* <EditGroupCard /> */}
                  </Col>
                  <Col span={8}>{/* <AddGoalCard /> */}</Col>
                </Row>
                <div>
                  <button
                    className="return-from-mygroups"
                    onClick={() => {
                      setMyNewHabit(false);
                      setNewGroup(false);
                      setMyHabit(false);
                      setMyGroups(false);
                      setMyActivities(false);
                      setCalendar(false);
                    }}
                  >
                    Voltar
                  </button>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }

  if (myHabit === true) {
    return (
      <Layout style={{ background: "#F0F0F0" }}>
        <Header style={{ background: "#F0F0F0" }} className="header">
          <div className="logo" />
          <Menu
            style={{
              display: "flex",
              padding: "0",
              width: "22vw",
              background: "#F0F0F0",
            }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              <DDMenu
                setMyNewHabit={setMyNewHabit}
                setNewGroup={setNewGroup}
                setMyHabit={setMyHabit}
                setMyActivities={setMyActivities}
                setMyGroups={setMyGroups}
                setMyGoals={setMyGoals}
                setCalendar={setCalendar}
              />
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setCalendar(true)}>
              <CalendarOutlined /> Calendário{" "}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "90vh", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setMyNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(true);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(false);
                    setCalendar(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item
                  key="7"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(true);
                    setCalendar(false);
                  }}
                >
                  Atividades
                </Menu.Item>
                {/* <Menu.Item
                  key="8"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(true);
                    setCalendar(false);
                  }}
                >
                  Procurar Grupos
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {/* <Col span={6}>
        <Card title="Novo Hábito" bordered={false}>
        
        </Card>
      </Col> */}
                  {/* <Col span={6}>
        <Card title="Meus Hábitos" bordered={false}>
        </Card>
      </Col> */}
                  <Col span={6}>
                    <MyHabbitCard />
                  </Col>
                  {/* <Col span={10}>
                    <MyGroupCard />
                  </Col>
                  <Col span={8}>
                    <EditGroupCard />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <AddGoalCard />
                  </Col> */}
                </Row>
              </div>
              <button
                className="return-from-myhabbits"
                onClick={() => {
                  setMyNewHabit(false);
                  setNewGroup(false);
                  setMyHabit(false);
                  setMyGroups(false);
                  setMyActivities(false);
                  setMyGoals(false);
                  setCalendar(false);
                }}
              >
                Voltar
              </button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  if (myGroups === true) {
    return (
      <Layout style={{ background: "#F0F0F0" }}>
        <Header style={{ background: "#F0F0F0" }} className="header">
          <div className="logo" />
          <Menu
            style={{
              display: "flex",
              padding: "0",
              width: "22vw",
              background: "#F0F0F0",
            }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              <DDMenu
                setMyNewHabit={setMyNewHabit}
                setNewGroup={setNewGroup}
                setMyHabit={setMyHabit}
                setMyActivities={setMyActivities}
                setMyGroups={setMyGroups}
                setMyGoals={setMyGoals}
                setCalendar={setCalendar}
              />
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setCalendar(true)}>
              <CalendarOutlined /> Calendário{" "}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setMyNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setMyGoals(false);
                    setCalendar(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item
                  key="7"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(true);
                    setCalendar(false);
                  }}
                >
                  Atividades
                </Menu.Item>
                {/* <Menu.Item
                  key="8"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(true);
                    setCalendar(false);
                  }}
                >
                  Procurar Grupos
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {/* <Col span={6}>
        <Card title="Novo Hábito" bordered={false}>
        
        </Card>
      </Col> */}
                  {/* <Col span={6}>
        <Card title="Meus Hábitos" bordered={false}>
        </Card>
      </Col> */}
                  <Col span={6}>
                    <MyGroupCard />
                  </Col>
                  {/* <Col span={10}>
                    <MyGroupCard />
                  </Col>
                  <Col span={8}>
                    <EditGroupCard />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <AddGoalCard />
                  </Col> */}
                </Row>
              </div>
              <button
                className="return-from-mygroups"
                onClick={() => {
                  setMyNewHabit(false);
                  setNewGroup(false);
                  setMyHabit(false);
                  setMyGroups(false);
                  setMyActivities(false);
                  setMyGoals(false);
                  setCalendar(false);
                }}
              >
                Voltar
              </button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  if (myActivities === true) {
    return (
      <Layout style={{ background: "#F0F0F0" }}>
        <Header style={{ background: "#F0F0F0" }} className="header">
          <div className="logo" />
          <Menu
            style={{
              display: "flex",
              padding: "0",
              width: "22vw",
              background: "#F0F0F0",
            }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              <DDMenu
                setMyNewHabit={setMyNewHabit}
                setNewGroup={setNewGroup}
                setMyHabit={setMyHabit}
                setMyActivities={setMyActivities}
                setMyGroups={setMyGroups}
                setMyGoals={setMyGoals}
                setCalendar={setCalendar}
              />
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setCalendar(true)}>
              <CalendarOutlined /> Calendário{" "}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setMyNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setMyGoals(false);
                    setCalendar(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyActivities(false);
                    setMyGroups(true);
                    setCalendar(false);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(true);
                    setCalendar(false);
                  }}
                >
                  Atividades
                </Menu.Item>
                {/* <Menu.Item
                  key="8"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(true);
                    setCalendar(false);
                  }}
                >
                  Procurar Grupos
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {/* <Col span={6}>
        <Card title="Novo Hábito" bordered={false}>
        
        </Card>
      </Col> */}
                  {/* <Col span={6}>
        <Card title="Meus Hábitos" bordered={false}>
        </Card>
      </Col> */}
                  <Col span={23}>
                    <ActivityGroups />
                  </Col>
                  {/* <Col span={10}>
                    <MyGroupCard />
                  </Col>
                  <Col span={8}>
                    <EditGroupCard />
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={6}>
                    <AddGoalCard />
                  </Col> */}
                </Row>
              </div>
              <button
                className="return-from-mygroups"
                onClick={() => {
                  setMyNewHabit(false);
                  setNewGroup(false);
                  setMyHabit(false);
                  setMyGroups(false);
                  setMyActivities(false);
                  setMyGoals(false);
                  setCalendar(false);
                }}
              >
                Voltar
              </button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  if (myGoals === true) {
    return (
      <Layout style={{ background: "#F0F0F0" }}>
        <Header style={{ background: "#F0F0F0" }} className="header">
          <div className="logo" />
          <Menu
            style={{
              display: "flex",
              padding: "0",
              width: "22vw",
              background: "#F0F0F0",
            }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              <DDMenu
                setMyNewHabit={setMyNewHabit}
                setNewGroup={setNewGroup}
                setMyHabit={setMyHabit}
                setMyActivities={setMyActivities}
                setMyGroups={setMyGroups}
              />
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setCalendar(true)}>
              <CalendarOutlined /> Calendário{" "}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setMyNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyActivities(false);
                    setMyGroups(true);
                    setCalendar(false);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(true);
                    setCalendar(false);
                  }}
                >
                  Atividades
                </Menu.Item>
                {/* <Menu.Item
                  key="8"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(true);
                    setCalendar(false);
                  }}
                >
                  Procurar Grupos
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {/* <Col span={6}>
      <Card title="Novo Hábito" bordered={false}>
      
      </Card>
    </Col> */}
                  {/* <Col span={6}>
      <Card title="Meus Hábitos" bordered={false}>
      </Card>
    </Col> */}
                  <Col span={6}>
                    <FindGroupCard />
                  </Col>
                  {/* <Col span={10}>
                  <MyGroupCard />
                </Col>
                <Col span={8}>
                  <EditGroupCard />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={6}>
                  <AddGoalCard />
                </Col> */}
                </Row>
              </div>
              <button
                className="return-from-mygroups"
                onClick={() => {
                  setMyNewHabit(false);
                  setNewGroup(false);
                  setMyHabit(false);
                  setMyGroups(false);
                  setMyActivities(false);
                  setCalendar(false);
                }}
              >
                Voltar
              </button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }

  if (calendar === true) {
    return (
      <Layout style={{ background: "#F0F0F0" }}>
        <Header style={{ background: "#F0F0F0" }} className="header">
          <div className="logo" />
          <Menu
            style={{
              display: "flex",
              padding: "0",
              width: "22vw",
              background: "#F0F0F0",
            }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              <DDMenu
                setMyNewHabit={setMyNewHabit}
                setNewGroup={setNewGroup}
                setMyHabit={setMyHabit}
                setMyActivities={setMyActivities}
                setMyGroups={setMyGroups}
              />
            </Menu.Item>
            <Menu.Item key="2" onClick={() => setCalendar(true)}>
              <CalendarOutlined /> Calendário{" "}
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Hábitos">
                <Menu.Item
                  key="1"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(true);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Hábito
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => {
                    setMyNewHabit(false);
                    setNewGroup(false);
                    setMyHabit(false);
                    setMyGroups(true);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Meus Hábitos
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="Grupos">
                <Menu.Item
                  key="5"
                  onClick={() => {
                    setNewGroup(true);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setCalendar(false);
                  }}
                >
                  Novo Grupo
                </Menu.Item>
                <Menu.Item
                  key="6"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyActivities(false);
                    setMyGroups(true);
                    setCalendar(false);
                  }}
                >
                  Meus Grupos
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(true);
                    setCalendar(false);
                  }}
                >
                  Atividades
                </Menu.Item>
                {/* <Menu.Item
                  key="8"
                  onClick={() => {
                    setNewGroup(false);
                    setMyNewHabit(false);
                    setMyHabit(false);
                    setMyGroups(false);
                    setMyActivities(false);
                    setMyGoals(true);
                    setCalendar(false);
                  }}
                >
                  Procurar Grupos
                </Menu.Item> */}
              </SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="site-card-wrapper">
                <Row gutter={16}>
                  {/* <Col span={6}>
      <Card title="Novo Hábito" bordered={false}>
      
      </Card>
    </Col> */}
                  {/* <Col span={6}>
      <Card title="Meus Hábitos" bordered={false}>
      </Card>
    </Col> */}
                  <Col span={6}>
                    <Calendary />
                  </Col>
                  {/* <Col span={10}>
                  <MyGroupCard />
                </Col>
                <Col span={8}>
                  <EditGroupCard />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={6}>
                  <AddGoalCard />
                </Col> */}
                </Row>
              </div>
              <button
                className="return-from-mygroups"
                onClick={() => {
                  setMyNewHabit(false);
                  setNewGroup(false);
                  setMyHabit(false);
                  setMyGroups(false);
                  setMyActivities(false);
                  setCalendar(false);
                }}
              >
                Voltar
              </button>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
};
export default Home;
