import React, { useState } from 'react';
import { Tabs, Form, Input, Button, message as Message } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.css';
import axiosInstance from './utils/axiosInstance';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Logo from './assets/yileina.jpg';
import BgImg from './assets/background.jpg';

const LoginPage = () => {
  const navigate = useNavigate();

  const getUserInfo = (formValues) => {
    return { username: formValues.username };
  }

  async function onLoginFinish(values) {
    try {
      const response = await axiosInstance.post('/auth/login', values)
      const { success, message,userInfo } = response.data;
      console.log(response.data);
      if (!success) {
        Message.error(message);
        return;
      }
      else {
        navigate('/home/', { state: userInfo });
        Message.success('登录成功');
      }
    } catch (error) {
      console.error('Login Error:', error);
      Message.error('登录失败');
    }
  }

  async function onRegisterFinish(values) {
    try {
      const response = await axiosInstance.post('/auth/register', values);
      const { success, message,userInfo } = response.data;
      if (!success) {
        Message.error(message);
        return;
      }
      else {
        navigate("/home/", { state: userInfo });
        Message.success('注册成功');
      }
    } catch (error) {
      console.error('Register Error:', error);
      Message.error('注册失败');
    }
  }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(" + BgImg + ")" }}>
      <div className="w-full max-w-md p-8 space-y-8 bg-white bg-opacity-50 rounded-2xl backdrop-filter backdrop-blur-lg">

        <div className="flex items-center justify-center mb-4 space-x-4">
          <img src={Logo} alt="Logo" className="h-12" />
          <span className="text-2xl font-bold">web作业 | TaskBoard</span>
        </div>

        <Tabs defaultActiveKey="login" items={
          [
            { key: 'login', label: '登录', children: <LoginForm onFinish={onLoginFinish} /> },
            { key: 'register', label: '注册', children: <RegisterForm onFinish={onRegisterFinish} /> },
          ]
        } />

      </div>
    </div>
  );
};

function LoginForm({ onFinish }) {
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
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
        {/* 占位 */}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

function RegisterForm({ onFinish }) {
  return (
    <Form
      name="register"
      initialValues={{ remember: true }}
      onFinish={onFinish}
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
          // 验证两个代码相同函数
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('两次输入的密码不一致!');
            },
          }),
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
  )
}




export default LoginPage;