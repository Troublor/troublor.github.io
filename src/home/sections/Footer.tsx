import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Theme,
  Typography,
} from '@mui/material';
import React from 'react';
import profile from '../data/profile';
import packageJson from '../../../package.json';
import { ThemedProps } from '../../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import miscData from '../data/misc-data';

export class Footer extends React.Component<ThemedProps> {
  render() {
    const quote =
      miscData.quotes[new Date().getTime() % miscData.quotes.length];
    return (
      <Box component={'footer'} bgcolor={this.props.theme.palette.primary.main}>
        <Container>
          <Grid container spacing={2}>
            <Grid item sm={4} width={'100%'}>
              <Stack
                direction={'column'}
                mt={2}
                mb={4}
                sx={{
                  color: this.props.theme.palette.text.secondary,
                }}
              >
                <Typography variant={'h6'}>Page Information</Typography>
                <Divider
                  color={this.props.theme.palette.text.secondary}
                  sx={{ my: 1 }}
                />
                <Typography variant={'body2'}>
                  Copyright © {new Date().getFullYear()} {profile.name.formal}.
                  All rights reserved.
                </Typography>
                <Typography variant={'body2'}>{profile.domain}</Typography>
                <Typography variant={'body2'}>
                  {`v${packageJson.version} - ${process.env.REACT_APP_GIT_SHA}`}
                </Typography>
                <Link
                  href={packageJson.repository}
                  underline={'none'}
                  target={'_blank'}
                >
                  <Typography
                    variant={'body2'}
                    component={'span'}
                    color={this.props.theme.palette.text.secondary}
                  >
                    Source Code on GitHub &nbsp;
                    <FontAwesomeIcon icon={fas['faExternalLinkAlt']} />
                  </Typography>
                </Link>
              </Stack>
            </Grid>
            <Grid item sm={4} width={'100%'}>
              <Stack
                direction={'column'}
                mt={2}
                mb={4}
                sx={{
                  color: (theme: Theme) => theme.palette.text.secondary,
                }}
              >
                <Typography variant={'h6'}>Acknowledge</Typography>
                <Divider
                  color={this.props.theme.palette.text.secondary}
                  sx={{ my: 1 }}
                />
                <Typography variant={'body2'}>
                  This website is built with
                </Typography>
                {miscData.technologies.map((tech) => (
                  <Link
                    key={tech.name}
                    href={tech.url}
                    underline={'none'}
                    target={'_blank'}
                  >
                    <Typography
                      variant={'body2'}
                      color={this.props.theme.palette.text.secondary}
                    >
                      {tech.name} &nbsp;
                      <FontAwesomeIcon icon={fas['faExternalLinkAlt']} />
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item sm={4} width={'100%'}>
              <Stack
                direction={'column'}
                mt={2}
                mb={4}
                sx={{
                  color: (theme: Theme) => theme.palette.text.secondary,
                }}
              >
                <Typography variant={'h6'}>Cheers</Typography>
                <Divider
                  color={this.props.theme.palette.text.secondary}
                  sx={{ my: 1 }}
                />
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  }
}
