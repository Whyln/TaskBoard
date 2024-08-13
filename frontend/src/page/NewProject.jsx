import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Input, Button, DatePicker } from 'antd';

const { TextArea } = Input;

function NewProjectPage() {
  const location = useLocation();
  const { username } = location.state || {};

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log({
      ...values,
      username
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-12">
      <h1 className="text-4xl font-bold mb-6">新建项目</h1>
      {username && <p className="mb-4">用户名: {username}</p>}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="bg-white p-6 rounded shadow-md"
      >
        <Form.Item
          label="项目名称"
          name="projectName"
          rules={[{ required: true, message: '请输入项目名称' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="项目说明"
          name="projectDescription"
          rules={[{ required: true, message: '请输入项目说明' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="项目日期"
          name="projectDate"
          rules={[{ required: true, message: '请选择项目日期' }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item
          label="项目成员"
          name="projectMembers"
          rules={[{ required: true, message: '请输入项目成员' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewProjectPage;