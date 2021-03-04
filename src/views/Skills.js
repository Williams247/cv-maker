import { Row, Col, Form, Input, Typography, Select, Button, Rate, Divider } from "antd";
import { MinusCircleOutlined, PlusOutlined, FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { UPDATE_SKILLS } from "../context/Types";
import skillsSuggestions from "./../constants/skillsSuggestions";

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};

const desc = ['terrible', 'bad', 'normal', 'good', 'excellent'];

const Skills = () => {
    const [suggestions, setSuggestions] = useState([...skillsSuggestions]);
    const initialSkills = useContextSelector(AppContext, ctx => ctx.appState.skills);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const [newItem, setNewItem] = useState("");
    const [skills, setSkills] = useState(initialSkills.length ? initialSkills : [
        {
            rating: 0,
            title: "",
        }
    ])

    const addItem = (item) => {
        if (!item.trim().length) return;
        setSuggestions(suggestions => ([...suggestions, item]))
        setNewItem("")
    }

    const handleChange = (key, value, index) => {
        setSkills(skills => skills.map((skill, idx) => idx === index ? { ...skill, [key]: value } : skill))
    }

    const add = () => {
        setSkills(skills => ([...skills, {
            rating: 0,
            title: "",
        }]))
    }

    const remove = index => {
        setSkills(([...skills.filter((s, i) => index !== i)]));
    }

    useEffect(() => {
        return () => {
            dispatch({
                type: UPDATE_SKILLS,
                payload: skills.filter(skill => skill.title.trim().length)
            })
        }
    }, [skills, dispatch]);


    return (
        <>
            <Typography.Title level={2} className="text-primary">What skills do you want to highlight?</Typography.Title>
            <Typography.Title level={4}>Use our expert recommendations below to get started.</Typography.Title>
            <form style={{ marginTop: 32 }}>
                {skills.map((skill, index) => (
                    <Row gutter={16} key={index} style={{ alignItems: "center" }}>
                        <Col span="5" style={{ minWidth: 150 }}>
                            <Rate
                                tooltips={desc}
                                onChange={(value) => handleChange("rating", value, index)}
                                value={skill.rating}
                                character={({ index }) => customIcons[index + 1]} />
                        </Col>
                        <Col lg={{ span: 12 }} style={{ margin: 8 }}>
                            <Select
                                size="large"
                                value={skill.title}
                                style={{ width: '100%' }}
                                placeholder="Skill"
                                onChange={(value) => handleChange("title", value, index)}
                                dropdownRender={menu => (
                                    <div>
                                        {menu}
                                        <Divider style={{ margin: '4px 0' }} />
                                        <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                                            <Input style={{ flex: 'auto' }} value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                                            <a href="#!" style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }} onClick={() => addItem(newItem)}>
                                                <PlusOutlined /> Add New Skill
                                            </a>
                                        </div>
                                    </div>
                                )}
                            >
                                {suggestions.map(item => (
                                    <Select.Option key={item}>{item}</Select.Option>
                                ))}
                            </Select>
                            <MinusCircleOutlined className="remove-social" onClick={() => remove(index)} />
                        </Col>
                    </Row>
                ))}
                <Form.Item>
                    <Button type="link" onClick={() => add()} icon={<PlusOutlined />}>
                        Add one more
                    </Button>
                </Form.Item>
            </form>
        </>
    )
}

export default Skills;