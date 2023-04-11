import {Typography} from "@mui/material";

export const Paragraph = ({children}) => {
  return (
    <Typography sx={{ opacity: "0.6" }}>{children}</Typography>
  );
}