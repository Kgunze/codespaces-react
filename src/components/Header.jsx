import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Side Logo */}
        <Box sx={{ flexGrow: 0 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" component="div">
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: '40px', verticalAlign: 'middle' }}
              />
            </Typography>
          </Link>
        </Box>

        {/* Center Website Name */}
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h6" component="div">
            Hoa Sen Crowdfunding - Lotus Crowdfunding Beta
          </Typography>
        </Box>

        {/* Right Side Search Bar */}
        <Box sx={{ flexGrow: 0 }}>
          <Search>
            <SearchIconWrapper>
              <i className="material-icons">search</i>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
