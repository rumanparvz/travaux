import { LaptopOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import CreateService from "../../components/Admin/CreateService";
const AdminDashboardPage = () => {
  const { SubMenu } = Menu;
  const { panel } = useParams();
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <div>
      
      <div className="container-fluid row">
        <div className="col-md-2">
          {" "}
          <Layout>
            <Content>
              <Layout>
                <Sider className="site-layout-background" width={200}>
                  <Menu mode="inline" style={{ height: "100%" }}>
                    <SubMenu
                      key="sub1"
                      icon={<UserOutlined />}
                      title=" Service Category"
                    >
                      <Menu.Item key="1">
                        <Link to="/admin/createService">Create Service</Link>
                      </Menu.Item>
                      <Menu.Item key="3">Delete Service</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      icon={<LaptopOutlined />}
                      title="Service Category"
                    >
                      <Menu.Item key="5">Create Post Category</Menu.Item>
                      <SubMenu title="Sub Category ">
                        <Menu.Item key="39">Create Post</Menu.Item>
                        <Menu.Item key="40">Create Header</Menu.Item>
                        <SubMenu title="Details ">
                          <Menu.Item key="41">Description</Menu.Item>
                          <Menu.Item key="42">table</Menu.Item>
                        </SubMenu>
                      </SubMenu>
                    </SubMenu>
                  </Menu>
                </Sider>
              </Layout>
            </Content>
          </Layout>
        </div>
        <div className="col-md-10">
          {panel === "createService" ? (
            <CreateService />
          ) : panel === "add" ? (
            <h1>ADD</h1>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
