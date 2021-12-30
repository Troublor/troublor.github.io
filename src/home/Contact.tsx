import React from 'react';
import {Section} from '../components';
import {Container, Grid, Link, Stack, Typography} from '@mui/material';
import profile from './data/profile';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export class Contact extends React.Component {
  render() {
    return (
      <Section id="contact" title="Get In Touch">
        <div className="contact-info">
          <Container>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6}>
                <Stack direction={'row'}>
                  <FontAwesomeIcon icon={['fas', 'envelope']}/>
                  <Typography ml={1} variant="h6" gutterBottom>Email</Typography>
                </Stack>
                <Stack direction={'row'}>
                  <Typography variant={'body1'}>Work:&nbsp;</Typography>
                  <Link href={'mailto:' + profile.emails.work} underline={'none'}>{profile.emails.work}</Link>
                </Stack>
                <Stack direction={'row'}>
                  <Typography variant={'body1'}>Personal:&nbsp;</Typography>
                  <Link href={'mailto:' + profile.emails.personal} underline={'none'}>{profile.emails.personal}</Link>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack direction={'row'}>
                  <FontAwesomeIcon icon={['fas', 'map-marked-alt']}/>
                  <Typography ml={1} variant="h6" gutterBottom>Address</Typography>
                </Stack>
                <Stack direction={'column'}>
                  {profile.address.map(line=>(
                    <Typography variant={'body1'}>{line}</Typography>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </div>

      </Section>
    );
  }
}

export default Contact;
