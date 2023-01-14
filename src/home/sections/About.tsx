import React from 'react';
import { Section } from '../../components';
import profile from '../data/profile';
import portrait from '../img/portrait.jpg';
import avatar from '../img/avatar.jpg';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import { ThemedProps } from '../../theme.js';

export class About extends React.Component<ThemedProps, unknown> {
  render() {
    return (
      <Section theme={this.props.theme} id="about" title="About Me">
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={2}
          justifyContent={'center'}
        >
          <Stack direction={'column'} spacing={2} alignItems={'center'}>
            <Box
              component={'img'}
              src={avatar}
              alt="avatar"
              height={'10em'}
              borderRadius={'1em'}
            />
            <Typography variant={'h6'} component={'h6'}>
              {profile.username}
            </Typography>
          </Stack>
          <Stack
            direction={'column'}
            spacing={2}
            alignContent={'stretch'}
            bgcolor={this.props.theme?.palette.background.paper}
            p={2}
            borderRadius={'1em'}
          >
            <Typography
              variant={'body1'}
              component={'div'}
              sx={{ textAlign: 'justify' }}
            >
              {profile.description}
            </Typography>
            <Box>
              <Button
                variant={'contained'}
                color={'secondary'}
                sx={{
                  borderRadius: '2em',
                }}
              >
                <Link
                  href={profile.resume}
                  target={'_blank'}
                  underline={'none'}
                  color={this.props.theme.palette.secondary.contrastText}
                >
                  Check My CV
                </Link>
              </Button>
            </Box>
          </Stack>
          <Stack direction={'column'} spacing={2} alignItems={'center'}>
            <Box
              component={'img'}
              src={portrait}
              alt="portrait"
              height={'10em'}
              borderRadius={'1em'}
            />
            <Typography variant={'h6'} component={'h6'}>
              {profile.name.initials}
            </Typography>
          </Stack>
        </Stack>
      </Section>
    );
  }
}

export default About;
