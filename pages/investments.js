import { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, Paper, List, ListItem, ListItemText } from '@mui/material';

const Investments = () => {
  const [investmentName, setInvestmentName] = useState('');
  const [investmentValue, setInvestmentValue] = useState('');
  const [investmentInstitution, setInvestmentInstitution] = useState('');
  const [investmentReturn, setInvestmentReturn] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(false);

  // Função para calcular o rendimento usando juros compostos
  const calculateCompoundInterest = (principal, rate, time) => {
    return principal * Math.pow(1 + rate / 100, time);
  };

  // Função para adicionar um investimento
  const handleAddInvestment = () => {
    setLoading(true);

    // Calcular o rendimento estimado
    const estimatedValue = calculateCompoundInterest(
      parseFloat(investmentValue),
      parseFloat(investmentReturn),
      parseInt(investmentPeriod)
    ).toFixed(2);

    // Adicionar o investimento ao estado
    const newInvestment = {
      name: investmentName,
      value: investmentValue,
      institution: investmentInstitution,
      returnRate: investmentReturn,
      period: investmentPeriod,
      estimatedValue: estimatedValue,
    };

    setInvestments([...investments, newInvestment]);

    // Limpar campos
    setInvestmentName('');
    setInvestmentValue('');
    setInvestmentInstitution('');
    setInvestmentReturn('');
    setInvestmentPeriod('');
    setLoading(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gerenciar Investimentos
      </Typography>

      {/* Formulário para adicionar investimento */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          Adicionar Novo Investimento
        </Typography>
        <TextField
          label="Nome do Investimento"
          variant="outlined"
          fullWidth
          value={investmentName}
          onChange={(e) => setInvestmentName(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Valor Investido"
          variant="outlined"
          fullWidth
          value={investmentValue}
          onChange={(e) => setInvestmentValue(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Instituição"
          variant="outlined"
          fullWidth
          value={investmentInstitution}
          onChange={(e) => setInvestmentInstitution(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Taxa de Retorno (%)"
          variant="outlined"
          fullWidth
          value={investmentReturn}
          onChange={(e) => setInvestmentReturn(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Período (anos)"
          variant="outlined"
          fullWidth
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddInvestment}
          sx={{ marginTop: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Adicionar Investimento'}
        </Button>
      </Paper>

      {/* Exibição dos investimentos */}
      <Typography variant="h6" gutterBottom>
        Seus Investimentos
      </Typography>
      <List>
        {investments.map((investment, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={investment.name}
              secondary={`Instituição: ${investment.institution} | Valor Inicial: R$${investment.value} | 
                          Estimativa ao Final do Período: R$${investment.estimatedValue}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Investments;
