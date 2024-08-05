import React, { useState } from 'react';
import { Tabs, Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import './index.css';

import Logo from './assets/yileina.jpg';
import BgImg from './assets/background.jpg';
import { useNavigate } from 'react-router-dom';


const { TabPane } = Tabs;

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  function onLoginFinish(values) {
    console.log('Login Success:', values);
    //TODO: 实现登录逻辑
    navigate('/home');
    message.success('登录成功');
  }

  function onRegisterFinish(values) {
    console.log('Success:', values);
    //TODO: 实现注册逻辑
    navigate('/home');
    message.success('注册成功');
  }

  function validateConfirmPassword({ getFieldValue }) {
    return {
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('两次输入的密码不一致!'));
      },
    };
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(" + BgImg + ")" }}>
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-50 rounded-2xl backdrop-filter backdrop-blur-lg">
        
        <div className="flex items-center justify-center mb-4 space-x-4">
          <img src={Logo} alt="Logo" className="h-12" />
          <span className="text-2xl font-bold">web作业 | TaskBoard</span>
        </div>
        
        <Tabs defaultActiveKey="login" activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="登录" key="login">
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onLoginFinish}
              className="space-y-6"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="密码" />
              </Form.Item>
              <Form.Item >
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          
          
          <TabPane tab="注册" key="register">
            <Form
              name="register"
              initialValues={{ remember: true }}
              onFinish={onRegisterFinish}
              className="space-y-6"
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="密码" />
              </Form.Item>
              <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                  { required: true, message: '请确认密码!' },
                  validateConfirmPassword,
                ]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="确认密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  注册
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;