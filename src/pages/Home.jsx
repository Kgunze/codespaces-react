import React from 'react';
import { Button, Typography, Grid, Card, CardContent, CardMedia, Container, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

export default function Home() {
  return (
    <div>
      {/* Login / Sign Up for Creator */}
      <Box sx={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant='h4' gutterBottom>
          Join as a Creator
        </Typography>
        <Typography variant='body1' color='textSecondary' gutterBottom>
          Sign up or log in to start your crowdfunding journey.
        </Typography>
        <Button variant='contained' color='primary' size='large' sx={{ marginRight: '10px' }}>
          Login
        </Button>
        <Button variant='outlined' color='primary' size='large'>
          Sign Up
        </Button>
      </Box>

      {/* Categories and Word Cloud */}
      <Container sx={{ padding: '30px 20px' }}>
        <Typography variant='h4' gutterBottom>
          Explore Categories
        </Typography>
        <Grid container spacing={3}>
          {['Art', 'Technology', 'Music', 'Film', 'Games', 'Design', 'Photography', 'Writing'].map((category) => (
            <Grid item xs={6} sm={4} md={3} key={category}>
              <Button variant='outlined' fullWidth>
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Statistics Section */}
      <Box sx={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#e0f7fa' }}>
        <Typography variant='h4' gutterBottom>
          Crowdfunding Impact
        </Typography>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5'>10,000+</Typography>
            <Typography variant='body1'>Projects Funded</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5'>0M+</Typography>
            <Typography variant='body1'>Funds Requested</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5'>0M+</Typography>
            <Typography variant='body1'>Pledges Made</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Featured Projects (Carousel Style) */}
      <Container sx={{ padding: '30px 20px' }}>
        <Typography variant='h4' gutterBottom>
          Featured Projects
        </Typography>
        <Carousel>
          {[1, 2, 3].map((project) => (
            <Card key={project} sx={{ display: 'flex', marginBottom: '20px' }}>
              <CardMedia
                component='img'
                sx={{ width: 200 }}
                image='https://via.placeholder.com/200'
                alt='Project Image'
              />
              <CardContent>
                <Typography variant='h6'>Project Title {project}</Typography>
                <Typography variant='body2' color='textSecondary'>
                  A brief description of the project goes here.
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </Container>

      {/* Fresh Favourite Section */}
      <Container sx={{ padding: '30px 20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant='h4' gutterBottom>
          Fresh Favourites
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map((project) => (
            <Grid item xs={12} sm={6} md={3} key={project}>
              <Card>
                <CardMedia
                  component='img'
                  height='140'
                  image='https://via.placeholder.com/300'
                  alt='Project Image'
                />
                <CardContent>
                  <Typography variant='h6'>Project Title {project}</Typography>
                  <Typography variant='body2' color='textSecondary'>
                    Top-voted by the community.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Crowdfunding Tips Section */}
      <Container sx={{ padding: '30px 20px' }}>
        <Typography variant='h4' gutterBottom>
          Crowdfunding Tips
        </Typography>
        <Grid container spacing={3}>
          {[1, 2, 3].map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog}>
              <Card>
                <CardContent>
                  <Typography variant='h6'>Blog Title {blog}</Typography>
                  <Typography variant='body2' color='textSecondary'>
                    A short description of the blog post goes here.
                  </Typography>
                  <Button size='small' color='primary'>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Success Story Section */}
      <Box sx={{ padding: '50px 20px', textAlign: 'center', backgroundColor: '#e8f5e9' }}>
        <Typography variant='h4' gutterBottom>
          Success Stories
        </Typography>
        <Typography variant='body1' color='textSecondary' gutterBottom>
          Hear from creators who turned their ideas into reality.
        </Typography>
        <Grid container spacing={3} justifyContent='center'>
          {[1, 2, 3].map((story) => (
            <Grid item xs={12} sm={4} key={story}>
              <Card>
                <CardMedia
                  component='img'
                  height='140'
                  image='https://via.placeholder.com/300'
                  alt='Success Story Image'
                />
                <CardContent>
                  <Typography variant='h6'>Success Story {story}</Typography>
                  <Typography variant='body2' color='textSecondary'>
                    A brief description of the success story goes here.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
