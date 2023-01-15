import React from 'react';
import { Section } from '../../components';
import profile from '../data/profile';
import { Box, Link, Stack, Typography } from '@mui/material';
import { ThemedProps } from '../../theme';
import { TimelineItem } from '../../components';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Teaching extends React.Component<ThemedProps> {
  render(): React.ReactElement {
    return (
      <Section theme={this.props.theme} id="teaching" title="Teaching">
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
            {profile.teaching.map((t) => (
              <TimelineItem
                key={'teaching_' + t.courseCode + t.time}
                theme={this.props.theme}
                icon={fas['faChalkboardTeacher']}
                timestamp={`${t.courseCode} - ${t.role}`}
              >
                <Stack
                  direction={'row'}
                  spacing={1}
                  justifyContent={'space-between'}
                >
                  <Stack direction={'column'} spacing={1}>
                    <Typography variant={'h6'} component={'h6'}>
                      <Link
                        href={t.link}
                        target="_blank"
                        textTransform={'none'}
                        color={'inherit'}
                      >
                        {t.courseName}{' '}
                        <FontAwesomeIcon icon={fas['faExternalLinkAlt']} />
                      </Link>
                    </Typography>
                    <Typography variant={'body1'} component={'div'}>
                      {t.university}
                    </Typography>
                    <Typography variant={'body1'} component={'div'}>
                      {t.time}
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
