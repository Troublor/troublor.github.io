import React from 'react';
import { Scroller } from '../../components';
import { Container, Navbar, Nav } from 'react-bootstrap';
import details from '../data/details.json';
import { styled } from '@mui/material';

const Logo = styled('span')({
  color: '#fff',
  fontSize: '36px',
  fontFamily: 'Rubik, sans-serif',
  fontWeight: 700,
  lineHeight: '36px',
});

const Dot = styled('span')({
  color: '#ff4c60',
  display: 'inline',
});

const StyledHeader = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

export class Header extends React.Component {
  render() {
    return (
      <StyledHeader className="kd-header fixed-top">
        <Container>
          <Navbar expand="lg" variant="dark">
            <Navbar.Brand href="#">
              <Logo>
                {details.firstName}
                <Dot>{details.middleName}</Dot>
                {details.lastName}
              </Logo>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown">
              <Nav className="ml-auto" as="ul">
                <Nav.Item as="li">
                  <Scroller href="#home" className="nav-link">
                    Home
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#about" className="nav-link">
                    About
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#education" className="nav-link">
                    Education
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#publications" className="nav-link">
                    Publications
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#research_experience" className="nav-link">
                    Experience
                  </Scroller>
                </Nav.Item>
                <Nav.Item as="li">
                  <Scroller href="#contact" className="nav-link">
                    Contact
                  </Scroller>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </StyledHeader>
    );
  }
}
export default Header;
