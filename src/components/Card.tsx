import { Box } from '@mui/material';
import React from 'react';

export function DisplayCard({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Box bgcolor={'background.paper'} padding={'2em'} borderRadius={'1em'}>
      {children}
    </Box>
  );
}
