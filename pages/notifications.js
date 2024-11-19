import React, { useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Notifications = () => {
  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationDate, setNotificationDate] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Função para adicionar uma nova notificação
  const handleAddNotification = () => {
    if (notificationTitle && notificationDate) {
      const newNotification = {
        title: notificationTitle,
        date: notificationDate,
        id: new Date().getTime(),
      };

      setNotifications([...notifications, newNotification]);
      setNotificationTitle('');
      setNotificationDate('');
    }
  };

  // Função para abrir o diálogo de edição de notificação
  const handleEditNotification = (notification) => {
    setSelectedNotification(notification);
    setNotificationTitle(notification.title);
    setNotificationDate(notification.date);
    setOpenDialog(true);
  };

  // Função para salvar a edição de notificação
  const handleSaveEditedNotification = () => {
    if (selectedNotification) {
      const updatedNotifications = notifications.map((notification) =>
        notification.id === selectedNotification.id
          ? { ...notification, title: notificationTitle, date: notificationDate }
          : notification
      );
      setNotifications(updatedNotifications);
      setOpenDialog(false);
      setNotificationTitle('');
      setNotificationDate('');
      setSelectedNotification(null);
    }
  };

  // Função para excluir uma notificação
  const handleDeleteNotification = (id) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Gerenciar Notificações
      </Typography>

      {/* Formulário para adicionar uma notificação */}
      <Box sx={{ marginBottom: 3 }}>
        <TextField
          label="Título da Notificação"
          variant="outlined"
          fullWidth
          value={notificationTitle}
          onChange={(e) => setNotificationTitle(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Data de Notificação"
          variant="outlined"
          type="date"
          fullWidth
          value={notificationDate}
          onChange={(e) => setNotificationDate(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddNotification}
          sx={{ marginTop: 2 }}
        >
          Adicionar Notificação
        </Button>
      </Box>

      {/* Lista de notificações */}
      <Typography variant="h6" gutterBottom>
        Suas Notificações
      </Typography>
      <List>
        {notifications.map((notification) => (
          <ListItem key={notification.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText
              primary={notification.title}
              secondary={`Data: ${notification.date}`}
            />
            <Box>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleEditNotification(notification)}
                sx={{ marginRight: 1 }}
              >
                Editar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleDeleteNotification(notification.id)}
              >
                Excluir
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>

      {/* Dialog para editar notificação */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Editar Notificação</DialogTitle>
        <DialogContent>
          <TextField
            label="Título da Notificação"
            variant="outlined"
            fullWidth
            value={notificationTitle}
            onChange={(e) => setNotificationTitle(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Data de Notificação"
            variant="outlined"
            type="date"
            fullWidth
            value={notificationDate}
            onChange={(e) => setNotificationDate(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSaveEditedNotification} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Notifications;
