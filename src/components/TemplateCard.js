import React, {useEffect, useState} from 'react';
import { Card } from 'antd';
import dummyTemplates from '../constants/dummy-template-images';
const { Meta } = Card;

const TemplateCard = () => {
    const [templateData, setTemplateData] = useState([]);
    const [loading, setLoading] = useState(true);
    const handleMountTemplates = () => {
        setTemplateData([...dummyTemplates]);
        //after an await
        setLoading(false)
    }
    const clickable = () => {
        console.log('Clicked')
    }
    useEffect(() => {
        handleMountTemplates()
    }, [])
    return (
        <div className="container flex-item flex-wrap card-top-bottom-space flex-item-center">
            {loading && (
                <div className="flex-item">
                    <div className="spinner"></div>
                      <div>
                            <h1 style={{marginLeft: '4px'}}>Loading.....</h1>
                        </div>
                    </div>
              )}
                {templateData.map((data, index) => {
                    return (
                        <div className="single-card" key={index} onClick={clickable}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt={data.name} src={data.thumbnail} />}
                            >
                                <Meta title={data.name}/>
                            </Card>
                      </div>
                  )
            })}
        </div>
    )
}

export default TemplateCard
