// components/Navbar.js
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Função para abrir/fechar o menu lateral
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Links de navegação
  const navLinks = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Transações', href: '/transactions' },
    { label: 'Orçamento', href: '/budget' },
    { label: 'Investimentos', href: '/investments' },
    { label: 'Sair', href: '/auth' },
  ];

  return (
    <>
      {/* Barra de navegação principal */}
      <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Organiza
          </Typography>
          {/* Links para telas maiores */}
          <div style={{ display: 'flex', gap: '1rem', display: { xs: 'none', sm: 'flex' } }}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                color="inherit"
                component={Link}
                href={link.href}
              >
                {link.label}
              </Button>
            ))}
            {/* Adicionando os ícones no final */}
            <IconButton color="inherit">
              <DeleteIcon />
            </IconButton>
            <IconButton color="inherit">
              <EditIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Menu lateral para telas menores */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {navLinks.map((link) => (
            <ListItem
              button
              key={link.label}
              component={Link}
              href={link.href}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
