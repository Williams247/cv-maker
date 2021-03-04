import { Row, Col, Menu } from "antd";
import WithControlsLayout from "./WithControls";
import { useHistory } from "react-router-dom";

const MenuItems = ["Personal", "Experience", "Education", "Skills", "Summary", "Finalize", "Preview"]

const WithSidebar = ({ children, ...rest }) => {
    const history = useHistory()
    return (
        <WithControlsLayout {...rest}>
            <Row gutter="32">
                <Col span="8">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['7']}
                        style={{ position: "sticky", top: 50 }}
                    >
                        {MenuItems.map((item, i) => <Menu.Item onClick={() => history.push(`/${item.toLowerCase()}`)} key={++i}>{item}</Menu.Item>)}
                    </Menu>
                </Col>
                <Col span="16">
                    {children}
                </Col>
            </Row>
        </WithControlsLayout>
    );
};

export default WithSidebar;