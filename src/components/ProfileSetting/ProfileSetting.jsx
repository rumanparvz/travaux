import React, { useState } from "react";
import NavBar from "../Common/NavBar/NavBar";
import { Tabs, Radio, Space, Form, Button, Input, Checkbox } from "antd";
import { BiChevronRight } from "react-icons/bi";
const { TabPane } = Tabs;
const ProfileSetting = () => {
  const handleContract = (values) => {
    console.log("Success:", values);
  };

  const handleChangePassword = (values) => {
    console.log("Success:", values);
  };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <>
          <Tabs tabPosition="left" className="mt-5">
            {/* TAB 1 */}
            <TabPane
              tab={
                <span>
                  <BiChevronRight /> Mes coordonnées
                </span>
              }
              key="1"
            >
              <h1 className="py-3">Mes coordonnées</h1>
              <Form
                name="basic"
                onFinish={handleChangePassword}
                autoComplete="off"
                style={{ width: "40%" }}
                layout="vertical"
              >
                <Form.Item label="Adresse e-mail" name="email">
                  <Input defaultValue="sajid@gmail.com" />
                </Form.Item>

                <Form.Item
                  label="Prénom"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Prénom !"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Nom"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Nom !"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Téléphone"
                  name="telephone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Téléphone !"
                    }
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Sauvegarder
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>

            {/* TAB2  */}
            <TabPane
              key="2"
              tab={
                <span>
                  <BiChevronRight /> Changer le mot de passe
                </span>
              }
            >
              <h1 className="py-4">Changer le mot de passe</h1>
              <Form
                name="basic"
                onFinish={handleContract}
                autoComplete="off"
                style={{ width: "40%" }}
                layout="vertical"
              >
                <h6>Nouveau mot de passe</h6>
                <Form.Item
                  label="Votre mot de passe doit comporter au moins 6 caractères"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password !"
                    }
                  ]}
                >
                  <Input.Password style={{ padding: "10px 7px" }} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox> Afficher le mot de passe</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Changer le mot de passe
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>

            {/* TAB 3*/}
            <TabPane
              tab={
                <span>
                  <BiChevronRight /> Paramètres de notification
                </span>
              }
              key="3"
            >
              <h1 className="py-4">Paramètres de notification</h1>

              <div
                className="notification_sms"
                style={{
                  border: "1px solid #ddd",
                  paddingBottom: "15px 0px"
                }}
              >
                <h6 style={{ background: "#F4F4F4" }} className="p-3">
                  Notification per SMS
                </h6>
                <div className="content p-2">
                  <p>
                    Souhaitez - vous recevoir un SMS lorsqu'un artisan répond à
                    votre projet de chantier ?
                  </p>
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio
                      className="p-3 mb-2  w-100"
                      style={{ background: "#F4F4F4" }}
                      value="oui"
                    >
                      OUI,je souhaite recevoir un SMS
                    </Radio>{" "}
                    <br /> <br />
                    <Radio
                      className="p-3 mb-2  w-100"
                      style={{ background: "#F4F4F4" }}
                      value="non"
                    >
                      Non
                    </Radio>
                  </Radio.Group>
                </div>
              </div>
              <Button className="my-4" type="primary">Enregistrer</Button> 
     
            </TabPane>
          </Tabs>
        </>
      </div>
    </div>
  );
};

export default ProfileSetting;
