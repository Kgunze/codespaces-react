import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);
  const navigate = useNavigate();

  // Function to calculate password strength
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1; // Minimum length
    if (/[A-Z]/.test(password)) strength += 1; // Uppercase letter
    if (/[a-z]/.test(password)) strength += 1; // Lowercase letter
    if (/[0-9]/.test(password)) strength += 1; // Number
    if (/[@%*?&#]/.test(password)) strength += 1; // Special character
    return strength;
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrength(calculatePasswordStrength(value));
  };

  const getPasswordStrengthLabel = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return 'Weak';
      case 2:
      case 3:
        return 'Moderate';
      case 4:
      case 5:
        return 'Strong';
      default:
        return '';
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Sign Up
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
          onChange={handlePasswordChange}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <LinearProgress
            variant="determinate"
            value={(passwordStrength / 5) * 100}
            sx={{ flexGrow: 1, height: '8px', borderRadius: '4px' }}
          />
          <Typography variant="body2">{getPasswordStrengthLabel()}</Typography>
        </Box>
        <Typography variant="caption" color="textSecondary">
          Password must be at least 8 characters long and include uppercase, lowercase, a number, and a special character.
        </Typography>
        <Button variant="contained" color="primary" size="large" type="submit">
          Sign Up
        </Button>
        <Button
          variant="text"
          color="secondary"
          size="large"
          onClick={() => navigate('/login')} // Navigate to Login page
        >
          Already have an account? Login
        </Button>
      </Box>
    </Container>
  );
}

