import { Typography } from "antd";
import Editor from 'ckeditor4-react';
import { useContextSelector } from 'use-context-selector';
import AppContext from "../context/App";
import { handleFormChange } from "../utils/form";

const Summary = () => {
    const summary = useContextSelector(AppContext, ctx => ctx.appState.summary);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const onChange = handleFormChange(dispatch);

    return (
        <>
            <Typography.Title level={2} className="text-primary">Briefly tell us about your background</Typography.Title>
            <Typography.Title level={4}>Use our rich text editor below to get started.</Typography.Title>
            <div style={{ marginTop: 32 }}>
                <Editor
                    data={summary.length ? summary : "<p>Write something nice about yourself.</p>"}
                    onChange={(e) => onChange({ name: "summary", value: e.editor.getData() }, true)}
                    config={{
                        height: 150,
                    }} />
            </div>
        </>
    )
}

export default Summary;