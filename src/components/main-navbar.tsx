"use client";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link as MUILink,
  Box,
  Button,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import NextLink from "next/link";
import useAuth from "@/hook/useAuth";

const pages = ["Movie", "Favorite"];

const MainNavbar = () => {
  const { onLogout } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MUILink
            component={NextLink}
            prefetch={false}
            href={{ pathname: "/movie" }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              Movie
            </Typography>
          </MUILink>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              sx={{ my: 2, color: "white" }}
              onClick={onLogout}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
