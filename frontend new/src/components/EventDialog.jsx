import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const EventDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleParticipate = () => {
    // Add your participation logic here
    console.log("User participated in the event!");
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Open Event Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Event Participation</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to participate in this event?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleParticipate} color="secondary" variant="contained">
            Participate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EventDialog;
