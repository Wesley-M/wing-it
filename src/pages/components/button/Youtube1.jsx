import {Button} from "@mui/material";

export const Youtube1 = () => {
  return (
    <Button
      tag="Button"
      sx={{
        height: "36px",
        backgroundColor: "#0f0f0f",
        color: "white",
        fontSize: "0.9em",
        fontWeight: "bold",
        fontFamily: "Roboto, sans-serif",
        border: "none",
        borderRadius: "1.5em",
        padding: "0.3em 1.5em",
        "&:hover": {
          backgroundColor: "#0f0f0fdd",
        }
      }}
    >
      Subscribe
    </Button>
  );
}