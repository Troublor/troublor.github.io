import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ResearchSection, Research as ResearchType } from '../data/interface';
import { GlobalDecorationProp } from '../types';
import React from 'react';
import { Section } from './Section';
import { decorateTextWithLink, mergeDecoration } from '../helpers';
import { Link } from 'react-router-dom';
import { DisplayCard } from './Card';
import { Paragraph } from './Paragraph';

export function ResearchDirection({
  research,
  decoration,
}: {
  research: ResearchType;
} & GlobalDecorationProp): React.ReactElement {
  return (
    <Box>
      <Typography variant="h5" component="h5">
        {research.direction}
      </Typography>
      <Stack direction={'column'} spacing={1} marginTop={1}>
        {research.description.map((d) => (
          <Paragraph key={d}>
            {decorateTextWithLink(
              d,
              mergeDecoration(decoration, research.decoration),
            )}
          </Paragraph>
        ))}
      </Stack>
    </Box>
  );
}

export function Research({
  research,
  decoration,
}: {
  research: ResearchSection;
} & GlobalDecorationProp): React.ReactElement {
  return (
    <Container>
      <Section id="Research" title="Research">
        <DisplayCard>
          <Stack direction={'column'} spacing={2}>
            <Stack direction={'column'} spacing={1} marginBottom={2}>
              {research.overview.map((r) => (
                <Paragraph key={r}>{r}</Paragraph>
              ))}
            </Stack>
            <Stack direction={'column'} spacing={2}>
              {research.research.map((r) => (
                <ResearchDirection
                  decoration={decoration}
                  key={r.direction}
                  research={r}
                />
              ))}
            </Stack>
            <Box>
              <Link to={'/publications#Publications'} target={'_self'}>
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
                    Full Publication List
                  </Typography>
                </Button>
              </Link>
            </Box>
          </Stack>
        </DisplayCard>
      </Section>
    </Container>
  );
}
