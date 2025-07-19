import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Paper,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Flag,
  NavigateBefore,
  NavigateNext,
  FirstPage,
  LastPage,
  SportsEsports,
  Person,
  Add,
  Grid4x4,
  HelpOutline,
} from "@mui/icons-material";
import StartGame from "../store/Options";
import startGame from "../store/Options";

export default function GameDetails() {
    const [tabvalue, setTabValue] = useState(0);
    const handleChange = async (event, newValue) => {
      setTabValue(newValue);
      switch (newValue) {
        case 0:
            console.log("Playing");
          break;
        case 1:
            const player1 = "Player1";
            const player2 = "Player2";
            const gameId = "game123";
            const newGame = await startGame(player1, player2, gameId);
          break;
        case 2:
          // Handle Games tab
          break;
        case 3:
          // Handle Players tab
          break;
        default:
          break;
      }
    }
  const moveList = [
    ["d4", "d5"],
    ["e4", "♝g4"],
    ["e5", "♝xd1"],
    ["♔xd1", "♛d6"],
    ["♘c3", "♝h6"],
    ["♘xh6", "♙xh6"],
    ["♙xd5", "♙f5"],
    ["♘xc7+", "♚d7"],
    ["♘xa8", ""],
  ];

  return (
    <Paper
      sx={{
        width: 400,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1e1e1e",
         border: '1px solid #444', borderRadius: '8px',
        color: "#fff",
        overflow: "hidden",
      }}
      elevation={5}
    >
      <Tabs onChange={handleChange} value={0} variant="fullWidth" textColor="inherit" sx={{ minHeight: 48 }}>
        <Tab icon={<SportsEsports />} label="Play" />
        <Tab icon={<Add />} label="New Game" />
        <Tab icon={<Grid4x4 />} label="Games" />
        <Tab icon={<Person />} label="Players" />
      </Tabs>

      <Box p={1} px={2} display="flex" alignItems="center" gap={1}>
        <Typography variant="subtitle2" color="grey.400">
          Queen's Pawn Opening: Blackmar Gambit
        </Typography>
        <HelpOutline sx={{ fontSize: 16, color: "gray" }} />
      </Box>

      <Box
        flex={1}
        overflow="auto"
        px={2}
        py={1}
        sx={{
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": { width: "6px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#444",
            borderRadius: 3,
          },
        }}
      >
        {moveList.map(([white, black], index) => (
          <Box key={index} display="flex" py={0.5}>
            <Typography width={24}>{index + 1}.</Typography>
            <Typography flex={1}>{white}</Typography>
            <Typography flex={1}>{black}</Typography>
          </Box>
        ))}
      </Box>

      <Box px={2} py={1}>
        <Divider sx={{ borderColor: "#444" }} />
        <Stack direction="row" spacing={1} mt={1}>
          <Button
            variant="text"
            size="small"
            startIcon={<Typography variant="body2">½</Typography>}
            sx={{ color: "white", textTransform: "none" }}
          >
            Draw
          </Button>
          <Button
            variant="text"
            size="small"
            startIcon={<Flag />}
            sx={{ color: "white", textTransform: "none" }}
          >
            Resign
          </Button>
          <Box flex={1} display="flex" justifyContent="flex-end" gap={1}>
            <IconButton size="small" sx={{ color: "white" }}>
              <FirstPage fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "white" }}>
              <NavigateBefore fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "white" }}>
              <NavigateNext fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "white" }}>
              <LastPage fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      </Box>

      <Box mt="auto" p={2} bgcolor="#2a2a2a">
        <Typography variant="subtitle2" fontWeight="bold">
          NEW GAME
        </Typography>
        <Typography variant="body2">
          priyanshnal2 (398) vs. ahjsbnmas-d (400) (10 min)
        </Typography>
        <Typography variant="caption" color="gray">
          win +174 / draw -1 / lose -176
        </Typography>
        <Typography variant="caption" color="gray" mt={1} display="block">
          Chat Disabled
        </Typography>
      </Box>
    </Paper>
  );
}
