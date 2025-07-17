// src/components/Navbar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
    // 3b7b45ff
  return (
    <AppBar position="static" sx={{ backgroundColor: "#3b7b45ff " }}>
      <Toolbar>
        {/*  */}
        {/* Logo or Menu Icon */}
        <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Chess.com Clone
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit" sx={{ mx: 1 }}>
            Home
          </Button>
          <Button color="inherit" sx={{ mx: 1 }}>
            Play
          </Button>
          <Button color="inherit" sx={{ mx: 1 }}>
            Leaderboard
          </Button>
          <Button variant="outlined" color="inherit" sx={{ ml: 2 }}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
