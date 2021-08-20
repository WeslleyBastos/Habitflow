import { AddGroupCard } from "../../Components/AddGroup";
import { FindGroupCard } from "../../Components/FindGroup";
import { MyGroupCard } from "../../Components/MyGroups";
import { Layout } from "antd";
import { EditGroupCard } from "../../Components/EditGroup";
import ActivityGroups from "../../Components/ActivityGroups";

const { Content } = Layout;

const GroupsPage = () => {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <EditGroupCard />
        <AddGroupCard />
        <FindGroupCard />
        <MyGroupCard />
        <ActivityGroups />
      </Content>
    </Layout>
  );
};

export default GroupsPage;
