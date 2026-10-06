import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert, Box, Button, Chip, Container, Divider, Paper, Stack, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import Navbar from "../components/Navbar";
import { doctors } from "../data/doctors";

const timeSlots = ["09:00 AM", "10:30 AM", "12:00 PM", "03:00 PM", "04:30 PM", "06:00 PM"];

function getBookingDates() {
  const dates = [];
  const date = new Date();
  while (dates.length < 7) {
    date.setDate(date.getDate() + 1);
    if (date.getDay() !== 0) dates.push(new Date(date));
  }
  return dates;
}

function DoctorDetail() {
  const { id } = useParams();
  const doctor = doctors.find((item) => item.id === Number(id));
  const dates = getBookingDates();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patient, setPatient] = useState({ name: "", phone: "", reason: "" });
  const [confirmed, setConfirmed] = useState(false);

  if (!doctor) {
    return <Container sx={{ py: 10, textAlign: "center" }}><Typography variant="h4" sx={{ mb: 2 }}>Doctor not found</Typography><Button component={Link} to="/doctors" variant="contained">Browse doctors</Button></Container>;
  }

  const canBook = selectedDate && selectedTime && patient.name.trim() && patient.phone.trim();
  const formattedDate = selectedDate ? new Date(`${selectedDate}T12:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }) : "";
  const updatePatient = (field, value) => setPatient({ ...patient, [field]: value });
  const handleBooking = (event) => {
    event.preventDefault();
    if (canBook) setConfirmed(true);
  };

  return (
    <>
      <Navbar />
      <Box sx={{ background: "linear-gradient(180deg, #f4f8ff 0, #fff 360px)", minHeight: "calc(100vh - 70px)", py: { xs: 3, md: 6 } }}>
        <Container maxWidth="lg">
          <Button component={Link} to="/doctors" startIcon={<ArrowBackIcon />} sx={{ mb: 3, color: "#475569", textTransform: "none" }}>Back to all doctors</Button>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 390px" }, gap: { xs: 3, md: 5 }, alignItems: "start" }}>
            <Paper elevation={0} sx={{ border: "1px solid #dce7f7", borderRadius: 3, overflow: "hidden" }}>
              <Box sx={{ display: { xs: "block", sm: "flex" } }}>
                <Box component="img" src={doctor.image} alt={doctor.name} sx={{ width: { xs: "100%", sm: 245 }, height: { xs: 260, sm: 260 }, objectFit: "cover", display: "block" }} />
                <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                  <Chip icon={<VerifiedIcon />} label="Verified specialist" size="small" sx={{ mb: 1.5, color: "#087f5b", backgroundColor: "#e8f8f1", fontWeight: 600 }} />
                  <Typography variant="h4" sx={{ fontSize: { xs: 28, md: 34 }, fontWeight: 800, color: "#172033" }}>{doctor.name}</Typography>
                  <Typography sx={{ color: "primary.main", fontWeight: 700, mt: 0.5 }}>{doctor.specialty}</Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>{doctor.experience} | {doctor.years} years experience</Typography>
                  <Typography sx={{ mt: 2, fontWeight: 700 }}>Rs {doctor.fee} <Typography component="span" color="text.secondary" fontWeight={400}>consultation fee</Typography></Typography>
                </Box>
              </Box>
              <Divider />
              <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>About {doctor.name.split(" ")[1]}</Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>{doctor.about}</Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 3 }}>
                  <Box sx={{ flex: 1, p: 2, backgroundColor: "#f7faff", borderRadius: 2 }}><Typography variant="caption" color="text.secondary">QUALIFICATION</Typography><Typography sx={{ fontWeight: 700, mt: 0.5 }}>{doctor.education}</Typography></Box>
                  <Box sx={{ flex: 1, p: 2, backgroundColor: "#f7faff", borderRadius: 2 }}><Typography variant="caption" color="text.secondary">AVAILABILITY</Typography><Typography sx={{ fontWeight: 700, mt: 0.5, color: "#087f5b" }}>Available today</Typography></Box>
                </Stack>
              </Box>
            </Paper>

            <Paper component="form" onSubmit={handleBooking} elevation={0} sx={{ border: "1px solid #dce7f7", borderRadius: 3, p: { xs: 2.5, sm: 3 }, position: { md: "sticky" }, top: { md: 24 } }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#172033" }}>Book an appointment</Typography>
              <Typography color="text.secondary" sx={{ mt: 0.5, mb: 2.5 }}>Choose a convenient time with {doctor.name}.</Typography>
              {confirmed && <Alert icon={<CheckCircleIcon />} severity="success" sx={{ mb: 2 }}>Appointment request received for {formattedDate} at {selectedTime}.</Alert>}
              <Typography sx={{ fontWeight: 700, mb: 1 }}>Select a date</Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, mb: 2.5 }}>
                {dates.map((date) => {
                  const value = date.toISOString().slice(0, 10);
                  const active = selectedDate === value;
                  return <Button key={value} type="button" onClick={() => { setSelectedDate(value); setConfirmed(false); }} variant={active ? "contained" : "outlined"} sx={{ minWidth: 0, py: 1.1, borderRadius: 2, textTransform: "none", flexDirection: "column", lineHeight: 1.2, borderColor: "#d7e1ef" }}><Typography variant="caption">{date.toLocaleDateString("en-US", { weekday: "short" })}</Typography><Typography fontWeight={800}>{date.getDate()}</Typography></Button>;
                })}
              </Box>
              <Typography sx={{ fontWeight: 700, mb: 1 }}>Select a time</Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, mb: 2.5 }}>
                {timeSlots.map((time) => <Button key={time} type="button" onClick={() => { setSelectedTime(time); setConfirmed(false); }} variant={selectedTime === time ? "contained" : "outlined"} sx={{ borderRadius: 2, textTransform: "none", borderColor: "#d7e1ef" }}>{time}</Button>)}
              </Box>
              <Divider sx={{ mb: 2.5 }} />
              <Stack spacing={1.5}>
                <TextField label="Patient name" required fullWidth value={patient.name} onChange={(event) => updatePatient("name", event.target.value)} />
                <TextField label="Phone number" required fullWidth value={patient.phone} onChange={(event) => updatePatient("phone", event.target.value)} />
                <TextField label="Reason for visit (optional)" fullWidth multiline minRows={2} value={patient.reason} onChange={(event) => updatePatient("reason", event.target.value)} />
              </Stack>
              <Button type="submit" fullWidth variant="contained" size="large" startIcon={<CalendarMonthIcon />} disabled={!canBook} sx={{ mt: 2.5, py: 1.4, borderRadius: 2, textTransform: "none", fontWeight: 700 }}>Confirm appointment</Button>
              <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center", mt: 1.5 }}>You will receive a confirmation call from our team.</Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default DoctorDetail;
