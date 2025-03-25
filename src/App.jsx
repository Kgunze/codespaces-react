import React from 'react';
import './App.css';
import { Button, Typography, AppBar, Toolbar } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            React + MUI App
          </Typography>
        </Toolbar>
      </AppBar>
      <header className='App-header'>
        <Typography variant='h4' gutterBottom>
          GitHub Codespaces <span className='heart'>♥️</span> React
        </Typography>
        <Typography variant='body2' className='small'>
          Edit <code>src/App.jsx</code> and save to reload.
        </Typography>
        <Button variant='contained' color='primary' href='https://reactjs.org' target='_blank'>
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
