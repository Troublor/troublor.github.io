import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Section } from '../../components';
import profile from '../data/profile';
import { ThemedProps } from '../../theme';
import { TimelineItem } from '../../components/TimelineItem';
import { fas } from '@fortawesome/free-solid-svg-icons';

export class Education extends React.Component<ThemedProps> {
  render(): React.ReactElement {
    return (
      <Section theme={this.props.theme} id="education" title="Education">
        <Box
          bgcolor={this.props.theme.palette.background.paper}
          borderRadius={'1em'}
          py={4}
        >
          <Stack
            direction={'column'}
            spacing={2}
            justifyContent={'space-between'}
          >
            {profile.educations.map((e) => (
              <TimelineItem
                key={e.period}
                theme={this.props.theme}
                icon={fas['faGraduationCap']}
                timestamp={e.period}
              >
                <Stack
                  direction={'row'}
                  spacing={1}
                  justifyContent={'space-between'}
                >
                  <Stack direction={'column'} spacing={1}>
                    <Typography variant={'h5'} component={'h5'}>
                      {e.school}
                    </Typography>
                    <Typography variant={'body1'} component={'div'}>
                      {e.degree}
                    </Typography>
                    <Typography variant={'body1'} component={'div'}>
                      {e.major}
                    </Typography>
                    <Typography variant={'body2'} component={'div'}>
                      {e.description}
                    </Typography>
                  </Stack>
                  <Stack direction={'column'} spacing={1}>
                    <Typography variant={'h5'} component={'h5'}>
                      {e.degreeAbbr}
                    </Typography>
                  </Stack>
                </Stack>
              </TimelineItem>
            ))}
          </Stack>
        </Box>
      </Section>
    );
  }
}
