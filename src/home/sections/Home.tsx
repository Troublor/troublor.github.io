import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextLoop from 'react-text-loop';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import profile from '../data/profile';
import portrait2 from '../img/portrait2.png';
import { Stack, Avatar, Box, Link, Typography, Button } from '@mui/material';
import { ThemedProps } from '../../theme';
import { Scroller } from '../../components';

export class Home extends React.Component<ThemedProps> {
  private centerBoxSX = {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: this.props.theme.typography.fontFamily,
    color: this.props.theme.palette.primary.contrastText,
  };

  render(): React.ReactElement {
    return (
      <Box
        id={'home'}
        component="section"
        sx={{
          bgcolor: 'primary.main',
          height: '100vh',
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            zIndex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            height: '100%',
            justifyContent: 'center',
            color: this.props.theme.palette.primary.contrastText,
          }}
        >
          <Box sx={this.centerBoxSX}>
            <Avatar src={portrait2} sx={{ width: 150, height: 150 }} />
          </Box>
          <Box sx={this.centerBoxSX}>
            <Typography variant="h4" noWrap component="h4">
              {profile.name.first}
              <Typography
                variant="h4"
                component="span"
                noWrap
                sx={{ color: this.props.theme.palette.warning.main }}
              >
                {profile.name.middle}
              </Typography>
              {profile.name.last}
            </Typography>
          </Box>
          <Box sx={this.centerBoxSX}>
            <Typography variant="body2" component="span" noWrap>
              A.K.A.
            </Typography>
          </Box>
          <Box sx={{ ...this.centerBoxSX, my: '0 !important' }}>
            <Typography variant="h6" component="h6" noWrap>
              Wuqi Aaron Zhang, 张无奇
            </Typography>
          </Box>
          <Box sx={this.centerBoxSX}>
            I&apos;m a&nbsp;
            <TextLoop
              springConfig={{ stiffness: 180, damping: 10 }}
              interval={2000}
            >
              {profile.titles.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </TextLoop>
          </Box>
          <Box sx={this.centerBoxSX}>
            {profile.socialNetworks.map((network) => (
              <Link
                key={network.iconName}
                href={network.link}
                underline="none"
                target="_blank"
                rel="noopener noreferrer"
                color={this.props.theme.palette.primary.contrastText}
                sx={{ mx: 1 }}
              >
                <FontAwesomeIcon size={'2x'} icon={fab[network.iconName]} />
              </Link>
            ))}
          </Box>
          <Box sx={this.centerBoxSX}>
            <Scroller key={'contact-btn'} href={'#contact'} offset={100}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ textTransform: 'none', borderRadius: 6 }}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  noWrap
                  sx={{ fontWeight: 700 }}
                >
                  Contact Me
                </Typography>
              </Button>
            </Scroller>
          </Box>
        </Stack>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            height: '100%',
            justifyContent: 'end',
            color: this.props.theme.palette.primary.contrastText,
          }}
        >
          <Box sx={this.centerBoxSX}>
            <Typography variant={'body2'} component={'span'}>
              Scroll Down
            </Typography>
          </Box>
          <Box sx={{ ...this.centerBoxSX }}>
            <FontAwesomeIcon size={'1x'} icon={fas['faMouse']} />
          </Box>
          <Box sx={{ ...this.centerBoxSX }}>
            <FontAwesomeIcon size={'1x'} icon={fas['faArrowDown']} />
          </Box>
        </Stack>
      </Box>
    );
  }
}

export default Home;
