"use client";
import React from "react";
import { Box, Typography, Container, Stack, Button } from "@mui/material";
import {
  Layers as LayersIcon,
  Dashboard as DashboardIcon,
  Storage as StorageIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const Solutions: React.FC = () => {
  const colors = {
    primary: "#263C70",
    secondary: "#9DC668",
    iconBg: "linear-gradient(135deg, #A88BEB 0%, #7B5F96 100%)",
  };

  const solutions = [
    {
      icon: <LayersIcon sx={{ fontSize: 28, color: "white" }} />,
      title: "Unified Governed Access Backbone",
      description:
        "A single governed access layer delivering real-time access to trusted enterprise data with zero duplication for analytical consumption.",
    },
    {
      icon: <DashboardIcon sx={{ fontSize: 28, color: "white" }} />,
      title: "Consistent Governance & KPI Standardization",
      description:
        "Unified governance inherited across every query, KPI, dataset, and report, with standardized KPI-led data products for enterprise reporting.",
    },
    {
      icon: <StorageIcon sx={{ fontSize: 28, color: "white" }} />,
      title: "Safe, Scalable AI-Ready Analytics",
      description:
        "AI-driven analytics delivered within governance boundaries, horizontally scalable to support enterprise and AI workloads.",
    },
  ];

  return (
    <Box
      id="solutions"
      sx={{
        py: { xs: 8, md: 15 },
        backgroundColor: "#FFFFFF",
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          {/* LEFT: Feature List */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {/* Motion wrapper for the card container without altering layout/colors */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                p: { xs: 4, md: 6 },
                background: `linear-gradient(135deg, #f7f7f7 10%, #f5f7fb 25%,#e3edf7 50%,#cddff0 75%,#bfcfe5 100%)`,
                borderRadius: "32px",
                boxShadow: "0 20px 80px rgba(0, 0, 0, 0.03)",
                border: "1.2px solid #d7d8db",
                width: "100%",
                maxWidth: 520,
              }}
            >
              <Stack spacing={5}>
                {solutions.map((solution, index) => (
                  // Staggered fade-in + slide-up per item
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1, // 0.1s stagger
                    }}
                    sx={{ display: "flex", gap: 3 }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        background: colors.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {solution.icon}
                    </Box>

                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: "#000",
                          mb: 0.5,
                          fontSize: "18px",
                        }}
                      >
                        {solution.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#6B7280",
                          lineHeight: 1.5,
                          fontSize: "15px",
                        }}
                      >
                        {solution.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>

          {/* RIGHT: Heading / CTA */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            {/* Motion wrapper for the right column content */}
            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              spacing={4}
              alignItems={{ xs: "flex-start", md: "flex-start" }}
              sx={{ maxWidth: 480 }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
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
                  OUR SOLUTION
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  color: "#000",
                  letterSpacing: "-0.02em",
                }}
              >
                VDAL Solution Overview
              </Typography>

              <Typography
                sx={{
                  color: "#6B7280",
                  fontSize: "1.125rem",
                  lineHeight: 1.6,
                  maxWidth: "420px",
                }}
              >
                Transforming enterprise data landscapes by 
                eliminating redundant integrations and ensuring consistent security for every consumer.
              </Typography>

              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: colors.primary,
                  borderRadius: "12px",
                  px: 5,
                  py: 2,
                  fontSize: "16px",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#1E2F56",
                  },
                }}
              >
                Try for free
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Solutions;