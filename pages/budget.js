import { useState } from 'react';
import { Box, Typography, Slider, TextField, Button, CircularProgress, Paper } from '@mui/material';

const Budget = () => {
  // Estado para o valor do orçamento e categoria
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Função para lidar com o valor do slider
  const handleSliderChange = (event, newValue) => {
    setAmount(newValue); // Atualiza o valor conforme o slider é movido
  };

  // Função para adicionar orçamento
  const handleAddBudget = () => {
    setLoading(true);
    // Simula a adição de um orçamento e faz reset nos campos
    setCategory('');
    setAmount(0);
    setLoading(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Definir Orçamento
      </Typography>

      {/* Formulário para adicionar orçamento */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Adicionar Nova Meta de Orçamento
        </Typography>
        <TextField
          label="Categoria"
          variant="outlined"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        {/* Slider para definir o valor do orçamento */}
        <Typography gutterBottom>Valor do Orçamento: R${amount}</Typography>
        <Slider
          value={amount}
          onChange={handleSliderChange}
          aria-labelledby="budget-slider"
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          step={50}
        />

        {/* Exibindo o botão de adicionar orçamento */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBudget}
          sx={{ marginTop: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Adicionar Meta'}
        </Button>
      </Paper>
    </Box>
  );
};

export default Budget;
