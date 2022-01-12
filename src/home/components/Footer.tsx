import {Container, Stack, styled, Theme, Typography} from '@mui/material';
import React from 'react';
import profile from '../data/profile';
import packageJson from '../../../package.json';

const StyledFooter = styled('footer')(({theme}) => ({
  background: theme.palette.primary.main,
  marginTop: '110px',
}));

export class Footer extends React.Component {
  render () {
    return (
      <StyledFooter className="footer">
        <Container>
          <Stack direction={'column'} sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Typography variant={'body2'} sx={{
              color: (theme: Theme)=>theme.palette.text.secondary,
            }}>
            © {(new Date()).getFullYear()} {profile.name.formal}
            </Typography>
            <Typography variant={'body2'} sx={{
              color: (theme: Theme)=>theme.palette.text.secondary,
            }}>
              {profile.domain}
            </Typography>
            <Typography variant={'body2'} sx={{
              color: (theme: Theme)=>theme.palette.text.secondary,
            }}>
              {`v${packageJson.version}`}
            </Typography>
          </Stack>
        </Container>
      </StyledFooter>
    );
  }
}

export default Footer;
