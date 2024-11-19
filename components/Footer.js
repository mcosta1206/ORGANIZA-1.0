// components/Footer.js
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 2,
        mt: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Organiza - Todos os direitos reservados
      </Typography>
      <Typography variant="body2">
        <Link href="/privacy" color="inherit" underline="hover">
          Política de Privacidade
        </Link>
        {' | '}
        <Link href="/terms" color="inherit" underline="hover">
          Termos de Serviço
        </Link>
      </Typography>
    </Box>
  );
}
