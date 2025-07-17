// src/components/ChessboardComponent.js
import React from "react";
import { Chessboard } from "react-chessboard";
import { Box, Typography, Paper } from "@mui/material";

export default function ChessboardComponent() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold" }}>
        Chess Game
      </Typography>

      <Paper
        elevation={24}
        sx={{
          p: 2,
          backgroundColor: "#dcdcdc",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: 400 }}>
          <Chessboard />
        </Box>
      </Paper>
    </Box>
  );
}
