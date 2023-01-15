import React from 'react';
import { Section } from '../../components';
import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material';
import profile from '../data/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemedProps } from '../../theme';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export class Contact extends React.Component<ThemedProps> {
  render() {
    return (
      <Section theme={this.props.theme} id="contact" title="Get In Touch">
        <Box
          bgcolor={this.props.theme.palette.background.paper}
          borderRadius={'1em'}
          px={2}
          py={4}
        >
          <Container>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={6} md={4}>
                <Stack direction={'row'}>
                  <FontAwesomeIcon icon={fas['faEnvelope']} />
                  <Typography ml={1} variant="h5" gutterBottom>
                    Email
                  </Typography>
                </Stack>
                <Stack direction={'row'}>
                  <Typography variant={'body1'}>Work:&nbsp;</Typography>
                  <Link
                    href={'mailto:' + profile.emails.work}
                    underline={'none'}
                  >
                    <Typography variant={'body1'}>
                      {profile.emails.work}
                    </Typography>
                  </Link>
                </Stack>
                <Stack direction={'row'}>
                  <Typography variant={'body1'}>Personal:&nbsp;</Typography>
                  <Link
                    href={'mailto:' + profile.emails.personal}
                    underline={'none'}
                  >
                    <Typography variant={'body1'}>
                      {profile.emails.personal}
                    </Typography>
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Stack direction={'row'}>
                  <FontAwesomeIcon icon={fas['faMapMarkedAlt']} />
                  <Typography ml={1} variant="h5" gutterBottom>
                    Address
                  </Typography>
                </Stack>
                <Stack direction={'column'}>
                  {profile.address.map((line) => (
                    <Typography key={line} variant={'body1'}>
                      {line}
                    </Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Stack direction={'row'}>
                  <FontAwesomeIcon icon={fas['faShareAlt']} />
                  <Typography ml={1} variant="h5" gutterBottom>
                    Social Media
                  </Typography>
                </Stack>
                <Stack
                  direction={'row'}
                  spacing={2}
                  fontFamily={this.props.theme.typography.fontFamily}
                  color={this.props.theme.palette.primary.main}
                >
                  {profile.socialNetworks.map((network) => (
                    <Link
                      key={network.iconName}
                      href={network.link}
                      underline="none"
                      target="_blank"
                      rel="noopener noreferrer"
                      color={'inherit'}
                      sx={{ mx: 0 }}
                    >
                      <FontAwesomeIcon
                        size={'2x'}
                        icon={fab[network.iconName]}
                      />
                    </Link>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Section>
    );
  }
}
