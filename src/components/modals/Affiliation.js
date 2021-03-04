import { Modal } from "antd";
import Editor from 'ckeditor4-react';
import { useContextSelector } from 'use-context-selector';
import AppContext from "../../context/App";
import { handleFormChange } from "../../utils/form";

const AffiliationModal = ({ visible, onOk, onCancel }) => {
    const affiliations = useContextSelector(AppContext, ctx => ctx.appState.others.affiliations);
    const dispatch = useContextSelector(AppContext, ctx => ctx.dispatch);
    const onChange = handleFormChange(dispatch);

    return (
        <Modal title="Add Affiliation" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Editor
                data={affiliations ? affiliations : "<ul><li>You can add some affiliation links below</li></ul>"}
                onChange={(e) => onChange({ target: { id: `others_affiliations`, value: e.editor.getData() } })} />
        </Modal>
    )
}

export default AffiliationModal;