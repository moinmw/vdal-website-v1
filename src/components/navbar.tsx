"use client"
import React from 'react';
// import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Our clients', id: 'clients' },
  // { label: 'How it works', id: 'how-it-works' },
  { label: 'Contact', id: 'contact' },
];


  const colors = {
    primary: '#263C70',    // Dark blue
    secondary: '#9DC668',  // Light green
    tertiary: '#4EB8BC',   // Teal
    quaternary: '#7B5F96', // Purple
  };


  //  const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (state: boolean) => () => {
  //   setOpen(state);
  // };

  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        backgroundColor: '#f8f9fa',
        borderBottom: '1px solid #e9ecef'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="img" src="/images/VDAL-Logo-Light.svg" alt="VDAL logo" sx={{ height: 40 }} />
            </Box>
        
          </Box>

          {/* Desktop Navigation (hidden on small screens via CSS) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                sx={{
                  color: colors.primary,
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: colors.tertiary,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Try for free button (hidden on small screens) */}
          <Button
            variant="contained"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.location.href = "/#contact";
              }
            }}
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              backgroundColor: colors.secondary,
              color: 'black',
              textTransform: 'none',
              borderRadius: '25px',
              px: 3,
              py: 1,
              fontSize: '16px',
              fontWeight: 600,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: colors.secondary,
                boxShadow: '0 2px 8px rgba(157, 198, 104, 0.3)',
              },
            }}
          >
            Try for free 
          </Button>

          {/* Mobile Menu Button (visible only on small screens) */}
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
            sx={{ color: colors.primary, display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => {
                  handleNavClick(item.id);
                  handleMenuClose();
                }}
              >
                <Typography sx={{ color: colors.primary }}>{item.label}</Typography>
              </MenuItem>
            ))}
            <MenuItem onClick={handleMenuClose}>
              <Button
                variant="contained"
                onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.location.href = "/#contact";
              }
            }}
                sx={{
                  backgroundColor: colors.secondary,
                  color: 'black',
                  textTransform: 'none',
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  fontSize: '14px',
                  fontWeight: 600,
                  boxShadow: 'none',
                  width: '100%',
                }}
              >
                Try for free 
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;