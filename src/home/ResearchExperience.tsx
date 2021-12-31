import React from 'react';
import { Section, Timeline } from '../components';
import profile from './data/profile';
import {Box, Grid, styled, Theme, Typography} from '@mui/material';
import Chip from '@mui/material/Chip';

const StyledBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette,
}));

export class ResearchExperience extends React.Component {
  render (): React.ReactElement{

    return (
      <Section id="research_experience" title="Research Experience">
        <Grid container>
          <Grid item md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

              { profile.researchExperience.map(c => (
                <Timeline key={c.group+c.role} time={c.period} title={c.institute} subTitle='' icon={['fas', 'briefcase']} left="-7px">
                  <Typography variant={'body1'}>{c.group}</Typography>
                  <Typography variant={'body2'}>{c.role}</Typography>
                  <Box mt={1}>
                    { c.focus.map(f => (
                      <Chip key={c.group+c.role+f} label={f} color={'primary'} variant="outlined" size={'small'} />
                    )) }
                  </Box>
                </Timeline>
              ))}

              <Box component={'span'} sx={{
                backgroundColor: (theme: Theme) => theme.palette.primary.main,
              }} className="line" />
            </div>
          </Grid>
        </Grid>
      </Section>
    );
  }
}

export default ResearchExperience;
