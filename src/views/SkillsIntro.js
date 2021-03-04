import { Typography } from "antd";

const SkillsIntro = () => {
    return (
        <div className="page-center">
            <Typography.Title level={1} className="text-primary">Next, let’s take care of your skills</Typography.Title>
            <Typography.Title level={4}>Here’s what you need to know:</Typography.Title>
            <Typography.Text>
                Employers scan skills for relevant keywords.<br />
                We’ll help you choose the best ones.
            </Typography.Text>
        </div>
    );
};

export default SkillsIntro;