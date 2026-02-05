"use client";
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Tabs,
  Tab,
  Paper,
  Stack,
  IconButton,
} from '@mui/material';
import {
  Layers as LayersIcon,
  Storage as StorageIcon,
  Hub as HubIcon,
  Psychology as PsychologyIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  ArrowBackIos,
  ArrowForwardIos,
} from '@mui/icons-material';
import IntegrationIcon from '@mui/icons-material/IntegrationInstructions';
import { motion } from 'framer-motion';

const EnterpriseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const colors = {
    primary: '#263C70',    // Dark blue
    secondary: '#9DC668',  // Light green
    tertiary: '#4EB8BC',   // Teal
    quaternary: '#7B5F96', // Purple
  };

  const useCases = [
    {
      id: 0,
      title: "Semantic Layer & KPI Standardization",
      shortTitle: "Semantic Layer",
      icon: <LayersIcon />,
      need: "Teams define KPIs and business views independently, causing inconsistent numbers across dashboards and repeated implementation effort.",
      value: "VDAL leverages a dedicated semantic catalog to define standardized business views and KPI logic natively. Consumers access KPIs on the latest trusted data while inheriting unified governance, visibility controls, and centralized audit lineage — ensuring consistent insight delivery across BI, enterprise reporting, and AI workloads.",
      outcome: "Consistent KPIs, one semantic definition, inherited governance, zero duplication of semantic logic.",
      color: colors.primary
    },
    {
      id: 1,
      title: "Data Lake & Lakehouse Consumption Enablement",
      shortTitle: "Data Lake",
      icon: <StorageIcon />,
      need: "Lake and lakehouse environments contain critical analytical data, but consuming them through repeated pipelines increases cost, delay, and governance risk.",
      value: "VDAL enables governed analytical access to lake and lakehouse environments through the same semantic layer, exposing trusted analytical views without moving or duplicating data. It supports real-time access while maintaining inherited governance and full traceability, without disrupting existing lake architecture.",
      outcome: "Analytics-ready lake consumption with centralized protection — without data movement or duplication.",
      color: colors.tertiary
    },
    {
      id: 2,
      title: "Hybrid & Multi-System Virtualization",
      shortTitle: "Hybrid",
      icon: <HubIcon />,
      need: "Enterprises operate across legacy systems, cloud platforms, NoSQL stores, streaming data, and data lakes — but struggle to unify analytics access without redesigning architectures or creating multiple data copies.",
      value: "VDAL provides a single governed access layer that virtualizes analytics across heterogeneous environments. Users and applications can combine data across systems in real time while inheriting consistent governance and audit traceability — enabling cross-domain analytics without disrupting source platforms.",
      outcome: "One access layer across hybrid estates — unified analytics without source disruption or uncontrolled data copies.",
      color: colors.quaternary
    },
    {
      id: 3,
      title: "AI-Assisted Analytics (Ask vDAL)",
      shortTitle: "AI-Assisted Analytics",
      icon: <PsychologyIcon />,
      need: "AI and analytics teams require rapid query generation, interpretation, and governed insight retrieval from enterprise and lake data, without exposing sensitive information or creating inconsistent logic.",
      value: "Ask vDAL converts natural language business questions into analytical queries, validates them within governed data boundaries, executes them on always-latest trusted data, and delivers AI-generated insights with controlled visibility. All outputs inherit organizational governance and full execution lineage, enabling secure AI analytics at scale without data leakage or source disruption.",
      outcome: "Fast AI analytics with governed query generation, inherited access policies, controlled data visibility, and complete execution lineage for every consumer.",
      note: "Groq-powered SQL generation (NL → SQL). Execution remains within VDAL's governed query layer.",
      color: colors.secondary
    },
    {
      id: 4,
      title: "Digital Application Integration",
      shortTitle: "Digital Application",
      icon: <IntegrationIcon />,
      need: "Digital teams repeatedly build and maintain integrations for the same enterprise data, increasing engineering cost and inconsistent access rules.",
      value: "Applications integrate once with VDAL, consume data virtually, and automatically inherit centralized governance and visibility controls. This reduces integration sprawl and ensures compliant, consistent data delivery for digital services.",
      outcome: "Integrate once, inherit compliance, deliver faster with lower risk.",
      color: colors.primary
    }
  ];

  const currentUseCase = useCases[activeTab];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#000',
              }}
            >
              Enterprise Use Cases Powered by VDAL
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: '#666',
                fontSize: '18px',
                fontWeight: 400,
              }}
            >
              Unified data access with governed virtualization and semantic intelligence
            </Typography>
          </Stack>
        </Box>

        {/* Tab Navigation */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
        >
          <Paper 
            elevation={0}
            sx={{ 
              mb: 0,
              backgroundColor: 'white',
              borderRadius: '12px 12px 0 0',
              border: '1px solid #e0e0e0',
              borderBottom: 'none',
              display: 'flex',
              justifyContent: 'space-around',
            }}
          >
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                px: 2,
                '& .MuiTabs-indicator': {
                  backgroundColor: colors.primary,
                  height: 3,
                },
                '& .MuiTab-root': {
                  textTransform: 'none',
                  minWidth: { xs: 120, md: 180 },
                  fontWeight: 600,
                  fontSize: '14px',
                  color: '#666',
                  py: 2,
                  '&.Mui-selected': {
                    color: colors.primary,
                  },
                },
              }}
            >
              {useCases.map((useCase, index) => (
                <Tab
                  key={useCase.id}
                  icon={React.cloneElement(useCase.icon, { 
                    sx: { 
                      fontSize: 20, 
                      color: activeTab === index ? useCase.color : '#666',
                    } 
                  })}
                  label={
                    <Box sx={{ textAlign: 'center'}}>
                      <Typography variant="caption" sx={{ fontSize: '12px', fontWeight: 600 }}>
                        {useCase.shortTitle}
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: '10px', display: 'block', opacity: 0.7 }}>
                        Use Case {index + 1}
                      </Typography>
                    </Box>
                  }
                  iconPosition="top"
                  sx={{ gap: 0.5 }}
                />
              ))}
            </Tabs>
          </Paper>
        </Box>

        {/* Content Panel */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <Paper 
            elevation={2}
            sx={{ 
              borderRadius: '0 0 12px 12px',
              border: '1px solid #e0e0e0',
              borderTop: 'none',
            }}
          >
            <Box sx={{ p: { xs: 4, md: 6 } }}>
              {/* Title with Icon */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Stack direction="row" spacing={3} alignItems="flex-start" sx={{ mb: 4 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      backgroundColor: `${currentUseCase.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {React.cloneElement(currentUseCase.icon, { 
                      sx: { fontSize: 32, color: currentUseCase.color } 
                    })}
                  </Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      color: '#000',
                      fontSize: { xs: '24px', md: '28px' },
                      lineHeight: 1.3,
                    }}
                  >
                    {currentUseCase.title}
                  </Typography>
                </Stack>
              </Box>

              {/* Staggered content sections */}
              <Stack spacing={3}>
                {/* The Challenge */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: '#ffebee',
                      border: '1px solid #ffcdd2',
                      borderRadius: 2,
                      p: 3,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <WarningIcon sx={{ fontSize: 20, color: '#d32f2f' }} />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 'bold',
                          color: '#d32f2f',
                          textTransform: 'uppercase',
                          fontSize: '12px',
                          letterSpacing: 1,
                        }}
                      >
                        The Challenge
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333',
                        lineHeight: 1.7,
                        fontSize: '15px',
                      }}
                    >
                      {currentUseCase.need}
                    </Typography>
                  </Paper>
                </Box>

                {/* VDAL Solution */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: `${currentUseCase.color}08`,
                      border: `1px solid ${currentUseCase.color}30`,
                      borderRadius: 2,
                      p: 3,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: currentUseCase.color }} />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 'bold',
                          color: currentUseCase.color,
                          textTransform: 'uppercase',
                          fontSize: '12px',
                          letterSpacing: 1,
                        }}
                      >
                        VDAL Solution
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333',
                        lineHeight: 1.7,
                        fontSize: '15px',
                        mb: currentUseCase.note ? 2 : 0,
                      }}
                    >
                      {currentUseCase.value}
                    </Typography>
                    {currentUseCase.note && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.tertiary,
                          fontStyle: 'italic',
                          fontSize: '14px',
                          borderTop: `1px solid ${currentUseCase.color}20`,
                          pt: 2,
                        }}
                      >
                        <strong>Note:</strong> {currentUseCase.note}
                      </Typography>
                    )}
                  </Paper>
                </Box>

                {/* Key Outcome */}
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      backgroundColor: '#e8f5e8',
                      border: '1px solid #c8e6c9',
                      borderRadius: 2,
                      p: 3,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                      <CheckCircleIcon sx={{ fontSize: 20, color: colors.secondary }} />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 'bold',
                          color: colors.secondary,
                          textTransform: 'uppercase',
                          fontSize: '12px',
                          letterSpacing: 1,
                        }}
                      >
                        Key Outcome
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#000',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: 1.6,
                      }}
                    >
                      {currentUseCase.outcome}
                    </Typography>
                  </Paper>
                </Box>
              </Stack>

              {/* Navigation Dots */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              >
                <Stack direction="row" justifyContent="center" spacing={1} sx={{ mt: 4, pt: 3, borderTop: '1px solid #e0e0e0' }}>
                  {useCases.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => setActiveTab(index)}
                      sx={{
                        width: activeTab === index ? 32 : 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: activeTab === index ? colors.primary : '#ccc',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: activeTab === index ? colors.primary : '#999',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>

              {/* Footer Navigation */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              >
                <Stack direction="row" justifyContent="space-between" sx={{ mt: 4 }}>
                  <IconButton
                    onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                    disabled={activeTab === 0}
                    sx={{
                      border: '2px solid #e0e0e0',
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      '&:hover': {
                        borderColor: colors.primary,
                      },
                      '&:disabled': {
                        opacity: 0.5,
                        cursor: 'not-allowed',
                      },
                    }}
                  >
                    <ArrowBackIos sx={{ fontSize: 20 }} />
                  </IconButton>
                  
                  <IconButton
                    onClick={() => setActiveTab(Math.min(useCases.length - 1, activeTab + 1))}
                    disabled={activeTab === useCases.length - 1}
                    sx={{
                      border: '2px solid #e0e0e0',
                      borderRadius: 2,
                      px: 3,
                      py: 1,
                      '&:hover': {
                        borderColor: colors.primary,
                      },
                      '&:disabled': {
                        opacity: 0.5,
                        cursor: 'not-allowed',
                      },
                    }}
                  >
                    <ArrowForwardIos sx={{ fontSize: 20 }} />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default EnterpriseCases;