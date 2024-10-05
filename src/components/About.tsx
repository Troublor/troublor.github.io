import React from 'react';
import { GlobalDecorationProp, ProfileProp } from '../types';
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { decorateTextWithLink } from '../helpers';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { DisplayCard } from './Card';
import { MyLink } from './Link';
import { SocialLinks } from './Sidebar';

export function LinkButton({
  text,
  link,
}: {
  text: string;
  link: string;
}): React.ReactElement {
  return (
    <Link to={link}>
      <Button
        variant="text"
        color="secondary"
        sx={{ textTransform: 'none', borderRadius: '1em' }}
      >
        <Typography variant="h6" component="h6" noWrap sx={{ fontWeight: 500 }}>
          {text}
        </Typography>
      </Button>
    </Link>
  );
}

export function EmailLink({
  kind,
  email,
}: {
  kind: string;
  email: string;
}): React.ReactElement {
  return (
    <Typography variant="body1" component="p" noWrap>
      <FontAwesomeIcon icon={far['faPaperPlane']} />
      &nbsp;
      {kind}:&nbsp;
      <MyLink text={email} href={`mailto:${email}`} noDecoration={true} />
    </Typography>
  );
}

export function About({
  profile,
  decoration,
}: ProfileProp & GlobalDecorationProp): React.ReactElement {
  return (
    <Container id="About">
      <DisplayCard>
        <Typography variant="h4" component="span">
          {profile.name.first} {profile.name.middle} {profile.name.last}
        </Typography>
        &nbsp;
        <Typography variant="body1" component="span" gutterBottom>
          ({profile.name.formal}, {profile.name.chinese})
        </Typography>
        <Box paddingTop={'2em'} />
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          spacing={2}
          justifyContent={'space-between'}
        >
          <Box>
            {profile.occupations.map((o) => (
              <Typography key={o.title} variant="body1" component={'p'}>
                {o.title} @ {decorateTextWithLink(o.institute, decoration)}
              </Typography>
            ))}
          </Box>
          <Box>
            <EmailLink kind="Work" email={profile.emails.work} />
            <EmailLink kind="Academic" email={profile.emails.academic} />
            <EmailLink kind="Personal" email={profile.emails.personal} />
          </Box>
        </Stack>
        <Box paddingTop={'1em'} />
        <Divider />
        <Box paddingTop={'0.5em'} />
        <LinkButton text={'Curriculum Vitae'} link={profile.resume} />
        <LinkButton text={'GitHub'} link={profile.github} />
        <LinkButton text={'Google Scholar'} link={profile.googleScholar} />
        <LinkButton text={'DBLP'} link={profile.dblp} />
        <Box display={{ xs: 'block', sm: 'none' }} paddingTop={'1em'}>
          <SocialLinks profile={profile} />
        </Box>
      </DisplayCard>
    </Container>
  );
}
