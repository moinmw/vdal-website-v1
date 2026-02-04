"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";
import {
  Layers as LayersIcon,
  TrendingUp as TrendingUpIcon,
  Timeline as TimelineIcon,
} from "@mui/icons-material";

const ClosingStatement: React.FC = () => {
  const colors = {
    primary: "#263C70",
    secondary: "#9DC668",
    tertiary: "#4EB8BC",
    quaternary: "#7B5F96",
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: { xs: 4, md: "30px" },
            p: { xs: 5, md: 8 },
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(circle at top left, #f4f3ff 0%, transparent 45%), \
               radial-gradient(circle at bottom left, #e9f7e9 0%, transparent 50%), \
               radial-gradient(circle at top right, #e8f7fb 0%, transparent 45%), \
               #f5f7fb",
            boxShadow: "0 32px 80px rgba(15, 23, 42, 0.12)",
          }}
        >
          {/* Floating icons */}
          <Box
            sx={{
              position: "absolute",
              top: "16%",
              left: "8%",
              width: 72,
              height: 72,
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, #b697ff 0%, #7b5f96 100%)",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-18deg)",
              boxShadow: "0 18px 40px rgba(124, 58, 237, 0.4)",
            }}
          >
            <LayersIcon sx={{ fontSize: 34, color: "white" }} />
          </Box>

          <Box
            sx={{
              position: "absolute",
              bottom: "12%",
              left: "18%",
              width: 68,
              height: 68,
              borderRadius: "22px",
              background:
                "linear-gradient(135deg, #b6f0a4 0%, #4caf50 100%)",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(12deg)",
              boxShadow: "0 18px 40px rgba(22, 163, 74, 0.35)",
            }}
          >
            <TrendingUpIcon sx={{ fontSize: 32, color: "white" }} />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "26%",
              right: "12%",
              width: 70,
              height: 70,
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, #65d6ff 0%, #0f766e 100%)",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              transform: "rotate(-10deg)",
              boxShadow: "0 18px 40px rgba(8, 47, 73, 0.4)",
            }}
          >
            <TimelineIcon sx={{ fontSize: 32, color: "white" }} />
          </Box>

          {/* Content */}
          <Stack spacing={4} alignItems="center">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.2rem" },
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#0F172A",
                maxWidth: "760px",
              }}
            >
              The strategic backbone for enterprise data access
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#4B5563",
                fontSize: { xs: "15px", md: "18px" },
                fontWeight: 400,
                lineHeight: 1.7,
                maxWidth: "760px",
              }}
            >
              VDAL is the strategic backbone for governed, real-time, AI-ready
              enterprise data access — unifying analytics, automation, semantics,
              and compliance without disrupting existing data estates.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                backgroundColor: colors.primary,
                color: "white",
                textTransform: "none",
                borderRadius: "999px",
                px: 5,
                py: 1.8,
                fontSize: "17px",
                fontWeight: 600,
                boxShadow: "0 8px 24px rgba(15, 23, 42, 0.35)",
                "&:hover": {
                  backgroundColor: "#1E3058",
                  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.45)",
                },
              }}
            >
              Book a Demo
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ClosingStatement;
