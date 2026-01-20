import { useState } from 'react'

import { Box, Grid, Link } from '@mui/material';

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
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <Box sx={{ width: '100%', maxWidth: 400 }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Iniciar Sesión</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          handlesendForm();
        }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <InputMui
              placeholder="Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              label="Usuario"
              fullWidth
            />

            <InputMui
              endIcon={<IconButton onClick={() => { setShowPassword(!showPassword); }} size="small">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton>}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              fullWidth
            />
          </Box>

          {/* Acciones - Botones lado a lado como en la imagen */}
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', mt: 4, gap: 2, width: '100%' }}>
            <ButtonMui
              name="INGRESAR"
              backgroundColor="#FF0000"
              onClick={handlesendForm}
            />
            <ButtonMui
              name="REGISTRARSE"
              backgroundColor="#0000FF"
              onClick={() => navigate('/register')}
            />
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default LoginPage;