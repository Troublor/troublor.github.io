import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { ThemedProps } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface TimelineItemProps {
  icon: IconProp;
  timestamp: string;
  children: React.ReactNode;
}

export class TimelineItem extends React.Component<
  ThemedProps & TimelineItemProps,
  never
> {
  render() {
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
              <FontAwesomeIcon
                size={'2x'}
                color={this.props.theme?.palette.primary.main}
                icon={this.props.icon}
              />
            </Box>
            <Box
              width={'0.2em'}
              height={'100%'}
              bgcolor={this.props.theme.palette.primary.main}
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
                {this.props.timestamp}
              </Typography>
            </Box>
            {this.props.children}
          </Stack>
        </Stack>
      </Container>
    );
  }
}
