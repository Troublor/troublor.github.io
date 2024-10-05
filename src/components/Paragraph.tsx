import { Typography } from '@mui/material';
import React from 'react';

export function Paragraph({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Typography
      variant="body1"
      component="p"
      color={'text.primary'}
      textAlign={'justify'}
      marginBottom={'1em'}
    >
      {children}
    </Typography>
  );
}
