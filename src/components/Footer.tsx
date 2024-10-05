import React from 'react';
import { MiscDataProp, ProfileProp } from '../types';
import {
  Box,
  Container,
  Divider,
  Grid2,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

export function Footer({
  miscData,
  profile,
}: MiscDataProp & ProfileProp): React.ReactElement {
  const quote = miscData.quotes[new Date().getTime() % miscData.quotes.length];
  return (
    <Box component={'footer'} bgcolor={'primary.main'} marginTop={'2em'}>
      <Container>
        <Grid2 container spacing={2}>
          <Grid2 size={{ sm: 4 }} width={'100%'}>
            <Stack
              direction={'column'}
              mt={2}
              mb={4}
              sx={{
                color: 'primary.contrastText',
              }}
            >
              <Typography variant={'h6'}>Page Information</Typography>
              <Divider sx={{ my: 1, bgcolor: 'primary.contrastText' }} />
              <Typography variant={'body2'}>
                Copyright © {new Date().getFullYear()} {profile.name.formal}.
                All rights reserved.
              </Typography>
              <Typography variant={'body2'}>
                {`Version: ${process.env.REACT_APP_GIT_SHA}`}
              </Typography>
              {process.env.REACT_APP_BUILD_TIME ? (
                <Typography variant={'body2'}>
                  Built at {process.env.REACT_APP_BUILD_TIME}
                </Typography>
              ) : (
                <div />
              )}
            </Stack>
          </Grid2>
          <Grid2 size={{ sm: 4 }} width={'100%'}>
            <Stack
              direction={'column'}
              mt={2}
              mb={4}
              sx={{
                color: 'primary.contrastText',
              }}
            >
              <Typography variant={'h6'}>Acknowledge</Typography>
              <Divider sx={{ my: 1, bgcolor: 'primary.contrastText' }} />
              <Typography variant={'body2'}>
                This website is built <i>by hand with love</i> using:
              </Typography>
              {miscData.technologies.map((tech) => (
                <Link
                  key={tech.name}
                  href={tech.url}
                  underline={'none'}
                  target={'_blank'}
                >
                  <Typography variant={'body2'} color={'primary.contrastText'}>
                    {tech.name} &nbsp;
                    <FontAwesomeIcon icon={fas['faExternalLinkAlt']} />
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Grid2>
          <Grid2 size={{ sm: 4 }} width={'100%'}>
            <Stack
              direction={'column'}
              mt={2}
              mb={4}
              sx={{
                color: 'primary.contrastText',
              }}
            >
              <Typography variant={'h6'}>Cheers</Typography>
              <Divider sx={{ my: 1, bgcolor: 'primary.contrastText' }} />
              <Typography variant={'body2'}>
                {quote.sentence}
                {' - '}
                <Typography
                  variant={'body2'}
                  component={'span'}
                  fontStyle={'italic'}
                >
                  {quote.origin}
                </Typography>
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
