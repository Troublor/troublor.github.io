import React from 'react';
import { ProfileProp } from '../types';
import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material';
import portrait from '../assets/portrait.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Scroller } from './Scroller';
import { Section } from '../data/interface';

export function Portrait({ profile }: ProfileProp): React.ReactElement {
  return (
    <Stack direction={'column'} spacing={2} alignItems={'center'} mb={2}>
      <Box
        component={'img'}
        src={portrait}
        alt="portrait"
        height={'10em'}
        borderRadius={'1em'}
      />
      <Box textAlign={'center'}>
        <Typography variant={'body1'} component={'h5'} fontSize={'1.2em'}>
          {profile.name.first}&nbsp;{profile.name.last}
        </Typography>
        <Typography variant={'body1'} component={'span'}>
          ({profile.name.formal})
        </Typography>
      </Box>
    </Stack>
  );
}

export function SocialLinks({ profile }: ProfileProp): React.ReactElement {
  return (
    <Stack direction={'row'} spacing={2} justifyContent={'space-around'}>
      {profile.socialNetworks.map((s) => (
        <Link key={s.name} href={s.link}>
          <FontAwesomeIcon icon={fab[s.iconName]} size={'2x'} />
        </Link>
      ))}
    </Stack>
  );
}

export function JumpLink({
  section,
}: {
  section: Section;
}): React.ReactElement {
  return (
    <Box>
      <Scroller key={section.title} href={`#${section.title}`} offset={100}>
        <Button
          variant="text"
          color="secondary"
          sx={{
            textTransform: 'none',
            borderRadius: '1em',
            textAlign: 'left',
            justifyContent: 'flex-start',
          }}
        >
          <Typography
            variant="h6"
            component="h6"
            noWrap
            sx={{ fontWeight: 500, textAlign: 'left' }}
          >
            {section.title}
          </Typography>
        </Button>
      </Scroller>
    </Box>
  );
}

export function Sidebar({ profile }: ProfileProp): React.ReactElement {
  return (
    <Box
      bgcolor={'background.paper'}
      padding={'1em'}
      borderRadius={'1em'}
      display={'inline-block'}
    >
      <Stack direction={'column'} spacing={2} alignContent={'center'}>
        <Portrait profile={profile} />
        <SocialLinks profile={profile} />
        <Divider />
        <Stack direction={'column'}>
          <JumpLink section={{ title: 'About' }} />
          {profile.sections.map((s) => (
            <JumpLink key={s.title} section={s} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
