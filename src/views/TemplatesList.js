import React from 'react';
import TemplateListBanner from '../components/TemplateComponent/TemplateListBanner';
import TemplateCard from '../components/TemplateCard'

const TemplatesList = () => {
    return (
        <div>
            <div>
                <TemplateListBanner />
                <TemplateCard />
            </div>
        </div>
    )
}

export default TemplatesList;