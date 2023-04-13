import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box} from "@mui/material";

export const SourceCodeDialog = ({ open, onClose, component, Source }) => {
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid var(--divider)",
                borderRadius: "5px",
                width: "100%",
                height: "auto",
                marginBottom: "1em",
                padding: "1em"
              }}
            >
              {component}
            </Box>
            <Source/>
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