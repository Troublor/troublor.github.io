import React from 'react';
import {
  GlobalDecorationProp,
  MiscDataProp,
  ProfileProp,
  PublicationsProp,
} from '../types';
import { Header } from '../components/Header';
import { Section } from '../components/Section';
import { Box, Container, Stack } from '@mui/material';
import { PublicationItem } from '../components/PublicationItem';
import { Footer } from '../components/Footer';

export function Publications({
  publications,
  profile,
  decoration,
  miscData,
}: PublicationsProp &
  ProfileProp &
  GlobalDecorationProp &
  MiscDataProp): React.ReactElement {
  return (
    <>
      <Header profile={profile} />
      <Container>
        <Box paddingTop={12} />
        <Section id="Publications" title="Publications">
          <Box bgcolor={'background.paper'} borderRadius={'1em'} px={2} py={4}>
            <Stack direction={'column'} spacing={2}>
              {publications
                .sort(
                  (a, b) =>
                    b.date[0] * 12 + b.date[1] - a.date[0] * 12 - a.date[1],
                )
                .map((p) => (
                  <PublicationItem
                    decoration={decoration}
                    key={p.title}
                    publication={p}
                  />
                ))}
            </Stack>
          </Box>
        </Section>
      </Container>
      <Footer profile={profile} miscData={miscData} />
    </>
  );
}
