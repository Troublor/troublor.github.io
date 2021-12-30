import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Section, Timeline } from '../components';
import profile from './data/profile';
import {Grid, Stack, Typography} from '@mui/material';

export class WorkExperience extends React.Component {
  render (): React.ReactElement{

    return (
      <Section id="work_experience" title="Work Experience">
        <Grid container >
          <Grid item md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              { profile.workExperiences.map(c => (
                <Timeline key={c.organization} time={c.period} title={c.position} subTitle='' icon={['fas', 'briefcase']} left="-7px">
                  <Typography variant={'body1'}>{c.organization}</Typography>
                  <Typography variant={'body2'}>{c.description}</Typography>
                  <Stack mt={1} direction={'row'} className={'location'}>
                    <FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> &nbsp;
                    <Typography variant={'body2'}>{c.location}</Typography>
                  </Stack>
                </Timeline>
              ))}

              <span className="line" />
            </div>
          </Grid>
        </Grid>
      </Section>
    );
  }
}

export default WorkExperience;
