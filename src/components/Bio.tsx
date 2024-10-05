import React from 'react';
import { GlobalDecorationProp } from '../types';
import { Container, Stack } from '@mui/material';
import { Section } from './Section';
import { decorateTextWithLink } from '../helpers';
import { BioSection } from '../data/interface';
import { DisplayCard } from './Card';
import { Paragraph } from './Paragraph';

export function Bio({
  bio,
  decoration,
}: { bio: BioSection } & GlobalDecorationProp): React.ReactElement {
  return (
    <Container>
      <Section id="Bio" title="Bio">
        <DisplayCard>
          <Stack direction={'column'} spacing={2}>
            {bio.content.map((c) => (
              <Paragraph key={c}>
                {decorateTextWithLink(c, decoration)}
              </Paragraph>
            ))}
          </Stack>
        </DisplayCard>
      </Section>
    </Container>
  );
}
