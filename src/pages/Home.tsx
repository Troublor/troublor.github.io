import React from 'react';
import { Header } from '../components/Header';
import { GlobalDecorationProp, MiscDataProp, ProfileProp } from '../types';
import { Sidebar } from '../components/Sidebar';
import { Box, Container, Stack } from '@mui/material';
import { About } from '../components/About';
import { Bio } from '../components/Bio';
import { News } from '../components/News';
import { Research } from '../components/Research';
import { Service } from '../components/Service';
import { Impacts } from '../components/Impacts';
import { Footer } from '../components/Footer';

export function Home({
  profile,
  decoration: globalDecoration,
  miscData,
}: ProfileProp & GlobalDecorationProp & MiscDataProp): React.ReactElement {
  return (
    <>
      <Header profile={profile} />
      <Container>
        <Stack
          direction={{
            xs: 'column',
            sm: 'row',
          }}
          spacing={'1em'}
          alignItems={'stretch'}
        >
          <Box display={{ xs: 'none', sm: 'block' }}>
            <Box position={'sticky'} top={0}>
              <Box paddingTop={12} />
              <Sidebar profile={profile} />
            </Box>
          </Box>
          <Box>
            <Box paddingTop={12} />
            <Stack direction={'column'} spacing={2} width={'100%'}>
              <About decoration={globalDecoration} profile={profile} />
              <News decoration={globalDecoration} news={profile.sections[1]} />
              <Bio decoration={globalDecoration} bio={profile.sections[0]} />
              <Research
                decoration={globalDecoration}
                research={profile.sections[2]}
              />
              <Service service={profile.sections[3]} />
              <Impacts
                decoration={globalDecoration}
                impacts={profile.sections[4]}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Footer profile={profile} miscData={miscData} />
    </>
  );
}
