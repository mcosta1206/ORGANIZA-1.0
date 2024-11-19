import { useState, useEffect } from 'react';
import { Box, Paper, Typography, Button, TextField, Grid, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Transactions = () => {
  // Estado para armazenar as transações
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Receita');
  const [editingIndex, setEditingIndex] = useState(null);

  // Função para buscar transações (simulação com dados fictícios)
  useEffect(() => {
    const fetchTransactions = async () => {
      // Dados fictícios, substitua com chamada à API real
      const fakeTransactions = [
        { id: 1, description: 'Salário', amount: 5000, category: 'Receita' },
        { id: 2, description: 'Aluguel', amount: -1200, category: 'Despesa' },
        { id: 3, description: 'Investimento A', amount: 200, category: 'Investimento' },
      ];
      setTransactions(fakeTransactions);
    };

    fetchTransactions();
  }, []);

  // Função para adicionar ou editar transação
  const handleAddOrEditTransaction = () => {
    if (description && amount) {
      const newTransaction = {
        id: editingIndex !== null ? transactions[editingIndex].id : Date.now(),
        description,
        amount: parseFloat(amount),
        category,
      };

      if (editingIndex !== null) {
        const updatedTransactions = [...transactions];
        updatedTransactions[editingIndex] = newTransaction;
        setTransactions(updatedTransactions);
      } else {
        setTransactions([...transactions, newTransaction]);
      }

      // Limpar os campos após salvar
      setDescription('');
      setAmount('');
      setCategory('Receita');
      setEditingIndex(null); // Resetar índice de edição
    }
  };

  // Função para excluir transação
  const handleDeleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  // Função para editar transação
  const handleEditTransaction = (index) => {
    const transactionToEdit = transactions[index];
    setDescription(transactionToEdit.description);
    setAmount(transactionToEdit.amount.toString());
    setCategory(transactionToEdit.category);
    setEditingIndex(index);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gerenciar Transações
      </Typography>

      {/* Formulário de transação */}
      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h6" gutterBottom>
          {editingIndex !== null ? 'Editar Transação' : 'Adicionar Nova Transação'}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Descrição"
              variant="outlined"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Valor"
              variant="outlined"
              fullWidth
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Categoria"
              variant="outlined"
              fullWidth
              select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              SelectProps={{
                native: true,
              }}
            >
              <option value="Receita">Receita</option>
              <option value="Despesa">Despesa</option>
              <option value="Investimento">Investimento</option>
            </TextField>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handleAddOrEditTransaction}
        >
          {editingIndex !== null ? 'Atualizar' : 'Adicionar'}
        </Button>
      </Paper>

      {/* Lista de Transações */}
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h6" gutterBottom>
          Transações Recentes
        </Typography>
        <List>
          {transactions.map((transaction, index) => (
            <ListItem key={transaction.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemText
                primary={transaction.description}
                secondary={`${transaction.category}: R$${transaction.amount.toFixed(2)}`}
              />
              <Box>
                <IconButton onClick={() => handleEditTransaction(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteTransaction(transaction.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Transactions;
