import {Button} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export const Twitter1 = () => {
  return (
    <Button
      sx={{
        height: "48px",
        backgroundColor: "transparent",
        color: "rgb(15, 20, 25)",
        fontSize: "1.2em",
        fontFamily: "Roboto, sans-serif",
        border: "none",
        borderRadius: "2em",
        padding: "0.5em 1em",
        "& .MuiButton-startIcon>*:nth-of-type(1)": {
          fontSize: "24px"
        },
        "&:hover": {
          backgroundColor: "#00000022",
        }
      }}
      startIcon={<HomeIcon/>}
    >
      Home
    </Button>
  );
}