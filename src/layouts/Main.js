import { Layout, Row, Col, Steps } from "antd";
import useMedia from "../hooks/useMedia";
import { Link } from "react-router-dom";

const steps = [
    "Personal",
    "Experience",
    "Education",
    "Skill",
    "Summary",
    "Finalize"
]

const Main = ({ children, current }) => {
    const { md, width } = useMedia();

    const breakpoint = width < 770;


    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout.Header className="header">
                <Row>
                    <Col span={breakpoint ? 24 : 2} lg={{ offset: 4 }} sm={{ offset: 0 }} md={{ offset: 0 }}>
                        <Link to="/"><h1 style={{ textAlign: "center" }}>Builder</h1></Link>
                    </Col>
                    {!breakpoint && (
                        <Col flex="auto" md={{ flex: "auto", offset: 1 }} lg={{ span: 18, offset: 1 }} xl={{ offset: 4, span: 16 }}>
                            <div className="steps-wrapper">
                                <Steps size="small" current={current}>
                                    {steps.map(step => <Steps.Step title={<span style={{ fontSize: md ? 12 : 14 }}>{step}</span>} />)}
                                </Steps>
                            </div>
                        </Col>
                    )}
                    <Col lg={{ span: 2 }} md={{ span: 0 }} />
                </Row>
            </Layout.Header>
            <Layout.Content className="content">
                <Row>
                    <Col lg={{ span: 16, offset: 4 }} md={{ offset: 0 }}>
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
