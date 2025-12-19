import ButtonMui from './ButtonMui';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

function Question({ pregunta, numeroPregunta, totalPreguntas, onRespuesta }) {
  const progreso = (numeroPregunta / totalPreguntas) * 100;

  return (
    <Card sx={{ maxWidth: 700, margin: '0 auto', padding: 3 }}>
      <CardContent>
        <Box sx={{ marginBottom: 3 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Pregunta {numeroPregunta} de {totalPreguntas}
          </Typography>
          <LinearProgress variant="determinate" value={progreso} sx={{ marginTop: 1 }} />
        </Box>

        <Typography variant="h5" component="h2" gutterBottom sx={{ marginBottom: 3 }}>
          {pregunta.pregunta}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {pregunta.opciones.map((opcion, index) => (
            <ButtonMui 
              key={index}
              onClick={() => onRespuesta(index)}
              variant="outlined"
            >
              {opcion}
            </ButtonMui>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Question;