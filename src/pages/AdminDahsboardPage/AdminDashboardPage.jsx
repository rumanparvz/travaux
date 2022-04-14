import { UserOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { AiFillHome } from 'react-icons/ai';
import { Link, useParams } from "react-router-dom";
import CreateProducts from "../../components/Admin/CreateProducts";
import CreateService from "../../components/Admin/CreateService";
import CreateSingleProduct from "../../components/Admin/CreateSingleProduct";
import CreateSingleService from "../../components/Admin/createSingleService";
import CreateSubCategory from "../../components/Admin/createSubCategory";
import MangeServices from "../../components/Admin/ManageService/MangeServices";
const AdminDashboardPage = () => {
  const [categoryId, setCategoryId] = useState({
    categoryById: "",
    subCategoryById: "",
  });
  const { SubMenu } = Menu;
  const { panel } = useParams();
  const { Header, Content, Footer, Sider } = Layout;

  return (
    <div>
      <div className="container-fluid row">
        <div className="col-md-2">
         
          <Layout>
            <Content>
              <Layout>
                <Sider className="site-layout-background" width={200}>
                  <Menu mode="inline">
                    <Menu.Item key="10">
                      <Link to="/"><AiFillHome /> Home</Link>
                    </Menu.Item>
                  </Menu>
                  <Menu mode="inline" style={{ height: "100%" }}>
                    <SubMenu
                      key="sub4"
                      icon={<UserOutlined />}
                      title="  Service"
                    >
                      <Menu.Item key="10">
                        <Link to="/admin/createService">Create Service</Link>
                      </Menu.Item>
                      <Menu.Item key="11">
                        <Link to="/admin/createSubCategory">Create Sub Category</Link>
                      </Menu.Item>
                      <Menu.Item key="12">
                        <Link to="/admin/createSingleService">Create Single Service</Link>
                      </Menu.Item>
                      <Menu.Item key="13">
                        <Link to="/admin/manageServices">
                          Manage Services Service
                        </Link>
                      </Menu.Item>

                    </SubMenu>

                  </Menu>
                </Sider>
              </Layout>
            </Content>
          </Layout>
        </div>
        <div className="col-md-10">
          {panel === "createService" ? (
            <CreateService
              setCategoryId={setCategoryId}
              categoryId={setCategoryId}
            />
          ) : panel === "createProduct" ? (
            <CreateProducts
              categoryId={categoryId}
              setCategoryId={setCategoryId}
            />
          ) : panel === "createSingleProduct" ? (
            <CreateSingleProduct
              categoryId={categoryId}
              setCategoryId={setCategoryId}
            />
          ) : panel === "manageServices" ? (
            <MangeServices />
          ) : panel === "createSingleService" ? (
            <CreateSingleService categoryId={categoryId}
              setCategoryId={setCategoryId} />
          ) : panel === "createSubCategory" ? (
            <CreateSubCategory categoryId={categoryId}
              setCategoryId={setCategoryId} />
          ) :

            null}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
