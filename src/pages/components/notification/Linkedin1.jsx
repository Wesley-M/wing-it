import {Avatar, Box, IconButton, Stack, Typography} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const Linkedin1 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "fit-content",
        maxWidth: "100%",
        height: "80px",
        borderRadius: "0.25em",
        border: "1px solid #28282820"
      }}
    >
      <Avatar
        alt="Company"
        src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAADqOZP5J1jpVQKaKm9bNEkz91w.png"
        variant="square"
        sx={{width: 60, height: 60, margin: "10px"}}
      />

      <Typography
        sx={{
          fontSize: "0.9em",
          overflow: "hidden",
          whiteSpace: "nowrap"
        }}
      >
        <strong>Resumo de:</strong> quinta-feira: Páscoa com menos vagas temporárias;<br/>
        chuva no feriadão e outras notícias.
      </Typography>

      <Stack sx={{padding: "0 1em"}} alignItems="center">
        <Typography sx={{color: "gray", fontSize: "0.8em"}}>5 d</Typography>
        <IconButton aria-label="Show more button">
          <MoreHorizIcon/>
        </IconButton>
      </Stack>
    </Box>
  )
}