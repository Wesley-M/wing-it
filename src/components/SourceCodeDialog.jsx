import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Stack, Typography} from "@mui/material";

export const SourceCodeDialog = ({open, onClose, Source, loading}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        scroll="paper"
        maxWidth="sm"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={{
          backdropFilter: "blur(2px)"
        }}
        fullWidth
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            color: "var(--text)",
            fontWeight: "bold",
            fontSize: "1.1em",
            opacity: 0.9
          }}
        >
          Source code
        </DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
            sx={{
              padding: "0 1em"
            }}
          >
            {loading ? (
              <Stack direction="row" alignItems="center" gap={2}>
                <img style={{ width: "3em", height: "3em" }} src="/github-loading.gif"/>
                <Typography sx={{ fontWeight: "bold", opacity: 0.4 }}>Code is not available yet...</Typography>
              </Stack>
            ) : (
              <Source/>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Copy</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}