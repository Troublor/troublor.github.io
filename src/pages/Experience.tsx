import React from 'react';
import { ExperienceProp, MiscDataProp, ProfileProp } from '../types';
import { Section } from '../components/Section';
import { Header } from '../components/Header';
import { Box, Container, Stack } from '@mui/material';
import { ExperienceItem } from '../components/ExperienceItem';
import { DisplayCard } from '../components/Card';
import { Footer } from '../components/Footer';

export function Experience({
  experience,
  profile,
  miscData,
}: ProfileProp & ExperienceProp & MiscDataProp): React.ReactElement {
  return (
    <>
      <Header profile={profile} />
      <Container>
        <Box paddingTop={12} />
        <Section id="experience" title="Experience">
          <DisplayCard>
            <Stack direction={'column'} spacing={2}>
              {experience
                .sort((a, b) => b.start[0] - a.start[0])
                .map((e) => (
                  <ExperienceItem
                    key={e.institute + e.position}
                    experience={e}
                  />
                ))}
            </Stack>
          </DisplayCard>
        </Section>
      </Container>
      <Footer profile={profile} miscData={miscData} />
    </>
  );
}
