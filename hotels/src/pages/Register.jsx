import { useState } from 'react'
import { Box, Grid, Link } from '@mui/material';
import ButtonMui from '../components/ButtonMui.jsx';
import InputMui from '../components/InputMui.jsx';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegister = () => {
    if (name && email && password && phone) {
      alert(`Usuario registrado: ${name}`);
      navigate('/login');
    } else {
      alert('Por favor complete todos los campos');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: 4 }}>
      <Box sx={{ width: '100%', maxWidth: 750 }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>Registro de Usuario</h1>

        <form onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}>
          <Grid container spacing={3}>
            {/* Columna Izquierda */}
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <InputMui
                  label="Nombre"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
                <InputMui
                  label="Contraseña"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  fullWidth
                />
              </Box>
            </Grid>

            {/* Columna Derecha */}
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <InputMui
                  label="Correo Electrónico"
                  placeholder="@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  fullWidth
                />
                <InputMui
                  label="Teléfono"
                  placeholder="0967662827"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                />
              </Box>
            </Grid>
          </Grid>

          {/* Acciones - Forzar debajo de la Grid */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6, gap: 2 }}>
            <ButtonMui
              name="REGISTRARSE"
              backgroundColor="#d12828"
              onClick={handleRegister}
            />
            <Link component="button" variant="body2" onClick={() => navigate('/login')} sx={{ textDecoration: 'none' }}>
              ¿Ya tienes cuenta? Iniciar Sesión
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default RegisterPage;