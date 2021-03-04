import { Layout, Row, Col, Steps } from "antd";

const Main = ({ children, current }) => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Header className="header">
                <Row>
                    <Col lg={{ offset: 4 }}>
                        <h1>Builder</h1>
                    </Col>
                    <Col flex="auto" lg={{ offset: 5 }}>
                        <div className="steps-wrapper">
                            <Steps size="small" current={current}>
                                <Steps.Step title="Personal" />
                                <Steps.Step title="Experience" />
                                <Steps.Step title="Education" />
                                <Steps.Step title="Skill" />
                                <Steps.Step title="Summary" />
                                <Steps.Step title="Finalize" />
                            </Steps>
                        </div>
                    </Col>
                    <Col lg={{ span: 2 }} />
                </Row>
            </Layout.Header>
            <Layout.Content className="content">
                <Row>
                    <Col lg={{ span: 16, offset: 4 }}>
                        {children}
                    </Col>
                </Row>
            </Layout.Content>
            <Layout.Footer className="footer text-primary text-center text-small">
                © 2021, Builders Limited. All rights reserved.
            </Layout.Footer>
        </Layout>
    );
}

export default Main;
