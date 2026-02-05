"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, AnimatePresence } from "framer-motion";

export default function CoreCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  const colors = {
    primary: "#263C70",
    secondary: "#9DC668", // KEEP THIS
    tertiary: "#4EB8BC",
    quaternary: "#7B5F96",
  };

  const capabilities = [
    {
      title: "Single Unified Access Layer",
      desc: "One integration point for analysts, applications, reports, and AI workloads. Eliminate point-to-point complexity and reduce infrastructure overhead.",
    },
    {
      title: "Zero-Duplication Analytics",
      desc: "Live in-place data access without creating analytical data copies. Reduce storage costs and ensure your data is always fresh and never stale.",
    },
    {
      title: "KPI-Standardized Views",
      desc: "Certified business views with consistent KPI definitions. Ensure every department is looking at the same 'single version of the truth'.",
    },
    {
      title: "Governance Inheritance",
      desc: "Security and visibility rules are defined once at the source and inherited by every downstream data consumer automatically.",
    },
    {
      title: "AI-Safe Analytics",
      desc: "Query generation and insights delivered inside your security boundaries. Build AI workloads that respect enterprise-grade privacy.",
    },
    {
      title: "Central Monitoring",
      desc: "Source health and analytical workload behavior visibility.",
    },
    {
      title: "Enterprise-Scale Foundation",
      desc: "Horizontal scalability for analytics and AI workloads.",
    },
  ];

  return (
    <Box sx={{ background: "#FFFFFF", py: { xs: 8, md: 15 } }}>
      <Container maxWidth="lg">

        {/* TOP HEADING */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            fontWeight={800}
            sx={{ mb: 6, color: "#111827" }}
          >
            Core Strategic Capabilities
          </Typography>
        </Box>

        {/* CONTENT */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            alignItems: "flex-start",
          }}
        >
          {/* LEFT MENU */}
          <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 40%" }, width: "100%" }}>
            <Stack spacing={0.5}>
              {capabilities.map((cap, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  sx={{
                    px: 2,
                    py: 1.4,
                    cursor: "pointer",
                    borderRadius: "10px",
                    borderLeft: "3px solid",
                    borderColor:
                      activeIndex === index
                        ? colors.secondary
                        : "transparent",
                    background:
                      activeIndex === index
                        ? "rgba(157, 198, 104, 0.15)"
                        : "transparent",
                    transition: "all 0.2s ease-in-out",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.05rem",
                      lineHeight: 1.3,
                      fontWeight: activeIndex === index ? 700 : 500,
                      color:
                        activeIndex === index
                          ? "#111827"
                          : "#374151",
                    }}
                  >
                    {cap.title}
                  </Typography>

                  {activeIndex === index && (
                    <ChevronRightIcon
                      sx={{
                        fontSize: "20px",
                        color: colors.secondary,
                      }}
                    />
                  )}
                </Box>
              ))}
            </Stack>
          </Box>

          {/* RIGHT CONTENT */}
          <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 60%" }, width: "100%" }}>
            {/* Card wrapper animates on first view; inner content transitions on index change */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: "24px",
                background:
                  "linear-gradient(135deg, #f8f9fa 0%, #f8fafc 100%)",
                border: "1.2px solid #d7d8db",
                minHeight: "320px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <AnimatePresence mode="wait">
                <Box
                  key={activeIndex}
                  component={motion.div}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Typography
                    variant="h4"
                    fontWeight={700}
                    sx={{
                      mb: 3,
                      color: colors.secondary, // KEEP GREEN
                    }}
                  >
                    {capabilities[activeIndex].title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#374151",
                      lineHeight: 1.8,
                      fontSize: "1.15rem",
                    }}
                  >
                    {capabilities[activeIndex].desc}
                  </Typography>
                </Box>
              </AnimatePresence>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}