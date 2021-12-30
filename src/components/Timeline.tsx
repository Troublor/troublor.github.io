import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {styled, Theme, Typography} from '@mui/material';

const Fade = require('react-reveal/Fade');

interface Props {
  time: string
  title: string
  subTitle?: string
  icon: IconProp
  left?: string
}

export class Timeline extends React.Component<Props> {
  render () {
    const props = this.props;

    const IconBox = styled('div')(({theme})=>({
      backgroundColor: theme.palette.primary.contrastText,
      fontSize: '24px',
      color: theme.palette.primary.main,
      position: 'absolute',
      left: this.props.left ? this.props.left : '-10px',
      top: 0,
      zIndex: 1,
      fontWeight: 900,
    }));

    return (
      <div className="timeline-container">
        <Fade bottom>
          <div className="content">
            <Typography variant={'body2'} className="time">{this.props.time}</Typography>
            <div className="d-flex justify-content-between">
              <h3>{this.props.title}</h3>
              <h3 style={{fontWeight: 'normal'}}>{this.props.subTitle ?? ''}</h3>
            </div>
            {this.props.children}
          </div>
        </Fade>
        <IconBox>
          <FontAwesomeIcon icon={props.icon} />
        </IconBox>
      </div>
    );
  }
}

export default Timeline;
