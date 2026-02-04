"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,

} from "@mui/material";
import {
  Hub as HubIcon,
  Timeline as TimelineIcon,
  Layers as LayersIcon,
} from "@mui/icons-material";

// using CSS Grid via Box instead of MUI Grid to avoid Grid v2 warnings


const AboutVdal = () => {
  const colors = {
    primary: "#1A4B81",
    secondary: "#9DC668",
  };

  const features = [
    {
      icon: <HubIcon sx={{ fontSize: 32, color: "white" }} />,
      title: "Unified Access Backbone",
      description: "One secure, intelligent access backbone for all consumers.",
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 32, color: "white" }} />,
      title: "Real-Time Governed Analytics",
      description: "Real-time governed analytics on latest trusted data.",
    },
    {
      icon: <LayersIcon sx={{ fontSize: 32, color: "white" }} />,
      title: "Zero Disruption",
      description: "No disruption or duplication of source systems.",
    },
  ];

  return (
    <Box
      id="about"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f8f9fa", width: "100%" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          {/* 1. HEADER */}
          <Stack
            spacing={3}
            alignItems="center"
            sx={{ textAlign: "center", maxWidth: "900px" }}
          >
            <Box
              sx={{
                width: "fit-content",
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#E4F4D7",
                borderRadius: "999px",
                px: 2.5,
                py: 1,
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: colors.secondary,
                }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                ABOUT VDAL
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3.2rem" },
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Unifying{" "}
              <Box component="span" sx={{ color: colors.primary }}>
                enterprise data access
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#000", fontSize: "1.1rem" }}
            >
              VDAL is a modern, secure, and intelligent platform that unifies
              access to all enterprise data sources through a virtualized
              layer.enabling governed analytics, seamless integration, and
              real-time insights without moving data.
            </Typography>
          </Stack>

          {/* 2. FORCED ROW LAYOUT */}
          <Box
            sx={{
              mt: 4,
              width: "100%",
              maxWidth: "85vw",
              mx: "auto",
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              justifyContent: 'space-around',
              
            }}
          >
            {features.map((feature, index) => (
              <Box key={index} sx={{ display: "flex" }}>
                <Card
                  elevation={0}
                  sx={{
                    width: "100%", // Explicitly take full grid item width
                    borderRadius: 3,
                    border: "1px solid #d7d8db",
                    background: `
  radial-gradient(
  at top left,
  #f5f5f5 0%,
  #f4fff9 40%,
  #faf6ff 100%
);
`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: "12px",
                        backgroundColor: colors.primary,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#000",
                        mb: 2,
                        fontSize: "1.25rem",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#000", lineHeight: 1.6 }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutVdal;
