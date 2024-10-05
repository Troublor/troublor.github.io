import { Box, Chip, Stack, Typography } from '@mui/material';
import React from 'react';
import { Experience } from '../data/interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TimelineItem } from './TimelineItem';

export type Props = {
  experience: Experience;
};

function formatDate(date?: [number, number]): string {
  if (!date) {
    return 'Present';
  } else {
    return `${date[0]}.${date[1]}`;
  }
}

export function ExperienceItem({ experience }: Props): React.ReactElement {
  return (
    <TimelineItem
      icon={experience.kind === 'research' ? fas['faFlask'] : fas['faGear']}
      timestamp={`${formatDate(experience.start)} - ${formatDate(
        experience.end,
      )}`}
    >
      <Stack direction={'row'} spacing={1} justifyContent={'space-between'}>
        <Stack direction={'column'} spacing={1}>
          <Typography variant={'h5'} component={'h5'}>
            {experience.institute}
          </Typography>
          <Stack mt={1} direction={'row'} className={'location'}>
            <FontAwesomeIcon icon={fas['faMapMarkerAlt']} /> &nbsp;
            <Typography variant={'body2'}>{experience.location}</Typography>
          </Stack>
          <Typography variant={'body1'} component={'div'}>
            {experience.position}
          </Typography>
          <Box>
            {experience.tags?.map((f) => (
              <Chip
                key={experience.institute + experience.position + f}
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
  );
}
