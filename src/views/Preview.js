import { Typography, Button } from "antd";
import { RenderTemplate } from "./../components";
import HtmlToCanvas from "html2canvas";
import axios from "axios";

const Preview = () => {
    const saveAsPdf = async () => {
        const template = document.querySelector("#template-box");
        try {
            const canvas = await HtmlToCanvas(template);
            const dataUrl = canvas.toDataURL('image/png');
            const res = await axios.post("/template/toPdf", JSON.stringify({ blob: dataUrl }), { headers: { "Content-Type": "application/json" } })
            window.downloadFile(res.data.downloadLink)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div className="d-flex">
                <Typography.Title level={2} style={{ flex: 1 }} className="text-primary">Below is a preview of your CV</Typography.Title>
                <Button type="primary" onClick={saveAsPdf} danger> Download as PDF </Button>
            </div>
            <RenderTemplate />
        </div>
    )
};

export default Preview;