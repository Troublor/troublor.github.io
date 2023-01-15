import React from 'react';
import { ThemedProps } from '../../theme';
import { Section, TimelineItem } from '../../components';
import { Grid, Stack, Typography } from '@mui/material';
import profile from '../data/profile';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Award } from '../data/types';

export interface AwardsState {
  columns: number;
}

export class Awards extends React.Component<ThemedProps, AwardsState> {
  constructor(props: ThemedProps) {
    super(props);
    this.state = {
      columns: this.decideColumns(),
    };
    this.decideColumns = this.decideColumns.bind(this);
  }

  private decideColumns(): number {
    if (window.innerWidth < this.props.theme.breakpoints.values.sm) {
      return 1;
    } else if (window.innerWidth < this.props.theme.breakpoints.values.md) {
      return 2;
    } else {
      return 3;
    }
  }

  componentDidMount() {
    window
      .matchMedia(
        this.props.theme.breakpoints.down('sm').replace('@media ', ''),
      )
      .addEventListener('change', (e) => {
        if (e.matches) {
          this.setState({ columns: 1 });
        }
      });
    window
      .matchMedia(
        this.props.theme.breakpoints.between('sm', 'md').replace('@media ', ''),
      )
      .addEventListener('change', (e) => {
        if (e.matches) {
          this.setState({ columns: 2 });
        }
      });
    window
      .matchMedia(this.props.theme.breakpoints.up('md').replace('@media ', ''))
      .addEventListener('change', (e) => {
        if (e.matches) {
          this.setState({ columns: 3 });
        }
      });
  }

  render() {
    const awards: (Award | undefined)[] = [...profile.awards];
    const full =
      awards.length +
      (this.state.columns - (awards.length % this.state.columns));
    for (let i = awards.length; i < full; i++) {
      awards.push(undefined);
    }
    const rows = full / this.state.columns;
    return (
      <Section theme={this.props.theme} id={'awards'} title={'Awards'}>
        <Grid
          container
          direction={['row']}
          borderRadius={'2em'}
          py={2}
          spacing={1}
          bgcolor={this.props.theme.palette.background.paper}
        >
          {awards.map((a, i) => (
            <Grid
              item
              key={'award-' + i}
              xs={12}
              sm={6}
              md={4}
              width={'100%'}
              order={{
                sm: (i % rows) * this.state.columns + Math.floor(i / rows) + 1,
              }}
            >
              {a ? (
                <TimelineItem
                  theme={this.props.theme}
                  icon={fas['faTrophy']}
                  timestamp={a.time}
                >
                  <Stack direction={'column'} spacing={1}>
                    <Typography variant={'h5'} component={'h5'}>
                      {a.name}
                    </Typography>
                    <Typography variant={'body1'} component={'div'}>
                      {a.organization}
                    </Typography>
                  </Stack>
                </TimelineItem>
              ) : (
                <div />
              )}
            </Grid>
          ))}
          {}
        </Grid>
      </Section>
    );
  }
}
