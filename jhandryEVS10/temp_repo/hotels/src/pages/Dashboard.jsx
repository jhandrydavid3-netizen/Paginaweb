import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Typography variant="h3" gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="h5" gutterBottom>
                Bienvenido al Sistema de Hoteles
            </Typography>
            <Button variant="contained" color="primary" onClick={handleLogout} sx={{ mt: 2 }}>
                Cerrar Sesión
            </Button>
        </Box>
    );
}

export default Dashboard;
