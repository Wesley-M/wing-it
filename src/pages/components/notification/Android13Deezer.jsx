import {Box, IconButton, Stack, Typography} from "@mui/material";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import MediaBluetoothOnIcon from "@mui/icons-material/MediaBluetoothOn";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";

export const Android13Deezer = () => {
  return (
    <Stack
      direction="column"
      sx={{
        padding: "0 1em",
        width: "300px",
        height: "130px",
        borderRadius: "1.25em",
        backgroundImage: "url(https://picsum.photos/id/62/300/130)",
        "& .MuiTypography-root": {
          fontFamily: "Roboto, sans-serif"
        }
      }}
    >
      <Stack
        direction="column"
        gap={0.2}
        sx={{
          display: "inline-flex",
          flex: 1,
          marginTop: "1em",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.75em",
            fontWeight: "bold",
            color: "white",
            opacity: 0.5
          }}
        >
          Deezer
        </Typography>

        <Typography
          sx={{
            fontSize: "1.2em",
            fontWeight: "bolder",
            color: "white"
          }}
        >
          Wuthering Heights
        </Typography>

        <Typography
          sx={{
            fontSize: "0.7em",
            fontWeight: "bold",
            color: "white",
            opacity: 0.7
          }}
        >
          Anna Maz
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          flex: 1,
          "& .MuiSvgIcon-root": {
            color: "white",
            opacity: 0.9
          }
        }}
      >
        <Box>
          <IconButton tag="IconButton" aria-label="skip previous">
            <SkipPreviousOutlinedIcon tag="SkipPreviousOutlinedIcon"/>
          </IconButton>
          <IconButton tag="IconButton" aria-label="play">
            <PlayArrowRoundedIcon tag="PlayArrowRoundedIcon"/>
          </IconButton>
          <IconButton tag="IconButton" aria-label="skip next">
            <SkipNextOutlinedIcon tag="SkipNextOutlinedIcon"/>
          </IconButton>
        </Box>
        <IconButton tag="IconButton" aria-label="bluetooth">
          <MediaBluetoothOnIcon tag="MediaBluetoothOnIcon"/>
        </IconButton>
      </Stack>
    </Stack>
  );
}