import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type Props = {
  icon: IconProp;
  timestamp: string;
  children: React.ReactNode;
};

export function TimelineItem({
  icon,
  timestamp,
  children,
}: Props): React.ReactElement {
  return (
    <Container sx={{ height: '100%' }}>
      <Stack
        direction={'row'}
        spacing={1}
        alignItems={'stretch'}
        height={'100%'}
      >
        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={0}
        >
          <Box height={'2em'}>
            <FontAwesomeIcon size={'2x'} color={'primary.main'} icon={icon} />
          </Box>
          <Box
            width={'0.2em'}
            height={'100%'}
            bgcolor={'primary.main'}
            borderRadius={'0.1em'}
          />
        </Stack>
        <Stack
          direction={'column'}
          justifyContent={'stretch'}
          spacing={0}
          width={'100%'}
        >
          <Box
            height={'2em'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
          >
            <Typography variant={'h6'} component={'h6'}>
              {timestamp}
            </Typography>
          </Box>
          {children}
        </Stack>
      </Stack>
    </Container>
  );
}
