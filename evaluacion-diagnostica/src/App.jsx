import Quiz from './components/Quiz';
import { Container, Typography, Box } from '@mui/material';
import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', padding: '40px 0 20px 0' }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          Evaluación Diagnóstica
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Framework React
        </Typography>
      </Box>
      <Quiz />
    </Container>
  );
}

export default App;