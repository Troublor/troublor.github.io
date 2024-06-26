import React from 'react';
import {
  About,
  Awards,
  Contact,
  Education,
  Footer,
  Header,
  Home,
  Publications,
  ResearchExperience,
  WorkExperience,
  Teaching,
  Service,
} from './sections/index';

import './index.css';
import { defaultTheme } from '../theme';
import { Box, Container, Grid, Stack, ThemeProvider } from '@mui/material';
import { ScrollTopArrow } from '../components';

function Index(): React.ReactElement {
  document.body.style.backgroundColor = defaultTheme.palette.background.default;
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header theme={defaultTheme} />
        <Home theme={defaultTheme} />
        <Container>
          <Stack
            direction="column"
            py={3}
            color={defaultTheme.palette.text.primary}
          >
            <About theme={defaultTheme} />
            <Education theme={defaultTheme} />
            <Publications theme={defaultTheme} />
            <Awards theme={defaultTheme} />
            <Box component="section">
              <Grid container columnSpacing={2}>
                <Grid item md={6} width={'100%'}>
                  <ResearchExperience theme={defaultTheme} />
                </Grid>
                <Grid item md={6} width={'100%'}>
                  <WorkExperience theme={defaultTheme} />
                </Grid>
              </Grid>
            </Box>
            <Box component="section">
              <Grid container columnSpacing={2}>
                <Grid item md={6} width={'100%'}>
                  <Teaching theme={defaultTheme} />
                </Grid>
                <Grid item md={6} width={'100%'}>
                  <Service theme={defaultTheme} />
                </Grid>
              </Grid>
            </Box>
            <Contact theme={defaultTheme} />
          </Stack>
        </Container>
        <Footer theme={defaultTheme} />
        <ScrollTopArrow theme={defaultTheme} />
      </ThemeProvider>
    </>
  );
}

export default Index;
