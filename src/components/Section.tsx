import React from 'react';
import { Box, Typography } from '@mui/material';
import dotsSvg from '../assets/dots-bg.svg';

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function Section({ id, title, children }: Props): React.ReactElement {
  return (
    <Box component="section" id={id} my={1}>
      <Box position={'relative'} mb={1}>
        <Box
          component={'img'}
          src={dotsSvg}
          zIndex={-1}
          position={'absolute'}
          left="-1em"
          top="-1em"
        />
        <Typography variant="h2" component="h2" color={'text.primary'}>
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );
}
