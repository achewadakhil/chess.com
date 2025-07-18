import React from 'react';
import { CssBaseline, Box, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import ChessBoard from './components/Chess';
import GameDetails from './components/GameDetails';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1A1A1A',
      paper: '#282828',
    },
    primary: {
      main: '#4285F4',
    },
    secondary: {
      main: '#EA4335',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            padding: 2,
            flexWrap: "wrap",
            gap: 2,
            minHeight: 'calc(100vh - 64px)',
            backgroundColor: darkTheme.palette.background.default,
          }}
        >
          <Box sx={{ width: { xs: '100%', sm: '48%' }, minHeight: '300px', border: '1px solid #444', borderRadius: '8px', p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: darkTheme.palette.background.paper, color: 'white' }}>
            <ChessBoard />
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '48%' }, minHeight: '300px', display: 'flex', justifyContent: 'start', alignItems: 'center', color: 'white' }}>
            <GameDetails />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;