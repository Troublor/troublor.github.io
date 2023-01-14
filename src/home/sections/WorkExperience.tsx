import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Section } from '../../components';
import profile from '../data/profile';
import { Box, Stack, Typography } from '@mui/material';
import { ThemedProps } from '../../theme';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TimelineItem } from '../../components/TimelineItem';

export class WorkExperience extends React.Component<ThemedProps> {
  render(): React.ReactElement {
    return (
      <Section id="work_experience" title="Work Experience">
        <Box
          bgcolor={this.props.theme.palette.background.paper}
          borderRadius={'1em'}
          px={2}
          py={4}
        >
          <Stack
            direction={'column'}
            spacing={2}
            justifyContent={'space-between'}
          >
            {profile.workExperiences.map((e) => (
              <TimelineItem
                key={'work_experience_' + e.period}
                theme={this.props.theme}
                icon={fas['faBriefcase']}
                timestamp={e.period}
              >
                <Stack
                  direction={'row'}
                  spacing={1}
                  justifyContent={'space-between'}
                >
                  <Stack direction={'column'} spacing={1}>
                    <Typography variant={'h5'} component={'h5'}>
                      {e.position}
                    </Typography>
                    <Typography variant={'body1'} component={'div'}>
                      {e.organization}
                    </Typography>
                    <Stack mt={1} direction={'row'} className={'location'}>
                      <FontAwesomeIcon icon={fas['faMapMarkerAlt']} /> &nbsp;
                      <Typography variant={'body2'}>{e.location}</Typography>
                    </Stack>
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

export default WorkExperience;
