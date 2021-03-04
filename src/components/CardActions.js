import { Tooltip } from "antd"
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";

const CardActions = ({ onEdit, onDelete }) => {
    return (
        <div className="card-actions">
            <Tooltip title="Edit">
                <EditTwoTone onClick={onEdit} />
            </Tooltip>
            <Tooltip title="Delete">
                <DeleteTwoTone onClick={onDelete} twoToneColor="#ff4d4f" />
            </Tooltip>
        </div>
    )
}

export default CardActions;