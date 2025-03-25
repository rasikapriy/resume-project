import React, { useState } from "react";
import { Layout, Menu, Spin, ConfigProvider } from "antd";
import { HomeOutlined, UserOutlined, FundProjectionScreenOutlined, MailOutlined } from "@ant-design/icons";
import Contents from "./Components/Contents";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [loading, setLoading] = useState(false);

  const handleHover = (key) => {
    if (key !== selectedPage) {
      setLoading(true);
      setTimeout(() => {
        setSelectedPage(key);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#1890ff" } }}>
      <Layout className="layout">
        <Header className="header">
          <Menu theme="dark" mode="horizontal" selectedKeys={[selectedPage]} className="menu" onClick={(e)=> setSelectedPage(e.key)}>
            {[
              { key: "home", label: "Home", icon: <HomeOutlined /> },
              { key: "about", label: "About Me", icon: <UserOutlined /> },
              { key: "projects", label: "Projects", icon: <FundProjectionScreenOutlined /> },
              { key: "contact", label: "Contact", icon: <MailOutlined /> },
            ].map((item) => (
              <Menu.Item key={item.key} icon={item.icon} >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content className="content">
          {loading ? <Spin size="large" className="spinner" /> : <Contents selectedPage={selectedPage} setSelectedPage={setSelectedPage} />}
        </Content>
        <Footer className="footer">© 2025 My Portfolio</Footer>
      </Layout>
    </ConfigProvider>
  );
};
export default App;
