import React from 'react';
import {
  About,
  Contact,
  Education,
  Footer,
  Header,
  Home,
  Publications,
  ResearchExperience,
  WorkExperience,
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
            spacing={6}
            sx={{ my: 3 }}
            py={3}
            color={defaultTheme.palette.text.primary}
          >
            <About theme={defaultTheme} />
            <Education theme={defaultTheme} />
            <Publications theme={defaultTheme} />
            <Box component="section">
              <Grid container columnSpacing={2}>
                <Grid item md={6}>
                  <ResearchExperience theme={defaultTheme} />
                </Grid>
                <Grid item md={6}>
                  <WorkExperience theme={defaultTheme} />
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
