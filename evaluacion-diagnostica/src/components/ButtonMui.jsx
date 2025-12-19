import Button from '@mui/material/Button';

function ButtonMui({ children, onClick, variant = "contained", color = "primary", fullWidth = true }) {
  return (
    <Button 
      variant={variant}
      color={color}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{ 
        padding: '12px',
        fontSize: '16px',
        textTransform: 'none',
        marginBottom: '10px'
      }}
    >
      {children}
    </Button>
  );
}

export default ButtonMui;