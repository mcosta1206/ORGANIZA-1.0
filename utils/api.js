// api.js
const API_URL = 'http://localhost:3001';  // Endereço base da sua API (fake API ou API real)

// Função para pegar todos os usuários
export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) throw new Error('Erro ao buscar usuários');
    return await response.json();  // Retorna os dados dos usuários
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;  // Repassa o erro
  }
};

// Função para registrar um novo usuário
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)  // Envia os dados do novo usuário
    });
    if (!response.ok) throw new Error('Erro ao registrar usuário');
    return await response.json();  // Retorna os dados do novo usuário
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;  // Repassa o erro
  }
};

// Função para adicionar uma transação (receita ou despesa)
export const addTransaction = async (transactionData) => {
  try {
    const response = await fetch(`${API_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transactionData)  // Envia os dados da transação
    });
    if (!response.ok) throw new Error('Erro ao adicionar transação');
    return await response.json();  // Retorna os dados da transação adicionada
  } catch (error) {
    console.error('Erro ao adicionar transação:', error);
    throw error;  // Repassa o erro
  }
};

// Função para pegar as transações de um usuário
export const getTransactions = async () => {
  try {
    const response = await fetch(`${API_URL}/transactions`);
    if (!response.ok) throw new Error('Erro ao buscar transações');
    return await response.json();  // Retorna as transações
  } catch (error) {
    console.error('Erro ao buscar transações:', error);
    throw error;  // Repassa o erro
  }
};

// Função para adicionar um orçamento
export const addBudget = async (budgetData) => {
  try {
    const response = await fetch(`${API_URL}/budgets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(budgetData)  // Envia os dados do orçamento
    });
    if (!response.ok) throw new Error('Erro ao adicionar orçamento');
    return await response.json();  // Retorna os dados do orçamento adicionado
  } catch (error) {
    console.error('Erro ao adicionar orçamento:', error);
    throw error;  // Repassa o erro
  }
};

// Função para pegar os orçamentos
export const getBudgets = async () => {
  try {
    const response = await fetch(`${API_URL}/budgets`);
    if (!response.ok) throw new Error('Erro ao buscar orçamentos');
    return await response.json();  // Retorna os dados dos orçamentos
  } catch (error) {
    console.error('Erro ao buscar orçamentos:', error);
    throw error;  // Repassa o erro
  }
};
