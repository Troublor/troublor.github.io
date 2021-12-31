import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ParticlesContainer from '../components/ParticlesContainer';
import TextLoop from 'react-text-loop';
import {Scroller} from '../components';
import {fab} from '@fortawesome/free-brands-svg-icons';
import profile from './data/profile';
import avatar from '../img/avatar.jpg';
import {Container, Theme, styled, Box, Typography} from '@mui/material';

const Dot = styled('div')({
  color: '#ff4c60',
  display: 'inline',
});

const StyledSection = styled('section')(({theme}) => ({
  background: theme.palette.primary.main,
}));

export class Home extends React.Component {
  render(): React.ReactElement {
    return (
      <StyledSection id="home" className="home d-flex align-items-center">
        <ParticlesContainer/>
        <Container>
          <div className="intro">
            <img src={avatar} alt="Avatar" className="mb-4" style={{width: '30%', borderRadius: '50%'}}/>

            <h1 className="mt-0">
              {profile.name.first}
              <Dot>{profile.name.middle}</Dot>
              {profile.name.last}
            </h1>

            <Box mb={2} sx={{
              fontSize: '16px',
              color: (theme: Theme) => theme.palette.text.secondary,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Typography variant={'body2'}>
                A.K.A.
              </Typography>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
                {profile.name.previous.map((n, i) => (
                  <Box key={n}>{(i < profile.name.previous.length - 1 ? `${n}, ` : n)}&nbsp;</Box>
                ))}
              </Box>
            </Box>

            <Box sx={{fontSize: '18px', color: (theme: Theme) => theme.palette.text.secondary}}>
              I&apos;m a
              {' '}
              <TextLoop springConfig={{stiffness: 180, damping: 10}} interval={2000}>
                {profile.titles.map(t => (<span key={t}>{t}</span>))}
              </TextLoop>
            </Box>

            <ul className="social-icons light list-inline mb-0 mt-4">
              {profile.socialNetworks.map(network => (
                <li className="list-inline-item" key={network.iconName}>
                  <a href={network.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon size={'2x'} icon={fab[network.iconName]}/>
                  </a>
                </li>
              ))}
            </ul>

            <Box color={'secondary'} className={'btn btn-kd mt-4'} sx={{
              color: (theme: Theme) => theme.palette.text.secondary,
              backgroundColor: (theme: Theme) => theme.palette.secondary.main,
            }}>
              <Scroller href="#contact">Contact me</Scroller>
            </Box>
          </div>
          <div className="scroll-down">
            <Scroller href="#about" className="mouse-wrapper">
              <span>Scroll Down</span>
              <span className="mouse">
                <span className="wheel"/>
              </span>
            </Scroller>
          </div>
        </Container>
      </StyledSection>
    );
  }
}

export default Home;
