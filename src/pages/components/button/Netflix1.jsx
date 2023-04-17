import {Button} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Netflix1 = () => {
  return (
    <Button
      sx={{
        height: "48px",
        backgroundColor: "rgb(229, 9, 20)",
        color: "white",
        fontSize: "1.25em",
        fontWeight: "bold",
        fontFamily: "Roboto, sans-serif",
        border: "none",
        borderRadius: "0.2em",
        padding: "1em",
        "&:hover": {
          backgroundColor: "rgba(229, 9, 20)",
          filter: "grayscale(0.1)"
        }
      }}
      endIcon={<ArrowForwardIosIcon/>}
    >
      Get Started
    </Button>
  );
}