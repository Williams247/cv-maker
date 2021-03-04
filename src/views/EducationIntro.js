import { Typography } from "antd";

const EducationIntro = () => {
    return (
        <div className="page-center">
            <Typography.Title level={1} className="text-primary">Great, let’s work on your education</Typography.Title>
            <Typography.Title level={4}>Here’s what you need to know:</Typography.Title>
            <Typography.Text>
                Employers quickly scan the education section.<br />
                We’ll take care of the formatting so it’s easy to find.
            </Typography.Text>
        </div>
    );
};

export default EducationIntro;