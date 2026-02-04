"use client";
import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Stack,
  // Chip,
} from "@mui/material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

const BusinessImpactList: React.FC<{ items: string[] }> = ({ items }) => (
  <Stack spacing={2}>
    {items.map((impact, index) => (
      <Box key={index} sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
        <CheckCircleIcon sx={{ fontSize: 22, mt: "2px" }} />
        <Typography sx={{ fontSize: "16px", lineHeight: 1.6 }}>
          {impact}
        </Typography>
      </Box>
    ))}
  </Stack>
);

const SuccessStories: React.FC = () => {
  const colors = {
    primary: "#263C70",
    secondary: "#9DC668",
  };

  return (
    <Box 
    id="clients"
    sx={{ py: { xs: 6, md: 10 }, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <Stack spacing={6} alignItems="center">
          {/* Our Clients Chip */}
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
                            Our Clients
                          </Typography>
                        </Box>

          {/* Heading */}


          <Box sx={{ textAlign: "center", maxWidth: "800px" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: "bold",
                color: "#000",
                mb: 3,
              }}
            >
              Our Success Stories
            </Typography>

            <Typography
              sx={{
                color: "#666",
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: 1.6,
              }}
            >
              VDAL helps organizations unify data access, reduce complexity, and
              deliver analytics without moving data.
            </Typography>
          </Box>

          {/* ===== ZATCA ROW ===== */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* ZATCA Business Impact */}
            <Box sx={{ flex: 1 }}>
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, #4c78c5 0%, #1D2B6B 100%)",
                  color: "white",
                  borderRadius: 4,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "24px", mb: 3 }}>
                    Business Impact
                  </Typography>

                  <BusinessImpactList
                    items={[
                      "100% elimination of analytical data copies built for BI consumption",
                      "Faster KPI generation and reporting cycles",
                      "Centralized audit traceability for all analytical workloads",
                      "Significant infrastructure cost reduction",
                      "Safe AI adoption for regulated reporting teams",
                    ]}
                  />
                </CardContent>
              </Card>
            </Box>

            {/* ZATCA Story */}
            <Box sx={{ flex: 1 }}>
              <Card
                sx={{
                  backgroundColor: "#F5F5F7",
                  borderRadius: 4,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "28px", mb: 3 }}>
                    ZATCA
                  </Typography>

                  <Stack spacing={2} sx={{backgroundColor:"#ffffff", p:2, borderRadius:2}}>
                    <Typography sx={{ fontWeight: 600 }}>
                      Client Challenge
                    </Typography>
                    <Typography>
                      Enterprise data stored in distributed object repositories
                      created performance bottlenecks due to legacy query
                      dependencies. BI and advanced analytics could not run
                      directly on data sources, shifting focus away from insights.
                    </Typography>

                    <Typography sx={{ fontWeight: 600, mt: 2 }}>
                      VDAL Impact Delivered
                    </Typography>
                    <Typography>
                      VDAL removed repeated analytics pipelines and enabled
                      real-time governed BI access on trusted data without data
                      movement, while delivering unified visibility into query
                      behavior.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* ===== STC ROW ===== */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {/* STC Story */}
            <Box sx={{ flex: 1 }}>
              <Card
                sx={{
                  backgroundColor: "#F5F5F7",
                  borderRadius: 4,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "28px", mb: 3 }}>
                    STC (Telecom)
                  </Typography>

                  <Stack spacing={2} sx={{backgroundColor:"#ffffff", p:2, borderRadius:2}}>
                    <Typography sx={{ fontWeight: 600 }}>
                      Client Challenge
                    </Typography>
                    <Typography>
                      Telecom data spread across legacy systems, cloud platforms,
                      NoSQL stores, and distributed data lakes led to duplicated
                      analytics pipelines, inconsistent KPIs, and fragmented
                      access control.
                    </Typography>

                    <Typography sx={{ fontWeight: 600, mt: 2 }}>
                      VDAL Impact Delivered
                    </Typography>
                    <Typography>
                      VDAL established a unified governed access backbone,
                      enabling live access to trusted telecom KPIs across
                      enterprise, digital, and analytical consumers.
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Box>

            {/* STC Business Impact */}
            <Box sx={{ flex: 1 }}>
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, #4c78c5 0%, #1D2B6B 100%)",
                  color: "white",
                  borderRadius: 4,
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "24px", mb: 3 }}>
                    Business Impact
                  </Typography>

                  <BusinessImpactList
                    items={[
                      "Consistent regulatory KPIs across all dashboards",
                      "70% improvement in analysis speed and team productivity",
                      "50% reduction in duplicated data integrations",
                      "No new storage created for analytics consumption",
                      "Customer 360 and network analytics without data copies",
                      "AI-ready foundation for telecom workloads",
                    ]}
                  />
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SuccessStories;
