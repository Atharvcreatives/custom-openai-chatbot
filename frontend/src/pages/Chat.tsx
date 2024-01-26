//chat page
import React from "react";
import { Box, Avatar, Button, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
const chatMessages = [
  { role: "user", content: "Hello, can you tell me the weather today?" },
  { role: "assistant", content: "Sure! What is your location?" },
  { role: "user", content: "I'm in New York." },
  {
    role: "assistant",
    content:
      "Great! The weather in New York today is 75°F with partly cloudy skies.",
  },
  { role: "user", content: "Thanks! What about tomorrow?" },
  {
    role: "assistant",
    content:
      "Tomorrow's forecast for New York is 80°F with a chance of showers.",
  },
  { role: "user", content: "That's helpful. What else can you do?" },
  {
    role: "assistant",
    content:
      "I can provide information on a variety of topics, set reminders, and answer general questions. How can I assist you today?",
  },
];

const chat = () => {
  const auth = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        mt: 3,
        gap: 3,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none", sm: "none" },
          flex: 0.2,
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "60vh",
            bgcolor: "rgb(17,29,39)",
            borderRadius: 5,
            flexDirection: "column",
            mx: 3,
          }}
        >
          <Avatar
            sx={{
              mx: "auto",
              my: 2,
              bgcolor: "white",
              color: "black",
              fontWeight: 700,
            }}
          >
            {auth?.user?.name[0]} {auth?.user?.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
            You are talking to a ChatBOT
          </Typography>
          <Typography sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}>
            You can ask some questions related to Programming ,Education ,
            Knowledge , Business, Advices , Education , etc. AVOID SHARING
            PERSONAL INFO.
          </Typography>
          <Button
            sx={{
              width: "200px",
              my: "auto",
              color: "white",
              fontWeight: "700",
              borderRadius: 3,
              mx: "auto",
              bgcolor: red[300],
              ":hover": {
                bgcolor: red.A400,
              },
            }}
          >
            CLEAR CONVERSATION
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: { md: 0.8, xs: 1, sm: 1 },
          flexDirection: "column",
          px: 3,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "40px",
            color: "white",
            mb: 2,
            mx: "auto",
            fontWeight: "600",
          }}
        >
          Model - GPT 3.5 Turbo
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            borderRadius: 3,
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            overflowX: "hidden",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >{chatMessages.map((chat)=><div>{ chat.content}</div>)}</Box>
      </Box>
    </Box>
  );
};

export default chat;
