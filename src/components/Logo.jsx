import {Typography} from "@mui/material";

export const Logo = ({ color }) => {
  return (
    <Typography
      sx={{
        fontFamily: "Lobster, cursive",
        color: color ?? "primary.main",
        fontSize: "1.5em"
      }}
    >
      Wing It!
    </Typography>
  );
}