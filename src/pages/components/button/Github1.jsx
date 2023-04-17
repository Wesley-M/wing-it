import {Button} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Github1 = () => {
  return (
    <Button
      tag="Button"
      sx={{
        height: "32px",
        backgroundColor: "#347d39",
        color: "white",
        fontSize: "0.9em",
        fontFamily: "Roboto, sans-serif",
        border: "1px solid rgba(205,217,229,0.1)",
        borderRadius: "0.4em",
        padding: "0.25em 0.75em",
        "& .MuiButton-startIcon>*:nth-of-type(1)": {
          fontSize: "24px",
          marginRight: "-4px"
        },
        "& .MuiButton-endIcon>*:nth-of-type(1)": {
          marginLeft: "-8px"
        },
        "&:hover": {
          backgroundColor: "#46954a",
        }
      }}
      startIcon={<CodeIcon tag="CodeIcon"/>}
      endIcon={<ArrowDropDownIcon tag="ArrowDropDownIcon"/>}
    >
      Code
    </Button>
  );
}