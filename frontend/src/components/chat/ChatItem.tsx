import { Box , Avatar} from "@mui/material";
import React from "react";

const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  return role === "assitant" ? (
    <Box
      sx={{ display: "flex", p: 2, bgcolor: "#004d5612", my: 2, gap: 2 }}
    >
      <Avatar sx></Avatar>
    </Box>
  ) : (
    <></>
  );
};

export default ChatItem;
