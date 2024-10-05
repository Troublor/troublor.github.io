import React from 'react';
import { GlobalDecorationProp } from '../types';
import { Publication } from '../data/interface';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { decorateTextWithLink } from '../helpers';
import { Paragraph } from './Paragraph';

export type Props = {
  publication: Publication;
};

export function TextBox({
  text,
  open,
}: {
  text: string;
  open: boolean;
}): React.ReactElement {
  return (
    <Box
      sx={{
        marginTop: '0 !important',
        overflow: 'hidden',
        maxHeight: open ? '1000px' : '0 !important',
        transition: `max-height 0.5s ${open ? 'ease-in' : 'ease-out'}`,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          marginTop: '0.5em',
          border: '2px solid',
          borderColor: 'text.secondary',
          borderRadius: '0 1em',
          padding: '1em',
        }}
      >
        <Paragraph>{text}</Paragraph>
      </Paper>
    </Box>
  );
}

export function PublicationItem({
  publication,
  decoration,
}: GlobalDecorationProp & Props): React.ReactElement {
  const [open, setOpen] = React.useState(false);

  function toggleAbstract() {
    setOpen(!open);
  }

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
        {publication.type === 'journal' ? (
          <FontAwesomeIcon icon={fas['faBook']} size={'2x'} />
        ) : publication.type === 'conference' ? (
          <FontAwesomeIcon icon={fab['faConfluence']} size={'2x'} />
        ) : publication.type === 'preprint' ? (
          <FontAwesomeIcon icon={fas['faFileAlt']} size={'2x'} />
        ) : (
          <div />
        )}
        <Typography variant={'h5'} component={'h5'}>
          {publication.date[0]}
        </Typography>
        <Typography variant={'h5'} component={'h5'}>
          {publication.venueShort}
        </Typography>
      </Stack>
      <Stack direction={'column'} spacing={1}>
        {/* Publication Detail Column */}
        <Typography variant={'h5'} component={'h5'}>
          {publication.title}
        </Typography>
        <Typography variant={'body1'} component={'div'}>
          {publication.authors.map((a, i) => (
            <Typography
              key={publication.title + a}
              variant={'body1'}
              component={'span'}
            >
              {decorateTextWithLink(a, decoration)}
              {i < publication.authors.length - 1 ? ', ' : ''}
            </Typography>
          ))}
        </Typography>
        <Typography variant={'body1'} component={'div'}>
          {publication.venue}
        </Typography>
        <Stack direction={'row'} mt={1} spacing={2}>
          {publication.abstract && (
            <Button
              variant={open ? 'contained' : 'outlined'}
              size={'small'}
              onClick={toggleAbstract}
            >
              Abstract
            </Button>
          )}
          {publication.paperUrl && (
            <Button
              variant={'outlined'}
              size={'small'}
              href={publication.paperUrl}
              target={'_blank'}
            >
              Paper
            </Button>
          )}
          {publication.arxivUrl && (
            <Button
              variant={'outlined'}
              size={'small'}
              href={publication.arxivUrl}
              target={'_blank'}
            >
              Preprint
            </Button>
          )}
          {publication.projectUrl && (
            <Button
              variant={'outlined'}
              size={'small'}
              href={publication.projectUrl}
              target={'_blank'}
            >
              Project
            </Button>
          )}
        </Stack>
        {publication.abstract && (
          <TextBox open={open} text={publication.abstract} />
        )}
      </Stack>
    </Stack>
  );
}
