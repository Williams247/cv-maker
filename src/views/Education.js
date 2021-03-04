import { Row, Col, Form, Input, Typography, DatePicker, Checkbox, Select } from "antd";
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { useEffect, useState } from "react";
import { ADD_EDUCATION, EDIT_EDUCATION } from "../context/Types";
import moment from "moment";
import { underscoreToCapitalize } from "../utils/transformers";

const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: {
        span: 24
    },
};

const degreeOptions = [
    "high_school_diploma",
    "ged",
    "associate_of_art",
    "associate_of_science",
    "associate_of_applied_science",
    "bachelor_of_arts",
    "bachelor_of_science",
    "bba",
    "master_of_arts",
    "master_of_science",
    "mba",
    "j.d",
    "m.d.",
    "ph.d.",
    "no_degree",
]

const Education = ({ match }) => {
    const isEdit = match.params.id;
    const [form] = Form.useForm();
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const [disabled, setDisabled] = useState(true);
    const currentEdit = useContextSelector(AppContext, ctx => ctx.appState.education[isEdit]);

    console.log(currentEdit)

    const InitialValues = isEdit ? {
        ...currentEdit,
        startDate: currentEdit.startDate ? moment(currentEdit.startDate, "YYYY/MM/DD") : undefined,
        endDate: currentEdit.endDate ? moment(currentEdit.endDate, "YYYY/MM/DD") : undefined,

    } : {
            current: disabled,
        }

    useEffect(() => {
        return () => {
            const values = form.getFieldsValue(true);
            if (values.degree && values.degree.trim().length && values.fieldOfStudy && values.fieldOfStudy.trim().length) {
                if (isEdit) {
                    return dispatch({
                        type: EDIT_EDUCATION,
                        payload: {
                            values,
                            index: isEdit
                        }
                    })
                }

                dispatch({
                    type: ADD_EDUCATION,
                    payload: values
                });
            }
        }
    }, [form, isEdit, dispatch]);

    return (
        <>
            <Typography.Title level={2} className="text-primary">Tell us about your education</Typography.Title>
            <Typography.Title level={4}>Include every school, even if you're still there or didn't graduate.</Typography.Title>
            <Form
                {...formItemLayout}
                form={form}
                name="education"
                size="large"
                requiredMark={false}
                initialValues={InitialValues}
                scrollToFirstError
                layout="vertical"
            >
                <Row gutter={16}>
                    <Col lg={{ span: 12 }}>
                        <Form.Item
                            name="name"
                            label="School Name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input school name!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12 }}>
                        <Form.Item
                            name="location"
                            label="School Location"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your school location!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12 }}>
                        <Form.Item
                            name="degree"
                            label="Degree"
                        >
                            <Select
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Select"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {degreeOptions.map(degree => (<Select.Option value={degree}>{underscoreToCapitalize(degree)}</Select.Option>))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12 }} />
                    <Col lg={{ span: 12 }}>
                        <Form.Item
                            name="fieldOfStudy"
                            label="Field of Study"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select your field of study!",
                                },
                            ]}
                            hasFeedback
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col lg={{ span: 12 }}>
                        <Row gutter={16}>
                            <Col lg={{ span: 12 }}>
                                <Form.Item
                                    name="startDate"
                                    label="Graduation Start Date"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please select a start date!",
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <DatePicker placeholder="Select" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col lg={{ span: 12 }}>
                                <Form.Item
                                    name="endDate"
                                    label="Graduation End Date"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please select a end date!",
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <DatePicker disabled={InitialValues.current} placeholder="Select" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{ span: 12, offset: 12 }}>
                        <Form.Item
                            name="current"
                            valuePropName="checked"
                        ><Checkbox onChange={e => setDisabled(e.target.checked)}>I currently attend here</Checkbox></Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default Education;