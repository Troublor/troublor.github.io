import React from 'react';
import { Counter, Section } from '../../components';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import profile from '../data/profile';
import portrait from '../img/portrait.jpg';
import avatar from '../img/avatar.jpg';
import { Grid, Link, styled, Theme } from '@mui/material';

const Name = styled('div')`
  font-weight: 500;
  font-size: 18px;
`;

export class About extends React.Component<unknown, unknown> {
  render() {
    return (
      <Section id="about" title="About Me">
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid item md={2}>
            <Grid container>
              <Grid item xs={12}>
                <div className="text-center mb-3">
                  <img
                    src={avatar}
                    alt="avatar"
                    style={{ width: '150px', borderRadius: '10%' }}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <Name className="text-center mb-3">{profile.username}</Name>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={10} className="triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <Grid
                container
                spacing={4}
                justifyContent={'space-between'}
                alignItems={'stretch'}
              >
                <Grid item md>
                  <Grid
                    container
                    spacing={2}
                    justifyContent={'space-between'}
                    direction={'row'}
                    sx={{ height: '100%' }}
                  >
                    <Grid item xs={12}>
                      <div
                        className="mb-2"
                        style={{ textAlign: 'justify' }}
                        dangerouslySetInnerHTML={{
                          __html: profile.description,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <div className="mt-auto mb-3">
                        <Link
                          href={profile.resume}
                          className="btn btn-kd"
                          sx={{
                            color: (theme: Theme) =>
                              theme.palette.text.secondary,
                            backgroundColor: (theme: Theme) =>
                              theme.palette.secondary.main,
                            '&:hover': {
                              color: (theme: Theme) =>
                                theme.palette.text.secondary,
                              backgroundColor: (theme: Theme) =>
                                theme.palette.secondary.main,
                            },
                          }}
                          target="_blank"
                          underline={'none'}
                          rel="noopener noreferrer"
                        >
                          Check My CV
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={'auto'}>
                  <div>
                    <img
                      src={portrait}
                      alt="portrait"
                      style={{
                        width: '100%',
                        maxWidth: '200px',
                        borderRadius: '10%',
                      }}
                    />
                  </div>
                </Grid>
                {/*<Col md={4}>*/}
                {/*  {about.skills.map(skill => (*/}
                {/*    <Skill key={skill.name} title={skill.name} percent={skill.confidence} backgroundColor={skill.color} />*/}
                {/*  ))}*/}
                {/*</Col>*/}
              </Grid>
            </div>
          </Grid>
        </Grid>

        <Grid container className="d-flex justify-content-around">
          {profile.statistics.map((statistic) => (
            <Counter
              key={statistic.title}
              className="col-md-3 col-sm-6"
              description={statistic.title}
              count={statistic.number}
              icon={[
                statistic.iconPrefix as IconPrefix,
                statistic.iconName as IconName,
              ]}
            />
          ))}
        </Grid>
      </Section>
    );
  }
}

export default About;
