// pages/auth.js
import { useState } from 'react';
import { TextField, Button, Box, Typography, Tabs, Tab } from '@mui/material';

// Componente da página de autenticação
export default function Auth() {
  const [selectedTab, setSelectedTab] = useState(0); // Controla a troca de tabs (login/registro)

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação (por exemplo, verificar com uma fake API)
    console.log("Login");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    };

    // Envia os dados para a fake API (json-server)
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log(result); // Aqui você pode fazer algo com o resultado, como redirecionar o usuário para o painel principal ou exibir um alerta de sucesso
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        {selectedTab === 0 ? 'Login' : 'Registro'}
      </Typography>
      
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{ mb: 2 }}
      >
        <Tab label="Login" />
        <Tab label="Registro" />
      </Tabs>

      {selectedTab === 0 ? (
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            required
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Entrar
          </Button>
        </form>
      ) : (
        <form onSubmit={handleRegister}>
          <TextField
            label="Nome"
            type="text"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            name="name" // Nome do campo para enviar o nome do usuário
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            name="email" // Nome do campo para enviar o email
          />
          <TextField
            label="Senha"
            type="password"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            name="password" // Nome do campo para enviar a senha
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Registrar
          </Button>
        </form>
      )}
    </Box>
  );
}
