import {AppBar, Box, CssBaseline, IconButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {Sidebar} from "./components/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {Logo} from "./components/Logo.jsx";

export const Root = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          {isMobile && <Logo color="white" />}
        </Toolbar>
      </AppBar>

      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        sx={{
          width: "100%",
          padding: "3em",
          marginTop: "2em"
        }}
      >
        <Outlet/>
      </Box>
    </Box>
  );
}