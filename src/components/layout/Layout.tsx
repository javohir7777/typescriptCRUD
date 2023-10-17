import { useContext, useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DollarOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

// import "./Header.scss";
import { TOKEN } from "../../constants";
import { AuthContext } from "../../context/AuthContext";
import { AuthContextTypes } from "../../types/auth-context";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const location = useLocation();
  const { setIsAuthenticated }: AuthContextTypes = useContext(AuthContext);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    localStorage.removeItem(TOKEN);
    setIsAuthenticated(false);
    navigate("/");
  };
  return (
    <Layout className="admin-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo">Portfolio admin</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          items={[
            {
              key: "/categories",
              icon: <DollarOutlined style={{ fontSize: "20px" }} />,
              label: (
                <Link className="text-decoration-none" to="/skills">
                  Categories
                </Link>
              ),
            },
            {
              key: "/",
              icon: <LogoutOutlined style={{ fontSize: "20px" }} />,
              label: (
                <Button type="link" style={{ color: "#fff" }} onClick={logout}>
                  Logout
                </Button>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
