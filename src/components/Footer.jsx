import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 20px', marginTop: 'auto' }}>
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' gutterBottom>About</Typography>
          <Typography variant='body2'><Link to='/about-us' style={{ textDecoration: 'none', color: 'inherit' }}>About us</Link></Typography>
          <Typography variant='body2'><Link to='/our-charter' style={{ textDecoration: 'none', color: 'inherit' }}>Our charter</Link></Typography>
          <Typography variant='body2'><Link to='/stats' style={{ textDecoration: 'none', color: 'inherit' }}>Stats</Link></Typography>
          <Typography variant='body2'><Link to='/press' style={{ textDecoration: 'none', color: 'inherit' }}>Press</Link></Typography>
          <Typography variant='body2'><Link to='/jobs' style={{ textDecoration: 'none', color: 'inherit' }}>Jobs</Link></Typography>
        </Grid>

        {/* Support Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' gutterBottom>Support</Typography>
          <Typography variant='body2'><Link to='/help-center' style={{ textDecoration: 'none', color: 'inherit' }}>Help center</Link></Typography>
          <Typography variant='body2'><Link to='/our-rules' style={{ textDecoration: 'none', color: 'inherit' }}>Our rules</Link></Typography>
          <Typography variant='body2'><Link to='/creator-resources' style={{ textDecoration: 'none', color: 'inherit' }}>Creator resources</Link></Typography>
          <Typography variant='body2'><Link to='/forward-funds' style={{ textDecoration: 'none', color: 'inherit' }}>Forward funds</Link></Typography>
          <Typography variant='body2'><Link to='/brand-assets' style={{ textDecoration: 'none', color: 'inherit' }}>Brand assets</Link></Typography>
        </Grid>

        {/* More from Hoa Sen Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' gutterBottom>More from Hoa Sen</Typography>
          <Typography variant='body2'><Link to='/newsletter' style={{ textDecoration: 'none', color: 'inherit' }}>Newsletter</Link></Typography>
          <Typography variant='body2'><Link to='/hoa-sen-project-updates' style={{ textDecoration: 'none', color: 'inherit' }}>Hoa Sen project updates</Link></Typography>
          <Typography variant='body2'><Link to='/research' style={{ textDecoration: 'none', color: 'inherit' }}>Research</Link></Typography>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 3 }} />

      {/* Footer Bottom Section */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='body2' color='textSecondary'>
          Hoa Sen, Copyright ©2025
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          <Link to='/trust-and-safety' style={{ textDecoration: 'none', color: 'inherit' }}>Trust & Safety</Link> - 
          <Link to='/terms-of-use' style={{ textDecoration: 'none', color: 'inherit' }}>Terms of Use</Link> - 
          <Link to='/privacy-policy' style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</Link> - 
          <Link to='/cookie-policy' style={{ textDecoration: 'none', color: 'inherit' }}>Cookie Policy</Link> - 
          <Link to='/cookie-preferences' style={{ textDecoration: 'none', color: 'inherit' }}>Cookie Preferences</Link> - 
          <Link to='/accessibility-statement' style={{ textDecoration: 'none', color: 'inherit' }}>Accessibility Statement</Link> - 
          <Link to='/notice-of-consent' style={{ textDecoration: 'none', color: 'inherit' }}>Notice of Consent</Link>
        </Typography>
      </Box>
    </Box>
  );
}
