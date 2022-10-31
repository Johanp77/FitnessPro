import { Box, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';



const Root = styled('div')(({ theme }) => ({
  // padding: theme.spacing(1),
  [theme.breakpoints.down('xs')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {

  },
  [theme.breakpoints.up('lg')]: {

  },
}));


const Footer = () => {
  return (
    <footer>
      <Box sx={{position : 'static'}}>
        <Container maxWidth="auto" sx={{ backgroundColor: '#181717' }}>
          {/* <Root> */}

          <Grid container spacing={1} sx={{padding: '2rem 0 2rem 0'}}>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
              <Box sx={{ color: 'black', display: 'flex', justifyContent: 'center', }}>
                <Logo />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Typography variant="p" color="white" >
                ©2022 FitnessPro.
              </Typography>
              <Typography variant="p" color="white" sx={{ fontStyle: 'light ' }}>
                Proyecto construido con React.js.
              </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <a href="https://github.com/Johanp77" target='_blank' rel="noreferrer">
                  <GitHubIcon color="primary" />
                </a>
              </Box>
            </Grid>
          </Grid>

          {/* </Root> */}

        </Container>
      </Box>
    </footer>
  )
}

/*

              <Grid item xs={12} sm={12} md={12}>
                <Box sx={{ color: 'black', display: 'flex', justifyContent: 'center' }}>
                  <Logo />
                </Box>
              </Grid>

              <Grid item xs={12} sm={11} md={10}>
                <Typography variant="p" color="white" >
                  ©2022 FitnessPro.
                </Typography>
                <Typography variant="p" color="white" sx={{ display: 'flex' }}>
                  Proyecto de entrenamiento construido con React.js.
                </Typography>

              </Grid>
              <Grid item xs={12} sm={1} md={2}>
                <a href="https://github.com/Johanp77" target='_blank' rel="noreferrer">
                  <GitHubIcon color="primary" />
                </a>
              </Grid>
              <Grid item xs={12} sm={12} md={12} sx={{ paddingTop: '0 !important' }} >

              </Grid>
*/

export default Footer