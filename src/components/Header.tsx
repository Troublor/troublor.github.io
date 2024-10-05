import React from 'react';
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
  styled,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { RibbonContainer } from 'react-ribbons';
import { Profile } from '../data/interface';
import avatar from '../assets/avatar.jpg';

const CustomizedRibbonContainer = styled(RibbonContainer)({
  minHeight: '0',
});

export function Header({ profile }: { profile: Profile }): React.ReactElement {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(
    null,
  );
  const sections = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Publications',
      path: '/publications',
    },
    {
      title: 'Experience',
      path: '/experience',
    },
  ];

  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }
  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  const ResponsiveBox = styled(Box)(({ theme }) => ({
    marginLeft: '10px',
    [theme.breakpoints.down(theme.minWidth)]: { display: 'none' },
  }));

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
        <CustomizedRibbonContainer>
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
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {sections.map((sec) => (
                    <MenuItem
                      id={sec.title}
                      key={sec.title.toLowerCase()}
                      onClick={handleCloseNavMenu}
                    >
                      <a href={sec.path} style={{ textDecoration: 'none' }}>
                        <Typography color={'text.primary'} textAlign="center">
                          {sec.title}
                        </Typography>
                      </a>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Link href="https://troublor.xyz" underline="none">
                <Avatar src={avatar} />
              </Link>
              <ResponsiveBox>
                <Link
                  href="https://troublor.xyz"
                  color={'primary.contrastText'}
                  underline="none"
                >
                  <Typography
                    variant="h4"
                    noWrap
                    component="h4"
                    sx={{
                      display: { xs: 'block', sm: 'none' },
                    }}
                  >
                    {profile.name.first}&nbsp;{profile.name.last}
                  </Typography>
                  <Typography
                    variant="h4"
                    noWrap
                    component="h4"
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                    }}
                  >
                    {profile.name.first}
                    <Typography
                      variant="h4"
                      component="span"
                      noWrap
                      sx={{ color: 'warning.main' }}
                    >
                      {profile.name.middle}
                    </Typography>
                    {profile.name.last}
                  </Typography>
                </Link>
              </ResponsiveBox>

              <Box
                sx={{
                  ml: 2,
                  flexGrow: 1,
                  display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                }}
              >
                {sections.map((sec) => (
                  <a
                    key={sec.title}
                    href={sec.path}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      disableFocusRipple={false}
                      component="div"
                      sx={{
                        color: 'primary.contrastText',
                        display: 'block',
                        textTransform: 'none',
                      }}
                    >
                      <Typography variant="h6" component="h6" noWrap>
                        {sec.title}
                      </Typography>
                    </Button>
                  </a>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </CustomizedRibbonContainer>
      </AppBar>
    </Box>
  );
}
