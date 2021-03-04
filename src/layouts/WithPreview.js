import { Row, Col } from "antd";
import WithControlsLayout from "./WithControls";

const WithPreview = ({ children, ...rest }) => {

    return (
        <WithControlsLayout isPreview {...rest}>
            <Row gutter={32}>
                <Col lg={{ span: 16 }}>
                    {children}
                </Col>
                <Col lg={{ span: 8 }}> Preview</Col>
            </Row>
        </WithControlsLayout>
    );
}

export default WithPreview;
