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
                欢迎来到我们的 Web 课程项目！我们致力于提供最优质的在线学习体验，帮助学生掌握最新的 Web 开发技术。
              </Paragraph>
              <Paragraph className="text-lg mb-4">
                我们的团队由经验丰富的专业人士组成，他们在 Web 开发领域拥有丰富的知识和技能。我们相信，通过不断创新和改进，我们能够为学生提供最佳的学习资源和支持。
              </Paragraph>
              <Paragraph className="text-lg">
                如果您有任何问题或需要进一步的信息，请随时与我们联系。我们期待与您的合作！
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default About;