import React from 'react';
import { Button, Typography, Grid, Card, CardContent, CardMedia, Container, Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Import Add Icon
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Home() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Sample static data for the carousels
  const sampleData = [
    {
      title: 'Project 1',
      subtitle: 'Subtitle 1',
      description: 'This is a description for Project 1.',
      image: 'https://via.placeholder.com/400x200', // Placeholder image
    },
    {
      title: 'Project 2',
      subtitle: 'Subtitle 2',
      description: 'This is a description for Project 2.',
      image: 'https://via.placeholder.com/400x200', // Placeholder image
    },
    {
      title: 'Project 3',
      subtitle: 'Subtitle 3',
      description: 'This is a description for Project 3.',
      image: 'https://via.placeholder.com/400x200', // Placeholder image
    },
  ];

  const renderCarousel = (data, sectionTitle) => (
    <Container sx={{ padding: '30px 20px' }}>
      <Typography variant="h4" gutterBottom>
        {sectionTitle}
      </Typography>
      <Carousel>
        {data.map((item, index) => (
          <Card
            key={index}
            sx={{
              marginBottom: '20px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add shadow
              borderRadius: '8px', // Rounded corners
              overflow: 'hidden', // Prevent content overflow
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.title}
            />
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {item.subtitle}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Container>
  );

  return (
    <div>
      {/* Login / Sign Up for Creator */}
      <Box sx={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h4" gutterBottom>
          Join as a Creator
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Sign up or log in to start your crowdfunding journey.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginRight: '10px' }}
          onClick={() => navigate('/login')} // Ensure navigation to Login page
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => navigate('/signup')} // Ensure navigation to Signup page
        >
          Sign Up
        </Button>
      </Box>

      {/* Explore Categories */}
      <Container sx={{ padding: '30px 20px' }}>
        <Typography variant="h4" gutterBottom>
          Explore Categories
        </Typography>
        <Grid container spacing={3}>
          {['Art', 'Technology', 'Music', 'Film', 'Games', 'Design', 'Photography', 'Writing'].map((category) => (
            <Grid item xs={6} sm={4} md={3} key={category}>
              <Typography variant="body1" textAlign="center">
                <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>
                  {category}
                </a>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Projects */}
      {renderCarousel(sampleData, 'Featured Projects')}

      {/* Fresh Favourites */}
      {renderCarousel(sampleData, 'Fresh Favourites')}

      {/* Crowdfunding Tips */}
      {renderCarousel(sampleData, 'Crowdfunding Tips')}

      {/* Floating Create Project Button */}
      <Fab
        color="primary"
        aria-label="create"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        onClick={() => navigate('/create')} // Navigate to Create Project page
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
