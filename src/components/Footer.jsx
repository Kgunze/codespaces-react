import React from 'react';
import { Box, Grid, Typography, Link, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '40px 20px', marginTop: 'auto' }}>
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' gutterBottom>About</Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>About us</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Our charter</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Stats</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Press</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Jobs</Link></Typography>
        </Grid>

        {/* Support Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' gutterBottom>Support</Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Help center</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Our rules</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Creator resources</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Forward funds</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Brand assets</Link></Typography>
        </Grid>

        {/* More from Hoa Sen Section */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h6' gutterBottom>More from Hoa Sen</Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Newsletter</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Hoa Sen project updates</Link></Typography>
          <Typography variant='body2'><Link href='#' color='inherit'>Research</Link></Typography>
        </Grid>
      </Grid>

      <Divider sx={{ marginY: 3 }} />

      {/* Footer Bottom Section */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='body2' color='textSecondary'>
          Hoa Sen, Copyright ©2025
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          <Link href='#' color='inherit'>Trust & Safety</Link> - 
          <Link href='#' color='inherit'>Terms of Use</Link> - 
          <Link href='#' color='inherit'>Privacy Policy</Link> - 
          <Link href='#' color='inherit'>Cookie Policy</Link> - 
          <Link href='#' color='inherit'>Cookie Preferences</Link> - 
          <Link href='#' color='inherit'>Accessibility Statement</Link> - 
          <Link href='#' color='inherit'>Notice of Consent</Link>
        </Typography>
      </Box>
    </Box>
  );
}
