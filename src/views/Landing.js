import { Row, Typography, Col, Button } from "antd";
import CreateSvg from "./../assets/images/cv.svg";

const Landing = ({ history }) => {
    return (
        <div className="landing-wrapper">
            <div className="right__side" />
            <div className="container">
                <Row gutter={64}>
                    <Col span="12">
                        <p id="landing-page-text">Just three <span className="text-primary">simple</span> steps.</p>
                        <ul className="list">
                            <li><span> Select a template from our library of <br /> professional designs</span></li>
                            <li><span> Build your resume with our  <br /> industry-specific bullet points</span></li>
                            <li><span> Download your resume, print it out <br />  and get it ready to send!</span></li>
                        </ul>
                    </Col>
                    <Col span="12">
                        <img alt="..." className="illustration" src={CreateSvg} />
                        <Button block type="primary" onClick={() => history.push("/template-list")} danger>Create My CV</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Landing;