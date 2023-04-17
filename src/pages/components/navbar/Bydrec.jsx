import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { usePopupState } from "material-ui-popup-state/hooks";
import { bindHover, bindMenu } from "material-ui-popup-state";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const pages = {
  'Home': [],
  'About': [
    'Careers'
  ],
  'How We Work': [],
  'Services': [
    "Dedicated Software Development",
    "Dedicated QA & Testing",
    "DevOps",
  ],
  'Resources': [],
  'Blog': [],
  'Contact': []
}

export function Bydrec() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const hasSubmenu = (page) => {
    return pages[page]?.length > 0;
  }

  const getSubmenus = () => {
    return pages[popupState?.anchorEl?.innerText] || [];
  }

  const Logo = ({ isMobile } = { isMobile: false }) => (
    <Typography
      mr={5}
      variant="h6"
      component="a"
      href="/"
      sx={{
        display: { xs: isMobile ? 'flex' : 'none', md: isMobile ? 'none' : 'flex' },
        fontFamily: 'cursive',
        fontWeight: 700,
        fontSize: "1.65em",
        color: 'white',
        textDecoration: 'none'
      }}
    >
      Logo
    </Typography>
  )


  const MobileMenu = () => (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        sx={{ color: 'white' }}
      >
        <MenuIcon />
      </IconButton>

      <Logo isMobile={true} />

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'center',
          horizontal: 'bottom',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {Object.keys(pages).map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo />
          <MobileMenu />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {Object.keys(pages).map((page) => (
              <Button
                key={page}
                sx={{ 
                  my: 2, 
                  whiteSpace: "nowrap", 
                  minWidth: "auto", 
                  color: 'white', 
                  fontSize: "0.85em", 
                  fontWeight: "600",
                  transition: "all 500ms ease",
                  "& .MuiButton-endIcon>*:nth-of-type(1)": {
                    marginLeft: "-4px"
                  }, 
                  "&:hover": {
                    opacity: 0.7
                  }
                }}
                {...bindHover(popupState)}
                endIcon={hasSubmenu(page) ? <KeyboardArrowDownIcon /> : null}
              >
                {page}
              </Button>
            ))}
          </Box>

          {hasSubmenu(popupState?.anchorEl?.innerText) ? (
            <HoverMenu 
              sx={{ 
                '& .MuiPaper-root': {
                  borderRadius: "0px",
                  boxShadow: 2,
                  borderTop: "3px solid #2ea3f2",
                  marginTop: "15px"
                }
              }}
              {...bindMenu(popupState)}
            >
              {getSubmenus().map((page) => (
                <MenuItem key={page} onClick={popupState.close}>
                  {page}
                </MenuItem>
              ))}
            </HoverMenu>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Bydrec;