

import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import { useProduct } from "@/hooks/useProduct";
import useModal from "@/hooks/useModal";

export default function EditButton({
    id
}) {

    const { setSelectedToEdit } = useProduct();
    const { showModal } = useModal()

    return (
        <IconButton
            onClick={() => {
                setSelectedToEdit(id)
                showModal()
            }}
            style={{ width: '100%' }}
            size="small"
            color="primary"
            aria-label='remove' >
            <EditIcon fontSize="small" />
        </IconButton>
    )
}