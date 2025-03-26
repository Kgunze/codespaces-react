import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function ProjectDetails() {
  return (
    <Container maxWidth="md" sx={{ marginTop: '50px', marginBottom: '50px' }}>
      <Typography variant="h3" gutterBottom>
        About Hoa Sen Crowdfunding
      </Typography>
      <Box sx={{ marginBottom: '30px' }}>
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Hoa Sen Crowdfunding is a platform dedicated to empowering creators and innovators to bring their ideas to life. 
          We believe in the power of community and collaboration to fund and support creative projects that make a difference.
          Our mission is to connect creators with backers who share their vision, fostering a space where creativity thrives.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>
          Our Charter
        </Typography>
        <Typography variant="body1" color="textSecondary">
          At Hoa Sen Crowdfunding, we are committed to:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" color="textSecondary">
              Supporting creativity and innovation by providing a platform for creators to share their ideas.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Building a community of backers who believe in the power of collaboration and shared goals.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Ensuring transparency and trust between creators and backers through clear communication and accountability.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" color="textSecondary">
              Promoting inclusivity and diversity by welcoming projects from creators of all backgrounds and disciplines.
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
}

