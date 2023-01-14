import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Section } from '../../components';
import profile from '../data/profile';
import { ThemedProps } from '../../theme';
import { Publication } from '../data/types';

export interface PublicationItemProps {
  publication: Publication;
}

export class PublicationItem extends React.Component<
  ThemedProps & PublicationItemProps
> {
  render() {
    const p = this.props.publication;
    return (
      <Stack direction={'row'} spacing={2}>
        <Stack
          direction={'column'}
          spacing={1}
          alignItems={'center'}
          width={'6em'}
          minWidth={'6em'}
          display={{ xs: 'none', sm: 'flex' }}
        >
          {/* Venue Abbr Column */}
          <Typography variant={'h5'} component={'h5'}>
            {p.year}
          </Typography>
          <Typography variant={'h5'} component={'h5'}>
            {p.venueShort}
          </Typography>
        </Stack>
        <Stack direction={'column'} spacing={1}>
          {/* Publication Detail Column */}
          <Typography variant={'h5'} component={'h5'}>
            {p.title}
          </Typography>
          <Typography variant={'body1'} component={'div'}>
            {p.authors.map((a, i) => (
              <Typography
                key={p.title + a}
                variant={'body1'}
                component={'span'}
              >
                {a === profile.name.formal ? <u>{a}</u> : a}
                {i < p.authors.length - 1 ? ', ' : ''}
              </Typography>
            ))}
          </Typography>
          <Typography variant={'body1'} component={'div'}>
            {p.venue}
          </Typography>
          <Stack direction={'row'} mt={1} spacing={2}>
            {p.projectUrl && (
              <Button
                variant={'outlined'}
                size={'small'}
                href={p.projectUrl}
                target={'_blank'}
              >
                Project
              </Button>
            )}
            {p.paperUrl && (
              <Button
                variant={'outlined'}
                size={'small'}
                href={p.paperUrl}
                target={'_blank'}
              >
                Paper
              </Button>
            )}
            {p.arxivUrl && (
              <Button
                variant={'outlined'}
                size={'small'}
                href={p.arxivUrl}
                target={'_blank'}
              >
                Preprint
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    );
  }
}

export class Publications extends React.Component<ThemedProps> {
  render(): React.ReactElement {
    return (
      <Section
        theme={this.props.theme}
        id={'publications'}
        title={'Publications'}
      >
        <Box
          bgcolor={this.props.theme.palette.background.paper}
          borderRadius={'1em'}
          px={2}
          py={4}
        >
          <Stack direction={'column'} spacing={2}>
            {profile.publications.map((p) => (
              <PublicationItem
                key={p.title}
                theme={this.props.theme}
                publication={p}
              />
            ))}
          </Stack>
        </Box>
      </Section>
    );
  }
}
