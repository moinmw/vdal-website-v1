"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  TextField,
  Button,
  Link,
  Divider,
} from "@mui/material";
// using CSS Grid via Box instead of MUI Grid to avoid Grid v2 warnings

const Footer: React.FC = () => {
  const colors = {
    primary: "#0F265A", // closer to design navy
    secondary: "#9DC668",
    tertiary: "#4EB8BC",
    quaternary: "#7B5F96",
  };

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About us", id: "about" },
    { label: "Solutions", id: "solutions" },
    // { label: "How it works", id: "how-it-works" },
    { label: "Our clients", id: "clients" },
  ];

  const helpLinks = ["Security", "Privacy Policy", "Terms of Service", "Compliance"];

  return (
    <Box sx={{ backgroundColor: colors.primary, color: "white" }}>
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 4, md: 8 },
            }}
          >
            {/* Left Section - Logo & Description */}
            <Box>
              <Stack spacing={3}>
                {/* Logo (SVG) */}
                <Box>
                  <Box
                    component="img"
                    src="/images/VDAL-Logo-Dark copy.svg"
                    alt="VDAL logo"
                    sx={{
                      width: 160,
                      maxWidth: '100%',
                      height: 'auto',
                      display: 'block',
                      mb: 0.5,
                    }}
                  />
                  
                </Box>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#D1D5DB",
                    lineHeight: 1.7,
                    fontSize: "15px",
                    maxWidth: 320,
                  }}
                >
                  VDAL Unified, governed, real-time enterprise data access
                  without data movement.
                </Typography>
              </Stack>
            </Box>

            {/* Middle Section - Quick Links & Help */}
            <Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 3,
                }}
              >
                {/* Quick Links */}
                <Box>
                  <Stack spacing={2}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "white",
                      }}
                    >
                      Quick Links
                    </Typography>
                    <Stack spacing={1.5}>
                      {quickLinks.map((link) => (
                        <Link
                          key={link.id}
                          component="button"
                          onClick={() => {
                            const el = document.getElementById(link.id);
                            if (el) {
                              el.scrollIntoView({ behavior: "smooth", block: "start" });
                            }
                          }}
                          sx={{
                            color: "#E5E7EB",
                            textDecoration: "none",
                            fontSize: "15px",
                            textAlign: "left",
                            padding: 0,
                            minWidth: 0,
                            '&:hover': {
                              color: colors.secondary,
                            },
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                </Box>

                {/* Help */}
                <Box>
                  <Stack spacing={2}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        fontSize: "16px",
                        color: "white",
                      }}
                    >
                      Help
                    </Typography>
                    <Stack spacing={1.5}>
                      {helpLinks.map((link) => (
                        <Link
                          key={link}
                          href="#"
                          sx={{
                            color: "#E5E7EB",
                            textDecoration: "none",
                            fontSize: "15px",
                            "&:hover": {
                              color: colors.secondary,
                            },
                          }}
                        >
                          {link}
                        </Link>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>

            {/* Right Section - Newsletter */}
            <Box>
              <Stack spacing={3}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#D1D5DB",
                    lineHeight: 1.7,
                    fontSize: "15px",
                    maxWidth: 320,
                  }}
                >
                  Stay informed on modern data access, analytics, and AI
                  readiness.
                </Typography>

                {/* Email Subscription – pill with white border */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "999px",
                    border: "2px solid #FFFFFF",
                    overflow: "hidden",
                    backgroundColor: "transparent",
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,
                      backgroundColor: "#FFFFFF",
                      px: 2.5,
                      py: 1.2,
                    }}
                  >
                    <TextField
                      placeholder="Enter your email"
                      variant="standard"
                      fullWidth
                      InputProps={{ disableUnderline: true }}
                      sx={{
                        "& .MuiInputBase-input": {
                          fontSize: "14px",
                          color: "#374151",
                          "&::placeholder": {
                            color: "#9CA3AF",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      // borderRadius: "999px",
                      borderTopRightRadius: "999px",
                      borderBottomRightRadius: "999px",
                      px: 4,
                      py: 1.5,
                      fontSize: "14px",
                      fontWeight: 600,
                      textTransform: "none",
                      backgroundColor: colors.primary,
                      
                      boxShadow: "none",
                      minWidth: 120,
                      "&:hover": {
                        backgroundColor: "#0B1C44",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Bottom Section */}
        <Divider sx={{ borderColor: "#2B3F73", mb: 3 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            pb: 4,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#D1D5DB",
              fontSize: "13px",
            }}
          >
            © 2026 VDAL. All rights reserved.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#D1D5DB",
              fontSize: "13px",
            }}
          >
            Enterprise-grade security &amp; compliance
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;