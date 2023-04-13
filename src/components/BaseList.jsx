import {Stack} from "@mui/material";

export const BaseList = ({children}) => {
  return (
    <Stack gap={1}>
      {children}
    </Stack>
  )
}