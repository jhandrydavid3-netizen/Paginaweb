import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from './layout/Layout';
import AvatarEditor from './pages/AvatarEditor';
import SavedAvatarView from './pages/SavedAvatarView';

const theme = createTheme({
  palette: {
    primary: {
      main: '#424242',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'inherit',
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'inherit',
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

function App() {
  const [history, setHistory] = useState([]);

  const handleSaveAvatar = (newAvatarConfig) => {
    const entry = {
      ...newAvatarConfig,
      timestamp: new Date().toLocaleString()
    };
    setHistory(prev => [entry, ...prev]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout history={history} />}>
            <Route index element={<AvatarEditor onSave={handleSaveAvatar} />} />
            <Route path="avatar/:id" element={<SavedAvatarView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
