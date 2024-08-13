import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

function PersonalCenter() {
  const location = useLocation();
  const { userInfo } = location.state || {};

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log(values);
    message.success('个人信息已更新');
  };

  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-12 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">个人中心</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={userInfo}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="用户头像"
            name="avatar"
          >
            <Upload
              name="avatar"
              listType="picture"
              className="avatar-uploader"
              showUploadList={false}
              action="/upload.do"
              onChange={handleUpload}
            >
              <Button icon={<UploadOutlined />}>点击上传</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label="个人签名"
            name="signature"
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="个人简介"
            name="bio"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="修改密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default PersonalCenter;