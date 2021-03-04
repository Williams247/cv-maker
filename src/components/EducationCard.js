import { Badge, Card, Typography, Row, Col } from "antd";
import { underscoreToCapitalize } from "./../utils/transformers";
import CardActions from "./CardActions";

const EducationCard = ({ index, name, location, degree, fieldOfStudy, current, startDate, endDate, onEdit, onDelete }) => {
    return <Badge.Ribbon text={`Degree ${index}`} placement="start">
        <Card>
            <CardActions onDelete={onDelete} onEdit={onEdit} />
            <div className="d-flex mt">
                <Typography.Title level={5}>{underscoreToCapitalize(degree)}, {fieldOfStudy}.</Typography.Title>
                <Typography.Title level={5} className="m-0 text-normal ml"> &nbsp;&nbsp; | &nbsp;&nbsp; {startDate ? new Date(startDate).getFullYear() : "?"} - {current ? "Current" : endDate ? new Date(endDate).getFullYear() : "?"}</Typography.Title>
            </div>
            <Row>
                <Col lg={{ span: 24 }}>
                    <Typography.Text level={5}> {name}, {location}.</Typography.Text>
                </Col>
            </Row>
        </Card>
    </Badge.Ribbon>
};

export default EducationCard;