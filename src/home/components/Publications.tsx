import React from 'react';
import {Box, Button, Grid, Stack, Theme} from '@mui/material';
import {Section} from '../../components';
import profile from '../data/profile';
import {Title} from './common';

export class Publications extends React.Component {
  render(): React.ReactElement {
    return (
      <Section id={'publications'} title={'Publications'}>
        <Box sx={{
          background: (theme:Theme)=>theme.palette.primary.contrastText,
          boxShadow: '0px 5px 20px 0px rgba(69, 67, 96, 0.1)',
          borderRadius: '20px',
          padding: '20px',
        }}>
          <Stack direction={'column'} spacing={2}>
            {profile.publications.map(p=>(
              <div>
                <Grid container sx={{marginBottom: '10px'}}>
                  <Grid item sm={2}>
                    <Title sx={{textAlign: 'center', overflow: 'hidden'}}>
                      <div>{p.year}</div>
                      <div>{p.venueShort}</div>
                    </Title>
                  </Grid>
                  <Grid item sm>
                    <Title>{p.title}</Title>
                    <Box>
                      {p.authors.map((a, i)=>(
                        <span>
                          {a=== profile.name.formal ? <u>{a}</u>:a}
                          {i < p.authors.length-1 ? ', ':''}
                        </span>
                      ))}
                    </Box>
                    <Box>
                      {p.venue}
                    </Box>
                    <Stack direction={'row'} mt={1} spacing={2}>
                      {p.projectUrl && (<Button variant={'outlined'} size={'small'} href={p.projectUrl}>Project</Button>) }
                      {p.paperUrl && (<Button variant={'outlined'} size={'small'} href={p.paperUrl}>Paper</Button>) }
                    </Stack>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Stack>
        </Box>
      </Section>
    );
  }
}

export default Publications;
