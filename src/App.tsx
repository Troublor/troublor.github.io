import React from 'react';
import { Header, Home, Footer, About, Education, WorkExperience, Contact } from './home';
import ScrollTopArrow from './components/ScrollTopArrow';

import './components/Icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
import ResearchExperience from './home/ResearchExperience';
import {defaultTheme} from './theme';
import {Container, Grid, ThemeProvider} from '@mui/material';
import Publications from './home/Publications';

function App (): React.ReactElement {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <main>
          <Home />
          <Container>
            <About />
            <Education />
            <Publications/>
            <Grid container>
              <Grid item md={6}>
                <ResearchExperience />
              </Grid>
              <Grid md={6}>
                <WorkExperience />
              </Grid>
            </Grid>
          </Container>
          {/*<Services />*/}
          {/*<Review />*/}
          {/*<Tools />*/}
          <Contact />
        </main>
        <Footer />
        <ScrollTopArrow />
      </ThemeProvider>
    </>
  );
}

export default App;
