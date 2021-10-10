import React, { memo } from "react";
import { Redirect, Route } from "react-router";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./AdminTemplate.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Content, Sider } = Layout;

function AdminTemplate({ Component, ...props }) {
  const { userLogin } = useSelector((state) => state.managementUserReducer);
  if (Object.keys(userLogin).length === 0) {
    return <Redirect to="/login-admin" />;
  }
  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...props}
      render={(propsRoute) => {
        return (
          <>
            <Layout>
              <Header className="header">
                <NavLink to="/">
                  <div className="logo text-white cursor-pointer">TIX.VN</div>
                </NavLink>
              </Header>
              <Layout>
                <Sider width={200} className="site-layout-background">
                  <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={[propsRoute.match.params.id]}
                    style={{ height: "100%", borderRight: 0 }}
                  >
                    <Menu.Item key="child1">
                      <NavLink to="/admin/dashboard">Dashboard</NavLink>
                    </Menu.Item>
                    <SubMenu key="child2" title={"Phim"}>
                      <Menu.Item key="10">
                        <NavLink to="/admin/management-films">
                          Quản lý phim
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key="11">
                        <NavLink to="/admin/add-film">Thêm Phim</NavLink>
                      </Menu.Item>
                    </SubMenu>
                    <SubMenu key="child3" title={"Người dùng"}>
                      <Menu.Item key="30">
                        <NavLink to="/admin/management-user">
                          Quản lý người dùng
                        </NavLink>
                      </Menu.Item>
                      <Menu.Item key="31">
                        <NavLink to="/admin/add-user">Thêm Người dùng</NavLink>
                      </Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Layout>
                  <Content
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      margin: 0,
                      minHeight: 280,
                    }}
                  >
                    <Component {...propsRoute} />
                  </Content>
                </Layout>
              </Layout>
            </Layout>
          </>
        );
      }}
    />
  );
}
export default memo(AdminTemplate);
