import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import WarningIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import ButtonMui from './ButtonMui';

function ModalMui({
    open = false,
    handleClose = () => { },
    title = "null",
    message = "null",
    status = "info",


}) {
    const handleGetIconByStatus = () => {
        switch (status) {
            case "warning":
                return <WarningIcon color="warning" sx={{ fontSize: 40 }} />;
            case "error":
                return <ErrorOutlineIcon color="error" sx={{ fontSize: 40 }} />;
            case "success":
                return <CheckCircleOutlineIcon color="success" sx={{ fontSize: 40 }} />;
            default:
                return <WarningIcon color="info" sx={{ fontSize: 40 }} />;
        }
    }
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {title &&
                    <DialogTitle id="alert-dialog-title">
                        {title}
                    </DialogTitle>
                }
                <DialogContent>
                    {
                        handleGetIconByStatus()
                    }
                    {
                        message &&
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {message}
                            </DialogContentText>
                        </DialogContent>
                    }
                </DialogContent>



                <DialogActions>
                    <ButtonMui name="Aceptar" />
                    <ButtonMui name="Rechazar" backgroundColor="red" />
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ModalMui;