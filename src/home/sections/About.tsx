import React from 'react';
import { Section } from '../../components';
import profile from '../data/profile';
import portrait from '../img/portrait.jpg';
import avatar from '../img/avatar.jpg';
import {
  Box,
  Button,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import { ThemedProps } from '../../theme.js';
import miscData from '../data/misc-data';
import reactStringReplace from 'react-string-replace';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

function Description(): React.ReactElement {
  // noinspection JSDeprecatedSymbols
  let replacedText: string | React.ReactNodeArray = profile.description;
  for (const [key, value] of Object.entries(miscData.homepages)) {
    const regex = new RegExp(key, 'g');
    replacedText = reactStringReplace(replacedText, regex, (rest, i) => {
      return (
        <span key={'desp' + key + i}>
          <Link href={value} target={'_blank'}>
            {key}
          </Link>
          {rest}
        </span>
      );
    });
  }
  const regex = new RegExp(profile.name.formal, 'g');
  replacedText = reactStringReplace(replacedText, regex, (rest, i) => (
    <span key={'desp-name' + i}>
      <u>{profile.name.formal}</u>
      {rest}
    </span>
  ));
  return <>{replacedText}</>;
}

function SelfIntro(props: ThemedProps): React.ReactElement {
  return (
    <Stack
      direction={'column'}
      spacing={2}
      alignContent={'stretch'}
      bgcolor={props.theme?.palette.background.paper}
      p={2}
      mb={2}
      borderRadius={'1em'}
    >
      <Typography
        variant={'body1'}
        component={'div'}
        sx={{ textAlign: 'justify' }}
      >
        <Description />
      </Typography>
      <Typography variant={'body1'} component={'div'}>
        <Typography variant={'h6'} component={'span'}>
          Research Interest:
        </Typography>
        &nbsp;
        <List disablePadding dense>
          {profile.researchInterests.map((interest) => (
            <ListItem key={interest} disablePadding disableGutters dense>
              <ListItemIcon>
                <FontAwesomeIcon icon={fas['faStar']} />
              </ListItemIcon>
              <ListItemText primary={interest} />
            </ListItem>
          ))}
        </List>
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
            color={props.theme.palette.secondary.contrastText}
          >
            Check My CV
          </Link>
        </Button>
      </Box>
    </Stack>
  );
}

function Protrait(): React.ReactElement {
  return (
    <Stack direction={'column'} spacing={2} alignItems={'center'} mb={2}>
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
  );
}

function Avatar(): React.ReactElement {
  return (
    <Stack direction={'column'} spacing={2} alignItems={'center'} mb={2}>
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
  );
}

export interface AboutState {
  layout: 'narrow' | 'wide';
}

export class About extends React.Component<ThemedProps, AboutState> {
  constructor(props: ThemedProps) {
    super(props);
    this.state = {
      layout:
        window.innerWidth < this.props.theme.breakpoints.values.md
          ? 'narrow'
          : 'wide',
    };
  }

  componentDidMount(): void {
    window
      .matchMedia(
        this.props.theme.breakpoints.down('md').replace('@media ', ''),
      )
      .addEventListener('change', (e) => {
        if (e.matches) {
          this.setState({ layout: 'narrow' });
        } else {
          this.setState({ layout: 'wide' });
        }
      });
  }

  render() {
    return (
      <Section theme={this.props.theme} id="about" title="About Me">
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={2}
          justifyContent={'center'}
        >
          {this.state.layout === 'narrow' ? (
            <>
              <Stack justifyContent={'center'} direction={'row'} spacing={2}>
                <Avatar />
                <Protrait />
              </Stack>
              <SelfIntro theme={this.props.theme} />
            </>
          ) : (
            <>
              <Avatar />
              <SelfIntro theme={this.props.theme} />
              <Protrait />
            </>
          )}
        </Stack>
      </Section>
    );
  }
}

export default About;
