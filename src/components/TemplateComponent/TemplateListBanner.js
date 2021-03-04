import { useHistory } from 'react-router-dom'; 
import './TemplateListBanner.css';
const TemplateListBanner = () => {
    const history = useHistory();
    return (
        <div id="template-list-banner">
            <div className="container flex-item flex-item-center" id="contain-up-down">
                <div>
                    <p id="banner-text">Select a template</p>
                    <center>
                        <button id="select-btn" onClick={() => history.push("/personal")}>Select</button>
                    </center>
                </div>
            </div>
        </div>
    )
};

export default TemplateListBanner