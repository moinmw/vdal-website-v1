"use client";
import React from "react";
import { Box, Typography, Container, Stack, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const WhoBenefits: React.FC = () => {
  const colors = {
    primary: "#263C70",
    secondary: "#9DC668",
    tertiary: "#4EB8BC",
    quaternary: "#7B5F96",
  };

  const beneficiaries = [
    {
      title: "Large Enterprises",
      description:
        "Operate seamlessly across hybrid and multi-domain data landscapes with a single governed backbone.",
      avatar: "ENT",
      avatarColor: "#263C70",
    },
    {
      title: "Business Analysts",
      description:
        "Self-service access with consistent KPIs across dashboards and enterprise reports.",
      avatar: "BI",
      avatarColor: "#4EB8BC",
    },
    {
      title: "Digital & Product Teams",
      description:
        "Integrate data once and inherit governance automatically across all digital use cases.",
      avatar: "DX",
      avatarColor: "#9DC668",
    },
    {
      title: "AI & Advanced Analytics",
      description:
        "Trusted, real-time analytical access for AI workloads within security boundaries.",
      avatar: "AI",
      avatarColor: "#7B5F96",
    },
    {
      title: "Audit & Regulatory Teams",
      description:
        "Centralized transparency, lineage, and traceability for governed analytics.",
      avatar: "AUD",
      avatarColor: "#6B7280",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
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
          {/* LEFT SIDE */}
          <Box>
            <Stack spacing={4}>
              {/* Pill chip */}
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
                  Who It&apos;s For
                </Typography>
              </Box>

              {/* Heading */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    color: "#000000c9",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Built for the entire <br /> data organization
                </Typography>
              </Box>

              {/* Subheading */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#4B5563",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1.7,
                    maxWidth: "520px",
                  }}
                >
                  VDAL serves every team that works with enterprise data, from
                  engineers to analysts to compliance officers.
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* RIGHT SIDE */}
          <Box>
            {/* Motion wrapper for the card container to preserve layout integrity */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                backgroundColor: "#F5F5F7",
                borderRadius: "32px",
                p: { xs: 2.5, md: 3 },
                border: "1.5px solid #d7d8db",
                maxWidth: 520,
                ml: { md: "auto" }, // push slightly to the right on desktop
              }}
            >
              <Stack spacing={2}>
                {beneficiaries.map((beneficiary, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1, // stagger each row by 0.1s
                    }}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: { xs: 1.5, md: 2 },
                      py: { xs: 1.2, md: 1.4 },
                      borderRadius: "32px",
                      overflow: "hidden",
                      background: "#fff",
                    }}
                  >
                    {/* Left avatar */}
                    <Avatar
                      sx={{
                        width: 46,
                        height: 46,
                        backgroundColor: beneficiary.avatarColor,
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "16px",
                        boxShadow: "0 8px 20px rgba(15, 23, 42, 0.25)",
                        mr: 2,
                        flexShrink: 0,
                      }}
                    >
                      {beneficiary.avatar}
                    </Avatar>

                    {/* Text block */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: "#111827",
                          fontSize: "16px",
                          lineHeight: 1.3,
                        }}
                      >
                        {beneficiary.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#6B7280",
                          fontSize: "13px",
                          mt: 0.2,
                          lineHeight: 1.5,
                        }}
                      >
                        {beneficiary.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoBenefits;