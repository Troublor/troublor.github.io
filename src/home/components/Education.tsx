import { Box, Grid, Theme } from '@mui/material';
import React from 'react';
import { Section, Timeline } from '../../components';
import profile from '../data/profile';

export class Education extends React.Component {
  render(): React.ReactElement {
    return (
      <Section id="education" title="Education">
        <Grid container>
          <Grid item md={12}>
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {profile.educations.map((e) => (
                <Timeline
                  key={e.degree}
                  time={e.period}
                  title={e.school}
                  subTitle={e.degreeAbbr}
                  icon={['fas', 'graduation-cap']}
                >
                  <p>{e.degree}</p>
                  <p>{e.major}</p>
                  <div dangerouslySetInnerHTML={{ __html: e.description }} />
                </Timeline>
              ))}

              <Box
                component={'span'}
                sx={{
                  backgroundColor: (theme: Theme) => theme.palette.primary.main,
                }}
                className="line"
              />
            </div>
          </Grid>
        </Grid>
      </Section>
    );
  }
}

export default Education;
