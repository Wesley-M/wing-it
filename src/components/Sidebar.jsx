import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import { Logo } from "./Logo.jsx";
import {Link} from "react-router-dom";
import { useUrlListener } from "../hooks/useUrlListener.js";

export const Sidebar = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
  const menuEntries = [
    {
      name: "Overview",
      to: "/"
    },
    {
      name: "Button",
      to: "/button"
    },
    {
      name: "Card",
      to: "/card"
    },
    {
      name: "Notification",
      to: "/notification"
    }
  ]

  const activeUrlIdx = useUrlListener(menuEntries.map(e => e.to));

  const isUrlActive = (idx) => {
    return activeUrlIdx === idx;
  }

  const drawer = (
    <>
      <Toolbar>
        <Logo />
      </Toolbar>
      <Divider />
      <List>
        {menuEntries.map((entry, idx) => (
          <ListItem
            key={entry.name}
            sx={{
              width: "80%",
              margin: "0 10%",
              padding: "0.25em 0"
            }}
          >
            <ListItemButton
              component={Link}
              to={entry.to}
              sx={{
                height: "2.5em",
                borderRadius: "0.2em",
                color: "primary.main",
                border: isUrlActive(idx) ? "2px solid" : "none",
                borderColor: isUrlActive(idx) ? "primary.light" : "transparent"
              }}
            >
              <ListItemText primary={entry.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}