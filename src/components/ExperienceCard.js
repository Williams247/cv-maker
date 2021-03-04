import { Badge, Card, Typography, Row, Col } from "antd";
import CardActions from "./CardActions";

const ExperienceCard = ({ index, title, employer, city, description, startDate, endDate, current, onEdit, onDelete }) => {
    return <Badge.Ribbon text={`Experience ${index}`} placement="start">
        <Card>
            <CardActions onDelete={onDelete} onEdit={onEdit} />
            <div className="d-flex mt">
                <Typography.Title style={{ textTransform: "capitalize" }} level={5}>{title}, {employer}.</Typography.Title>
                <Typography.Title level={5} className="m-0 text-normal ml"> | &nbsp;&nbsp; {city} &nbsp;&nbsp; | &nbsp;&nbsp; {startDate ? new Date(startDate).getFullYear() : "?"} - {current ? "Current" : endDate ? new Date(endDate).getFullYear() : "?"}</Typography.Title>
            </div>
            <Row>
                {description && description.length ? description.map((desc, i) => (
                    <Col lg={{ span: 24 }} key={i}>
                        <Typography.Text level={5}> • {desc}</Typography.Text>
                    </Col>
                )) : (
                        <Col lg={{ span: 24 }}>
                            <Typography.Text level={5}> No description </Typography.Text>
                        </Col>
                    )}
            </Row>
        </Card>
    </Badge.Ribbon>
};

export default ExperienceCard;