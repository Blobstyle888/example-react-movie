"use client";

import React from "react";
import { Alert, Box, Button, Card, Container, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

import useAuth from "@/hook/useAuth";

export default function Home() {
  const { emailRef, passwordRef, onSubmitHandler } = useAuth();

  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/movie");
    }
  }, [router, status]);

  return (
    <main style={{ height: "100vh" }}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card elevation={8} sx={{ p: 4 }}>
          <form onSubmit={onSubmitHandler}>
            <TextField
              inputRef={emailRef}
              autoFocus
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              // value="admin@movie.com"
            />
            <TextField
              inputRef={passwordRef}
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              // value="password1234"
            />

            <Box sx={{ mt: 2 }}>
              <Button fullWidth size="large" type="submit" variant="contained">
                Log In
              </Button>
            </Box>
          </form>
          <Box sx={{ mt: 2 }}>
            <Alert severity="info">
              <div>
                Use <b>admin@admin.com</b> and password <b>test1234</b>
              </div>
            </Alert>
          </Box>
        </Card>
      </Container>
    </main>
  );
}
