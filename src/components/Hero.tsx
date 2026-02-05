"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
} from '@mui/material';
import {
  Storage as StorageIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// --- ANIMATION CLASSES & COMPONENT START ---

// 1. Class definition moved OUTSIDE the component to fix the warning
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5; // Slow speed
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > this.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    // Using your primary color but semi-transparent
    ctx.fillStyle = 'rgba(38, 60, 112, 0.6)';
    ctx.fill();
  }
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles: Particle[] = [];
    const particleCount = 100; // Number of dots
    const connectionDistance = 150; // Distance to draw lines

    // Initialize particles with current screen dimensions
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(width, height));
      }
    };

    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.update();
        p.draw(ctx);

        // Draw connections
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(38, 60, 112, ${
              0.15 * (1 - distance / connectionDistance)
            })`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    const animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles(); // Re-initialize on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1, // Sit on top of video, below content
        pointerEvents: 'none', // Allow clicking through
      }}
    />
  );
};
// --- ANIMATION COMPONENT END ---

const Hero: React.FC = () => {
  const [view, setView] = useState<'hero' | 'clients'>('hero');

  const colors = {
    primary: '#263C70',
    secondary: '#9DC668',
    tertiary: '#4EB8BC',
    quaternary: '#7B5F96',
  };

  const clientLogos = [
    '/images/STC.png',
    '/images/ZATCA.jpg',
    '/images/databubanalytics.png',
  ];



// useEffect(() => {
//   const timer = setTimeout(() => {
//     setView('clients'); // move to second page
//   }, 3000); // 3 seconds

//   return () => clearTimeout(timer);
// }, []);


  // Alternate useEffect to toggle views continuously
  useEffect(() => {
    const timer = setTimeout(() => {
      setView((prev) => (prev === 'hero' ? 'clients' : 'hero'));
    }, view === 'hero' ? 4000 : 4000);

    return () => clearTimeout(timer);
  }, [view]);



  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.href = "/#contact";
  };

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: '#f8f9fa',
        py: { xs: 6, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* --- BACKGROUND VIDEO LAYER --- */}
      <Box
        component="div"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
          "&::after": {
            // Optional Overlay: Makes text more readable against busy videos
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(248, 249, 250, 0.85)',
          }
        }}
      >
        <Box
          component="video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/option1.mp4"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          {/* Replace with your actual video path */}
          <source src="/videos/your-video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      </Box>

      {/* --- ADDED ANIMATION LAYER --- */}
      <ParticlesBackground />

      {/* --- CONTENT LAYER --- */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <AnimatePresence mode="wait">
          {view === 'hero' ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              <Stack spacing={4} alignItems="center" textAlign="center">
                <Box sx={{ maxWidth: '1000px' }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                      fontWeight: 'bold',
                      color: colors.primary,
                      mb: 2,
                    }}
                  >
                    Unified, Governed,{' '}
                    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: colors.quaternary, borderRadius: '12px', px: 1.5, py: 0.5, mx: 1, color: 'white' }}>
                      <StorageIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
                    </Box>
                  </Typography>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                      fontWeight: 'bold',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 2,
                    }}
                  >
                    AI-Ready{' '}
                    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: colors.secondary, borderRadius: '12px', px: 1.5, py: 0.5, color: 'white' }}>
                      <TrendingUpIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
                    </Box>
                    <span>Data Access</span>
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ color: '#333', maxWidth: '800px', fontSize: '1.2rem', fontWeight: 500 }}>
                  VDAL is the strategic backbone for secure, real-time, and compliant enterprise data access.
                </Typography>

                <Button
                  variant="contained"
                  onClick={handleScrollToContact}
                  sx={{ backgroundColor: colors.primary, borderRadius: '50px', px: 6, py: 2, fontSize: '18px', textTransform: 'none' }}
                >
                  Book a Demo
                </Button>
              </Stack>
            </motion.div>
          ) : (
            <motion.div
              key="clients"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              <Stack spacing={6} alignItems="center" textAlign="center">
                <Box>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', color: colors.primary, mb: 2 }}>
                    Our Strategic Partners
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#444', fontWeight: 500 }}>
                    Trusted by industry leaders worldwide.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: '1fr',
                      sm: 'repeat(2, 1fr)',
                      md: 'repeat(3, 1fr)'
                    },
                    gap: { xs: 3, md: 4 },
                    width: '100%',
                    maxWidth: '1100px',
                    marginInline: 'auto',
                    px: { xs: 2, md: 0 },
                  }}
                >
                  {clientLogos.map((logoPath, index) => (
                    <motion.div
                      key={logoPath + index}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: { xs: 120, md: 180 },
                          p: { xs: 3, md: 4 },
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(4px)',
                          borderRadius: 3,
                          border: '1px solid rgba(0,0,0,0.08)',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                            borderColor: colors.primary + '40',
                          }
                        }}
                      >
                        <Box
                          component="img"
                          src={logoPath}
                          alt={`Client ${index + 1}`}
                          sx={{
                            maxHeight: { xs: '88px', md: '100px' },
                            maxWidth: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                <Button
                  variant="outlined"
                  onClick={() => setView('hero')}
                  sx={{
                    mt: 4,
                    borderRadius: '50px',
                    textTransform: 'none',
                    borderColor: colors.primary,
                    color: colors.primary,
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    '&:hover': {
                      borderColor: colors.primary,
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    }
                  }}
                >
                  Back to Overview
                </Button>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Hero;