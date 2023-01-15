import React from 'react';
import { Section } from '../../components';
import profile from '../data/profile';
import { Box, Link, Stack, Typography } from '@mui/material';
import { ThemedProps } from '../../theme';
import { TimelineItem } from '../../components';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Service extends React.Component<ThemedProps> {
  render(): React.ReactElement {
    return (
      <Section theme={this.props.theme} id="service" title="Service">
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
            {profile.service.map((s) => (
              <TimelineItem
                key={'service_' + s.organization}
                theme={this.props.theme}
                icon={fas['faCheckDouble']}
                timestamp={`${s.time} - ${s.role}`}
              >
                <Stack
                  direction={'row'}
                  spacing={1}
                  justifyContent={'space-between'}
                >
                  <Stack direction={'column'} spacing={1}>
                    <Typography variant={'h6'} component={'h6'}>
                      <Link
                        href={s.link}
                        target="_blank"
                        textTransform={'none'}
                        color={'inherit'}
                      >
                        {s.organization}{' '}
                        <FontAwesomeIcon icon={fas['faExternalLinkAlt']} />
                      </Link>
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
