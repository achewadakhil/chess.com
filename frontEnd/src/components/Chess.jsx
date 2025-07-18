import React from 'react';
import { Chessboard } from "react-chessboard";
import { Box, Typography, Avatar } from "@mui/material";

export default function ChessBoard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          p: 0.8,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar alt="Player 1 Avatar" src="https://placehold.co/40x40/000000/FFFFFF?text=P1" />
          <Typography variant="h6" color="text.primary">
            Player 1 (Rating: 1800)
          </Typography>
        </Box>
        <Box sx={{ border: '1px solid #777', borderRadius: '4px', p: 0.5, px: 1, minWidth: '70px', textAlign: 'center' }}>
          <Typography variant="h4" color="text.primary">
            05:00
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '500px' }}>
        <Chessboard />
      </Box>

      <Box
        sx={{
          p: 0.8,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar alt="Player 2 Avatar" src="https://placehold.co/40x40/000000/FFFFFF?text=P2" />
          <Typography variant="h6" color="text.primary">
            Player 2 (Rating: 1750)
          </Typography>
        </Box>
        <Box sx={{ border: '1px solid #777', borderRadius: '4px', p: 0.5, px: 1, minWidth: '70px', textAlign: 'center' }}>
          <Typography variant="h4" color="text.primary">
            05:00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
