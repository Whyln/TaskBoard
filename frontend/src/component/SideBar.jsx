import React, { useState } from 'react';
import { Layout, Menu ,Avatar} from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import Logo from '../assets/yileina.jpg';

const { Sider } = Layout;

function Sidebar({ userInfo }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const [userData,setUserData] = useState(userInfo || {});
  // console.log("sidebar",userData);
  const items = [
    {
      key: 'my-projects',
      icon: <LaptopOutlined />,
      label: '我的项目',
      children: [
        {
          key: 'new-project',
          icon: <PlusOutlined />,
          onClick: () => navigate('/home/new-project', { state: { username: userData.userName } }),
          label: '新建项目'
        },
        ...userData.userProjects.map((project, index) => ({
          key: `user-project-${index}`,
          onClick: () => navigate('/home/project-board', { state: {username:userData.userName, projectId: project.id } }),
          label: project.title
        }))
      ]
    },
    {
      key: 'other-projects',
      icon: <NotificationOutlined />,
      label: '他人项目',
      children: [
        ...userData.otherProjects.map((project, index) => ({
          key: `other-project-${index}`,
          onClick: () => navigate('/home/project-board', { state: {username:userData.userName, projectId: project.id } }),
          label: project.title
        }))
      ]
    },
    {
      key: 'my-task',
      icon: <UserOutlined />,
      onClick: () => navigate('/home/task-board', { state: { userData:userData} }),
      label: '我的任务'
    },
    {
      key: 'my-friends',
      icon: <UserOutlined />,
      onClick: () => navigate('/home/friend-center',{state:{username:userData.userName}}),
      label: '我的好友',
    },
  ]



  return (
    <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} className="bg-gray-800 shadow-lg border-r border-gray-700">

      {/* Logo ==> about*/}
      <div className="logo text-white flex items-center justify-center mb-4 space-x-4r bg-gray-900 hover:bg-gray-700 transition duration-300" onClick={() => navigate('/home/about')}>
        <img src={Logo} alt="Logo" className="h-12" />
        <span className="text-2xl font-bold">web作业 | TaskBoard</span>
      </div>

      <Menu theme="dark" mode="inline" className="bg-gray-800" items={items} />

      {/* avatar+username ==> personal-cetner*/}
      <div className="flex items-center justify-center mt-4 space-x-4 bg-gray-900 hover:bg-gray-700" onClick={()=>navigate("/home/personal-center",{state:{username:userData.userName}})}>
        <Avatar shape="square" size="large" icon={userData.Avatar||<LaptopOutlined/>} />
        <span className="text-white">{userData.userName}</span>
      </div>
    </Sider>
  );
}

export default Sidebar;