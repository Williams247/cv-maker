import { Modal } from "antd";
import Editor from 'ckeditor4-react';
import { useContextSelector } from 'use-context-selector';
import AppContext from "../../context/App";
import { handleFormChange } from "../../utils/form";

const CertificationModal = ({ visible, onOk, onCancel }) => {
    const certifications = useContextSelector(AppContext, ctx => ctx.appState.others.certifications);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const onChange = handleFormChange(dispatch);

    return (
        <Modal title="Add Certification" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Editor
                data={certifications ? certifications : "<ul><li>Describe some of your certifications below</li></ul>"}
                onChange={(e) => onChange({ target: { id: `others_certifications`, value: e.editor.getData() } })} />
        </Modal>
    )
}

export default CertificationModal;