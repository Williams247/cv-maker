import { Modal } from "antd";
import Editor from 'ckeditor4-react';
import { useContextSelector } from 'use-context-selector';
import AppContext from "../../context/App";
import { handleFormChange } from "../../utils/form";

const InterestModal = ({ visible, onOk, onCancel }) => {
    const interests = useContextSelector(AppContext, ctx => ctx.appState.others.interests);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const onChange = handleFormChange(dispatch);

    return (
        <Modal title="Add Interest" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Editor
                data={interests ? interests : "<ul><li>Describe some of your interests below</li></ul>"}
                onChange={(e) => onChange({ target: { id: `others_interests`, value: e.editor.getData() } })} />
        </Modal>
    )
}

export default InterestModal;