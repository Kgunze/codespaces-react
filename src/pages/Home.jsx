import React, { useEffect, useState } from 'react';
import { Button, Typography, Grid, Card, CardContent, CardMedia, Container, Box, Skeleton } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash Access Key

export default function Home() {
  const [images, setImages] = useState({
    featuredProjects: [],
    freshFavourites: [],
    crowdfundingTips: [],
  });

  const [loading, setLoading] = useState(true); // State to track loading

  // Function to fetch random images from Unsplash
  const fetchImages = async () => {
    try {
      const [featured, favourites, tips] = await Promise.all([
        axios.get(`https://api.unsplash.com/photos/random?query=project&count=7&client_id=${UNSPLASH_ACCESS_KEY}`),
        axios.get(`https://api.unsplash.com/photos/random?query=community&count=7&client_id=${UNSPLASH_ACCESS_KEY}`),
        axios.get(`https://api.unsplash.com/photos/random?query=blog&count=7&client_id=${UNSPLASH_ACCESS_KEY}`),
      ]);

      setImages({
        featuredProjects: featured.data,
        freshFavourites: favourites.data,
        crowdfundingTips: tips.data,
      });
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching images from Unsplash:', error);
      setLoading(false); // Stop loading even if there's an error
    }
  };

  // Fetch images on component mount
  useEffect(() => {
    fetchImages();
  }, []);

  const renderCarousel = (data, sectionTitle) => (
    <Container sx={{ padding: '30px 20px' }}>
      <Typography variant="h4" gutterBottom>
        {sectionTitle}
      </Typography>
      <Carousel>
        {loading
          ? Array.from({ length: 7 }).map((_, index) => (
              <Card
                key={index}
                sx={{
                  marginBottom: '20px',
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add shadow
                  borderRadius: '8px', // Rounded corners
                  overflow: 'hidden', // Prevent content overflow
                }}
              >
                <Skeleton variant="rectangular" height={200} />
                <CardContent>
                  <Skeleton variant="text" width="60%" sx={{ marginBottom: '10px' }} />
                  <Skeleton variant="text" width="40%" sx={{ marginBottom: '10px' }} />
                  <Skeleton variant="text" width="80%" />
                </CardContent>
              </Card>
            ))
          : data.map((image, index) => (
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
                  image={image.urls.small}
                  alt={image.alt_description || `${sectionTitle} Image`}
                />
                <CardContent>
                  <Typography variant="h6">Title {index + 1}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Subtitle {index + 1}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        <Button variant="contained" color="primary" size="large" sx={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button variant="outlined" color="primary" size="large">
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
      {renderCarousel(images.featuredProjects, 'Featured Projects')}

      {/* Fresh Favourites */}
      {renderCarousel(images.freshFavourites, 'Fresh Favourites')}

      {/* Crowdfunding Tips */}
      {renderCarousel(images.crowdfundingTips, 'Crowdfunding Tips')}
    </div>
  );
}

