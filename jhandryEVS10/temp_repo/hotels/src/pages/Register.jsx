import { useState } from 'react'

import { Box, Grid } from '@mui/material';

import ButtonMui from '../components/ButtonMui.jsx';
import InputMui from '../components/InputMui.jsx';
import { Login } from '../utils/login.js';

import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import IconButton from '@mui/material/IconButton';

import { useNavigate } from 'react-router-dom';



function LoginPage() {

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlesendForm = () => {
    const resLogin = Login(user, password);
    console.log(resLogin);
    if (resLogin) {
      alert(`Bienvenido ${resLogin.name} ${resLogin.lastName}`);
      navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleCount = () => {
    alert(`Materia: ${asignature} - Créditos: ${credit}`);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <Grid container spacing={3} maxWidth={500} direction="column" justifyContent="center" alignItems="center" sx={{ width: '100%', paddingX: 10 }}>
        
        <Grid item xs={12} sx={{ textAlign: 'center', width: '500%' }}>
          <h1>Iniciar Sesión</h1>
        </Grid>


        <form onSubmit={(e) => { 
          e.preventDefault();
          handlesendForm();
        }} style={{ width: '100%' }}>
          
          <Grid container spacing={2} direction="column" alignItems="stretch" sx={{ width: '100%' }}>
            
            <Grid item xs={12}>
              <InputMui 
                startIcon={<PersonIcon />}
                placeholder="User" 
                value={user} 
                onChange={(e) => setUser(e.target.value)} 
                helperText="El mismo que el correo electronico"
                label="Usuario"
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <InputMui
                endIcon={<IconButton onClick={() => { setShowPassword(!showPassword); }} > 
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>}
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                helperText="La contraseña esta en su correo"
                label="Contraseña"
                type={showPassword ? "text" : "password"}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ marginTop: 2 }}>
              <ButtonMui 
                name="Ingresar" 
                backgroundColor="red"
                onClick={handlesendForm}
              />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Box>
  )
}

export default LoginPage;