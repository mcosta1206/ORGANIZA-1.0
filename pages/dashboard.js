import { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registro de componentes do ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Estado para as finanças do usuário
  const [finances, setFinances] = useState({
    balance: 0,
    totalIncome: 0,
    totalExpense: 0,
    investments: 0,
  });

  const [graphData, setGraphData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Receitas',
        data: [5000, 6000, 7000, 8000, 6000, 7500], // Dados fictícios de receita mensal
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  });

  // Exemplo de função que altera dinamicamente os dados do gráfico
  const updateGraphData = () => {
    setGraphData({
      labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: 'Receitas',
          data: [10000, 11000, 12000, 13000, 14000, 15000], // Novos dados fictícios
          borderColor: 'rgba(75,192,192,1)',
          backgroundColor: 'rgba(75,192,192,0.2)',
          fill: true,
        },
      ],
    });
  };

  useEffect(() => {
    // Aqui você faria uma requisição para a API para pegar as finanças do usuário
    const fetchFinances = async () => {
      // Dados fictícios de exemplo
      setFinances({
        balance: 12000,
        totalIncome: 35000,
        totalExpense: 20000,
        investments: 5000,
      });
    };

    fetchFinances();
  }, []);

  return (
    <Box
      sx={{
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Painel Principal - Organiza
      </Typography>

      {/* Resumo das finanças */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">Saldo Atual</Typography>
            <Typography variant="h4" color="primary">
              R${finances.balance.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">Receitas Totais</Typography>
            <Typography variant="h4" color="success.main">
              R${finances.totalIncome.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">Despesas Totais</Typography>
            <Typography variant="h4" color="error.main">
              R${finances.totalExpense.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">Investimentos</Typography>
            <Typography variant="h4" color="info.main">
              R${finances.investments.toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Gráfico de Receitas ao Longo do Tempo */}
      <Paper sx={{ padding: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" gutterBottom>
          Gráfico de Receitas Mensais
        </Typography>
        <Line data={graphData} options={{ responsive: true, plugins: { title: { display: true, text: 'Receitas Mensais' } } }} />
      </Paper>

      {/* Botão para atualizar os dados do gráfico */}
      <Button variant="contained" color="primary" onClick={updateGraphData}>
        Atualizar Gráfico
      </Button>
    </Box>
  );
};

export default Dashboard;
