import React from 'react';
import { Layout, Typography, Row, Col, Card } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Layout className="min-h-screen bg-gray-100">
      <Content className="p-12">
        <Row justify="center">
          <Col span={16}>
            <Card className="shadow-lg">
              <Title level={1} className="text-center text-4xl font-bold mb-6">关于我们</Title>
              <Paragraph className="text-lg mb-4">
                本项目是一个基于 Web 的任务管理应用，旨在帮助用户更好地管理自己的任务，提高工作效率。
              </Paragraph>
              <Paragraph className="text-lg mb-4">
                但由于个人原因，项目暂时处于停滞状态，功能不够完善。
              </Paragraph>
              <Paragraph className="text-lg">
                请老师和助教多多包涵，谢谢！
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default About;