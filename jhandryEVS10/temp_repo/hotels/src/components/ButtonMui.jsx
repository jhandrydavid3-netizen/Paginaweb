import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

function ButtonMui({ 
    name, 
    onClick = () => {}, 
    backgroundColor = "white", 
    textColor = "white" 
}) {

    return (
        <Button
            endIcon={<LoginIcon />}
            variant="contained"
            onClick={onClick}
            sx={{
                backgroundColor: backgroundColor,
                color: textColor
            }}
        >
            {name}
        </Button>
    );
}
export default ButtonMui;