"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export default function ContactSection() {
  const primary = "#9DC668"; // green accent
  const darkText = "#0F172A";
  const mutedText = "#64748B";

  return (
    <Box
      id="contact"
      sx={{
        background: "#ffffff",
        py: { xs: 8, md: 12 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 10 },
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={4}>
              <Box>
                <Typography
                  variant="h2"
                  fontWeight={800}
                  sx={{
                    mb: 2,
                    fontSize: { xs: "2.3rem", md: "3.2rem" },
                    color: darkText,
                  }}
                >
                  Get in touch
                </Typography>
                <Typography sx={{ color: mutedText, fontSize: "1.1rem" }}>
                  Have a question or just want to say hello? Reach out anytime.
                </Typography>
              </Box>

              {[
                {
                  icon: <EmailIcon sx={{ color: primary }} />,
                  title: "Email us",
                  value: "info@master-works.sa",
                },
                {
                  icon: <LocationOnIcon sx={{ color: primary }} />,
                  title: "Address",
                  value: "6319, Alyasmin, Riyadh 13322 2756",
                },
                {
                  icon: <PhoneIcon sx={{ color: primary }} />,
                  title: "Mobile",
                  value: "+966 11 400 0014",
                },
              ].map((item, i) => (
                <Stack key={i} direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      bgcolor: `${primary}20`,
                      p: 2,
                      borderRadius: "12px",
                      border: `1px solid ${primary}40`,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography fontWeight={700} color={darkText}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: mutedText }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* RIGHT SIDE FORM */}
          <Box
            sx={{
              flex: 1.2,
              width: "100%",
              bgcolor: "#ffffff",
              borderRadius: "24px",
              border: "1px solid #E2E8F0",
              p: { xs: 3, md: 4 },
              boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{ color: darkText }}
            >
              We are here to help you!
            </Typography>

            <Typography
              variant="caption"
              sx={{
                mb: 2,
                display: "block",
                color: mutedText,
              }}
            >
              We love to hear from you — let’s start the conversation.
            </Typography>

            <Stack spacing={1.4}>
              {[
                { label: "Name" },
                { label: "Email" },
                { label: "Phone Number" },
                { label: "Message", multiline: true },
              ].map((field) => (
                <Box key={field.label}>
                  <Typography
                    variant="caption"
                    fontWeight={700}
                    sx={{ mb: 0.5, display: "block", color: darkText }}
                  >
                    {field.label}
                  </Typography>

                  <TextField
                    fullWidth
                    variant="outlined"
                    multiline={field.multiline}
                    rows={field.multiline ? 3 : 1}
                    placeholder={field.label}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        color: darkText,
                      },
                    }}
                  />
                </Box>
              ))}

              <Button
                fullWidth
                sx={{
                  bgcolor: primary,
                  mt: 1.5,
                  py: 1.2,
                  borderRadius: "10px",
                  color: "#000",
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "#8BBE58",
                  },
                }}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
