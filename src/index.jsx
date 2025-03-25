import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#ff9800', // Orange
    },
    background: {
      default: '#f4f6f8', // Light Gray for better contrast
      paper: '#ffffff', // White for cards and surfaces
    },
    text: {
      primary: '#212121', // Dark Gray for main text
      secondary: '#757575', // Medium Gray for secondary text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
