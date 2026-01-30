import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditSquareIcon from '@mui/icons-material/EditSquare';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const columnasHotels = ({ onDelete = () => { }, onEdit = () => { }, onView = () => { } }) => [
    {
        field: 'id',
        headerName: 'ID',
    },
    {
        field: 'name',
        headerName: 'Nombre',
    },
    {
        field: 'address',
        headerName: 'Direccion',
    },
    {
        field: 'stores',
        headerName: 'Tiendas Disponibles',
    },
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 200,
        renderCell: (item) => (
            <>
                <Tooltip title="Eliminar hotel" placement="top">
                    <IconButton onClick={() => onDelete(item.id)} aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" color="error" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Editar hotel" placement="top">
                    <IconButton onClick={() => onEdit(item.id)} aria-label="edit" size="small">
                        <EditSquareIcon fontSize="small" color="warning" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Examinar hotel" placement="top">
                    <IconButton onClick={() => onView(item.id)} aria-label="view" size="small">
                        <VisibilityIcon fontSize="small" color="primary" />
                    </IconButton>
                </Tooltip>
            </>
        )
    },
];
