"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Link as MUILink,
  Box,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Stack,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NextLink from "next/link";

import useAuth from "@/hook/useAuth";
import useCurrentPage from "@/hook/useCurrentPage";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const pages = ["Movie", "Favorite"];

const drawerWidth = 240;

const MainNavbar = ({ children }: { children: React.ReactNode }) => {
  const { onLogout } = useAuth();
  const { pageName } = useCurrentPage();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(`/?callbackUrl=/movie`);
    },
  });

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {pageName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <MUILink
            component={NextLink}
            prefetch={false}
            href={{ pathname: "/movie" }}
            sx={{
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              The Movie
            </Typography>
          </MUILink>
        </Toolbar>
        <Divider />
        <Stack direction="column" sx={{ m: 2 }}>
          <Typography variant="h6">{session?.user?.name}</Typography>
          <Typography variant="caption">{session?.user?.email}</Typography>
        </Stack>
        <List>
          {pages.map((text, index) => (
            <ListItem key={text} disablePadding>
              <MUILink
                component={NextLink}
                href={{ pathname: text === "Movie" ? "/movie" : "/favorite" }}
                prefetch={false}
                sx={{
                  width: "100%",
                  textDecoration: "none",
                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                <ListItemButton selected={pageName === text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </MUILink>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            startIcon={<LogoutIcon />}
            sx={{ my: 2, color: "white" }}
            onClick={onLogout}
          >
            Logout
          </Button>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default MainNavbar;
