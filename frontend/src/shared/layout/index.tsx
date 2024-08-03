import {
  NotificationOutlined,
} from "@ant-design/icons";
import { Badge, Button, Layout } from "antd";
import DrawerComp from "../components/DrawerComp";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";

const { Header, Content } = Layout;

interface LayoutComponentProps {
  handleClick: () => void;
  notification: any[];
  setOpen: (open: boolean) => void;
  open: boolean;
  setNotificationCount: (count: number) => void;
  notificationCount: number;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({
  handleClick,
  notification,
  setOpen,
  open,
  setNotificationCount,
  notificationCount,
}) => {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DrawerComp
        title="Notifications"
        list={notification}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Header style={{ padding: 0, background: "#fff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div/>
          <Button
            type="text"
            icon={<NotificationOutlined />}
            onClick={() => {
              setOpen(!open);
              setTimeout(() => {
                setNotificationCount(0);
              }, 1000);
            }}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          >
            <Badge
              count={notificationCount}
              style={{ backgroundColor: "red", top: "-10px", right: "10px", fontWeight: 800 }}
            />
          </Button>
        </div>
      </Header>
      <Content style={{ margin: "24px 16px 0" }}>
        <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
          <Routes>
            <Route
              path="/"
              element={<Home handleSendNotification={handleClick} />}
            />
          </Routes>
        </div>
      </Content>
    </Layout>
  );
};

export default LayoutComponent;
