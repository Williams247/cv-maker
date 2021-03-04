import { Typography } from "antd";

const SummaryIntro = () => {
    return (
        <div className="page-center">
            <Typography.Title level={1} className="text-primary">Finally, let’s work on your summary</Typography.Title>
            <Typography.Title level={4}>Here’s what you need to know:</Typography.Title>
            <Typography.Text>
                Your summary shows employers you’re right for their job.<br />
                We’ll help you write a great one with expert content you can customize.
            </Typography.Text>
        </div>
    );
};

export default SummaryIntro;