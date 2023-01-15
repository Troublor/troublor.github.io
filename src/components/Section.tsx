import React from 'react';
import { Box, Typography } from '@mui/material';
import { ThemedProps } from '../theme';
import dotsSvg from '../img/dots-bg.svg';

interface Props {
  id: string;
  title: string;
  children: React.ReactNode;
}

export class Section extends React.Component<Partial<ThemedProps> & Props> {
  render() {
    return (
      <Box component="section" id={this.props.id} my={3}>
        <Box position={'relative'} mb={4}>
          <Box
            component={'img'}
            src={dotsSvg}
            zIndex={-1}
            position={'absolute'}
            left="-1em"
            top="-1em"
          />
          <Typography
            variant="h2"
            component="h2"
            color={this.props.theme?.palette.text.primary}
          >
            {this.props.title}
          </Typography>
        </Box>
        {this.props.children}
      </Box>
    );
  }
}

export default Section;
