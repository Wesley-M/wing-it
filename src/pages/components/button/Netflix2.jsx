import {Button} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export const Netflix2 = () => {
  return (
    <Button
      sx={{
        height: "36px",
        backgroundColor: "rgba(109, 109, 110, 0.7)",
        color: "white",
        fontSize: "1em",
        fontFamily: "Roboto, sans-serif",
        border: "none",
        borderRadius: "0.2em",
        padding: "0.25em 1em",
        "& .MuiButton-startIcon>*:nth-of-type(1)": {
          fontSize: "24px"
        },
        "&:hover": {
          backgroundColor: "rgba(109, 109, 110, 0.8)",
        }
      }}
      startIcon={<InfoOutlinedIcon/>}
    >
      More informations
    </Button>
  );
}