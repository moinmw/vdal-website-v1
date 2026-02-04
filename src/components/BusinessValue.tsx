"use client";

import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Engineering from "@mui/icons-material/Engineering";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const iconMap = [
  TrendingUpIcon,
  Engineering,
  CloudDoneIcon,
  VerifiedUserIcon,
  AutoAwesomeIcon,
];

export default function BusinessValue() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const metrics = [
    {
      value: "60%",
      label: "Faster time-to-insight",
      description:
        "Accelerated analytics delivery by removing data acquisition and integration delays.",
    },
    {
      value: "50%",
      label: "Reduction in integration effort",
      description:
        "Eliminated repeated data pipelines and redundant integration work.",
    },
    {
      value: "0",
      label: "Analytical data copies",
      description:
        "No additional storage overhead from analytical duplication.",
    },
    {
      value: "100%",
      label: "Audit readiness",
      description:
        "Centralized audit traceability for regulated reporting and compliance.",
    },
    {
      value: "AI-ready",
      label: "Analytics foundation",
      description:
        "Scalable, governed foundation for enterprise and AI workloads.",
    },
  ];

  return (
    <Box
      id="value"
      sx={{
        background: "#f8f9fa",
        py: { xs: 12, md: 16 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-50%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(58, 134, 243, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-25px)" },
          },
        },
       
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8}>
          {/* Section Title */}
          <Box
  sx={{
    animation: "slideInDown 0.8s ease-out",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    "@keyframes slideInDown": {
      "0%": { opacity: 0, transform: "translateY(-30px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  }}
>
  <Typography
    variant="h3"
    fontWeight={800}
    sx={{
      // fontSize: { xs: "2rem", md: "2.5rem" },
      background:"#000",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      mb: 2,
      display: "inline-block",

    }}
  >
    Measurable Business Value
  </Typography>

  <Typography
    sx={{
      color: "#000000",
      fontSize: { xs: "1rem", md: "1.1rem" },
      mt: 2,
      maxWidth: "700px",
      mx: "auto",
      lineHeight: 1.6,
      animation: "fadeInUp 0.8s ease-out 0.2s both",

      "@keyframes fadeInUp": {
        "0%": { opacity: 0, transform: "translateY(20px)" },
        "100%": { opacity: 1, transform: "translateY(0)" },
      },
    }}
  >
    Real, measurable outcomes that transform enterprise data operations
  </Typography>
</Box>


          {/* Metrics Grid */}
          <Grid container spacing={3}>
            {metrics.map((item, index) => {
              const IconComponent = iconMap[index];
              const isHovered = hoveredIndex === index;

              return (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      background: isHovered
                        ? "linear-gradient(135deg,#ffffff 0%, #f5f7fb 25%,#e3edf7 50%,#cddff0 75%,#bfcfe5 100%)"
                        : "rgba(58, 134, 243, 0.05)",
                      backdropFilter: "blur(10px)",
                      border: isHovered
                        ? "2px solid rgba(58, 134, 243, 0.3)"
                        : "1.5px solid rgba(51, 115, 204, 0.1)",
                      borderRadius: "16px",
                       
                      p: 4,
                      height: "100%",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both`,
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                        transition: "left 0.6s ease-in-out",
                      },
                      "&:hover": {
                        transform: "translateY(-12px)",
                        boxShadow: "0 30px 60px rgba(58, 134, 243, 0.2)",
                        background: "linear-gradient(135deg, rgba(58, 134, 243, 0.15) 0%, rgba(58, 134, 243, 0.05) 100%)",
                        border: "2px solid rgba(58, 134, 243, 0.3)",
                        "&::before": {
                          left: "100%",
                        },
                      },
                      "@keyframes fadeInUp": {
                        "0%": { opacity: 0, transform: "translateY(30px)" },
                        "100%": { opacity: 1, transform: "translateY(0)" },
                      },
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {/* Icon */}
                    <Box
                      sx={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "12px",
                        background: "linear-gradient(135deg, rgba(58, 134, 243, 0.2) 0%, rgba(58, 134, 243, 0.08) 100%)",
                        border: "1px solid rgba(58, 134, 243, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease-out",
                        transform: isHovered ? "scale(1.2) rotate(10deg)" : "scale(1)",
                        filter: isHovered
                          ? "drop-shadow(0 0 20px rgba(58, 134, 243, 0.5))"
                          : "drop-shadow(0 0 10px rgba(58, 134, 243, 0.3))",
                      }}
                    >
                      <IconComponent
                        sx={{
                          fontSize: "2rem",
                          color: "#9DC668",
                        }}
                      />
                    </Box>

                    {/* Value */}
                    <Box>
                      <Typography
                        variant="h2"
                        fontWeight={800}
                        sx={{
                          fontSize: { xs: "2.5rem", md: "3rem" },
                          background: "#9DC668",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          lineHeight: 1,
                          mb: 0.5,
                          transition: "all 0.3s ease-out",
                          transform: isHovered ? "scale(1.05)" : "scale(1)",
                        }}
                      >
                        {item.value}
                      </Typography>

                      {/* Accent line */}
                      <Box
                        sx={{
                          height: "3px",
                          background: "linear-gradient(90deg, #9DC668 0%, transparent 100%)",
                          transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          width: isHovered ? "50px" : "0px",
                          borderRadius: "2px",
                        }}
                      />
                    </Box>

                    {/* Label */}
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        fontSize: { xs: "1.05rem", md: "1.15rem" },
                        color: "#000",
                        transition: "all 0.3s ease-out",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.label}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        lineHeight: 1.6,
                        transition: "all 0.3s ease-out",
                        color:  "#000" ,
                        flex: 1,
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Bottom badge */}
                    
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
