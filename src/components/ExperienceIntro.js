import { Typography } from "antd"

const ExperienceIntro = () => {
    return (
        <div className="page-center">
            <Typography.Title level={1} className="text-primary">Now, let’s fill out your work experience</Typography.Title>
            <Typography.Title level={4}>Here’s what you need to know:</Typography.Title>
            <Typography.Text>
                Employers scan your CV for six seconds to decide if you’re a match.<br />
                We’ll suggest bullet points that make a great impression.
            </Typography.Text>
        </div>
    )
}

export default ExperienceIntro;