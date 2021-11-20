import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, setbookingDone }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper variant="outlined" sx={{ py: 5 }}>
          <Typography
            sx={{ color: "info.main", fontWeight: 500 }}
            variant="h5"
            component="h2"
          >
            {name}
          </Typography>
          <Typography variant="h6" component="h2">
            {time}
          </Typography>
          <Typography variant="caption" component="h2">
            {space} Spacees Availeble
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        booking={booking}
        setbookingDone={setbookingDone}
      />
    </>
  );
};

export default Booking;
