import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Email" type="email" variant="outlined" fullWidth required />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" size="large" type="submit">
          Login
        </Button>
        <Button
          variant="text"
          color="secondary"
          size="large"
          onClick={() => navigate('/signup')} // Navigate to Signup page
        >
          Don't have an account? Sign Up
        </Button>
      </Box>
    </Container>
  );
}

