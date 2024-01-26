import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const auth = useAuth();
  return role === "assistant" ? (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004d5612", my: 2, gap: 2 }}>
      <Avatar sx={{ ml: "0" }}>
        <img src="openai.png" alt="openai" width={"30px"} />
        <Box>
          <Typography fontSize={"20px"}>{content}</Typography>
        </Box>
      </Avatar>
    </Box>
  ) : (
    <Box sx={{ display: "flex", p: 2, bgcolor: "#004d56", gap: 2 }}>
      <Avatar sx={{ ml: "0", bgcolor:"black", color:"white" }}>
      {auth?.user?.name[0]} {auth?.user?.name.split(" ")[1][0]}
        <Box>
          <Typography fontSize={"20px"}>{content}</Typography>
        </Box>
      </Avatar>
    </Box>
  );
};

export default ChatItem;
