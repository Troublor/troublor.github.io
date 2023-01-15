import React from 'react';
import details from '../data/details.json';
import {
  AppBar,
  Container,
  Toolbar,
  Avatar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Link,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import avatar from '../img/avatar.jpg';
import { ThemedProps } from '../../theme';
import { Scroller } from '../../components';

export class Header extends React.Component<
  ThemedProps,
  {
    anchorElNav: HTMLElement | null;
    anchorElUser: HTMLElement | null;
  }
> {
  constructor(props: ThemedProps) {
    super(props);
    this.state = {
      anchorElNav: null,
      anchorElUser: null,
    };
    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this);
    this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this);
    this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this);
    this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this);
  }

  private sections = [
    'Home',
    'About',
    'Education',
    'Publications',
    'Experience',
    'Contact',
  ];

  private handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElNav: event.currentTarget });
  };
  private handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorElUser: event.currentTarget });
  };
  private handleCloseNavMenu = () => {
    this.setState({ anchorElNav: null });
  };
  private handleCloseUserMenu = () => {
    this.setState({ anchorElUser: null });
  };

  render() {
    return (
      <Box
        component="div"
        sx={{
          zIndex: 100,
          position: 'fixed',
          width: '100%',
          padding: 1,
          boxSizing: 'border-box',
        }}
      >
        <AppBar position="relative">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={this.handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(this.state.anchorElNav)}
                  onClose={this.handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {this.sections.map((sec) => (
                    <MenuItem
                      key={sec.toLowerCase()}
                      onClick={this.handleCloseNavMenu}
                    >
                      <Scroller
                        key={sec}
                        href={`#${sec.toLowerCase()}`}
                        offset={100}
                      >
                        <Typography
                          color={this.props.theme.palette.text.primary}
                          textAlign="center"
                        >
                          {sec}
                        </Typography>
                      </Scroller>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Link href="https://troublor.xyz" underline="none">
                <Avatar src={avatar} />
              </Link>
              <Box
                sx={{
                  marginLeft: '10px',
                  [this.props.theme.breakpoints.down(
                    this.props.theme.minWidth,
                  )]: { display: 'none' },
                }}
              >
                <Link
                  href="https://troublor.xyz"
                  color={this.props.theme.palette.primary.contrastText}
                  underline="none"
                >
                  <Typography variant="h4" noWrap component="h4">
                    {details.firstName}
                    <Typography
                      variant="h4"
                      component="span"
                      noWrap
                      sx={{ color: this.props.theme.palette.warning.main }}
                    >
                      {details.middleName}
                    </Typography>
                    {details.lastName}
                  </Typography>
                </Link>
              </Box>

              <Box
                sx={{
                  ml: 5,
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                }}
              >
                {this.sections.map((sec) => (
                  <Scroller
                    key={sec}
                    href={`#${sec.toLowerCase()}`}
                    offset={100}
                  >
                    <Button
                      onClick={this.handleCloseNavMenu}
                      disableFocusRipple={false}
                      component="div"
                      sx={{
                        color: this.props.theme.palette.primary.contrastText,
                        display: 'block',
                        textTransform: 'none',
                      }}
                    >
                      <Typography variant="h6" component="h6" noWrap>
                        {sec}
                      </Typography>
                    </Button>
                  </Scroller>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    );
  }
}

export default Header;
