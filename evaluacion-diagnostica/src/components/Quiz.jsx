import { useState } from 'react';
import Question from './Question';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const preguntas = [
  {
    id: 1,
    pregunta: "¿Qué es React?",
    opciones: [
      "Una biblioteca de JavaScript para construir interfaces de usuario",
      "Un lenguaje de programación",
      "Una base de datos",
      "Un framework de CSS"
    ],
    respuestaCorrecta: 0
  },

  {
    id: 2,
    pregunta: "¿Cuál es la extensión de archivo recomendada para componentes React?",
    opciones: [".js", ".jsx", ".react", ".component"],
    respuestaCorrecta: 1
  },
  
  {
    id: 3,
    pregunta: "¿Qué herramienta usamos para crear este proyecto React?",
    opciones: ["create-react-app", "Vite", "Next.js", "Webpack"],
    respuestaCorrecta: 1
  },
  {
    id: 4,
    pregunta: "¿Qué librería de componentes estamos usando en este proyecto?",
    opciones: ["Bootstrap", "Tailwind CSS", "Material-UI", "Ant Design"],
    respuestaCorrecta: 2
  },
  
  {
    id: 5,
    pregunta: "¿Qué es un componente en React?",
    opciones: [
      "Una función de JavaScript",
      "Un elemento HTML",
      "Una pieza reutilizable de la interfaz de usuario",
      "Un archivo CSS"
    ],
    respuestaCorrecta: 2
  },
  {
    id: 6,
    pregunta: "¿Cuál es el puerto por defecto donde corre Vite?",
    opciones: ["3000", "8080", "5173", "4200"],
    respuestaCorrecta: 2
  }
];

function Quiz() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const handleRespuesta = (indiceRespuesta) => {
    const nuevasRespuestas = [...respuestas, indiceRespuesta];
    setRespuestas(nuevasRespuestas);
    
    if (preguntaActual + 1 < preguntas.length) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      setMostrarResultado(true);
    }
  };

  const calcularPuntaje = () => {
    let correctas = 0;
    respuestas.forEach((respuesta, index) => {
      if (respuesta === preguntas[index].respuestaCorrecta) {
        correctas++;
      }
    });
    return correctas;
  };

  const reiniciarQuiz = () => {
    setPreguntaActual(0);
    setRespuestas([]);
    setMostrarResultado(false);
  };

  const puntaje = calcularPuntaje();
  const porcentaje = ((puntaje / preguntas.length) * 100).toFixed(0);

  if (mostrarResultado) {
    return (
      <Card sx={{ maxWidth: 600, margin: '0 auto', padding: 4, textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            ¡Evaluación Completada!
          </Typography>
          
          <Box sx={{ margin: '30px 0' }}>
            <Typography variant="h2" color="secondary" sx={{ fontWeight: 'bold' }}>
              {puntaje} / {preguntas.length}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {porcentaje}% de respuestas correctas
            </Typography>
          </Box>

          <Box sx={{ marginTop: 3, padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body1">
              {porcentaje >= 70 ? '¡Felicitaciones!' : 
               porcentaje >= 50 ? 'Buen trabajo' : 
               'Necesitas estudiar '}
            </Typography>
          </Box>

          <Button 
            variant="contained" 
            color="primary" 
            onClick={reiniciarQuiz}
            sx={{ marginTop: 3, padding: '12px 40px' }}
          >
            Reintentar Evaluación
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Question 
        pregunta={preguntas[preguntaActual]}
        numeroPregunta={preguntaActual + 1}
        totalPreguntas={preguntas.length}
        onRespuesta={handleRespuesta}
      />
    </Box>
  );
}

export default Quiz;