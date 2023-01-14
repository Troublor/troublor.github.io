import React from 'react';
import { Section } from '../../components';
import profile from '../data/profile';
import { Box, Stack, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import { ThemedProps } from '../../theme';
import { TimelineItem } from '../../components/TimelineItem';
import { fas } from '@fortawesome/free-solid-svg-icons';

export class ResearchExperience extends React.Component<ThemedProps> {
  render(): React.ReactElement {
    return (
      <Section
        theme={this.props.theme}
        id="experience"
        title="Research Experience"
      >
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
            {profile.researchExperience.map((e) => (
              <TimelineItem
                key={'research_experience_' + e.period}
                theme={this.props.theme}
                icon={fas['faPlaceOfWorship']}
                timestamp={e.period}
              >
                <Stack
                  direction={'row'}
                  spacing={1}
                  justifyContent={'space-between'}
                >
                  <Stack direction={'column'} spacing={1}>
                    <Typography variant={'h5'} component={'h5'}>
                      {e.institute}
                    </Typography>
                    <Typography variant={'body1'} component={'div'}>
                      {e.group}
                    </Typography>
                    <Typography variant={'body1'} component={'div'}>
                      {e.role}
                    </Typography>
                    <Box>
                      {e.focus.map((f) => (
                        <Chip
                          key={e.group + e.role + f}
                          label={f}
                          color={'primary'}
                          variant="outlined"
                          size={'small'}
                        />
                      ))}
                    </Box>
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

export default ResearchExperience;
