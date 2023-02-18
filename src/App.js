import { Link, Route,Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './Components/header/headerContainer';
import ProfileInfo from './Components/Home/profileInfo';
import Login from './Components/login/login';
import UsersContainer from './Components/Users/UsersContainer';

import 'antd/dist/reset.css';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;





const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
    <Sider style={{
          paddingTop: 50,
        }} trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: <Link to={"/"}>Home</Link>,
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: <Link to={"/users"}>Users</Link>,
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: <Link to={"/login"}>login</Link>,
          },
        ]}
      />
    </Sider>
    <Layout className="site-layout">
      <Header
        
        style={{
          padding: 10,
          background: colorBgContainer,
        }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          onClick: () => setCollapsed(!collapsed),
        })}
      </Header>
      <HeaderContainer/>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 540,
          background: colorBgContainer,
        }}
      >
        <Routes>
        <Route path={"/"} element={<ProfileInfo/>}/>
        <Route path={"/:id"} element={<ProfileInfo/>}/>
        <Route path={"/users"} element={<UsersContainer/>}/>
        <Route path={"/login"} element={<Login/>}/>
  </Routes>
      </Content>
    </Layout>
  </Layout>
  )
      {/*<HeaderContainer/>
      <Routes>
        <Route path={"/"} element={<ProfileInfo/>}/>
        <Route path={"/:id"} element={<ProfileInfo/>}/>
        <Route path={"/users"} element={<UsersContainer/>}/>
        <Route path={"/login"} element={<Login/>}/>
  </Routes>*/}
}

export default App;