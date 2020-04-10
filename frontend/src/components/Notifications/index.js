import React, { useState, useEffect } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdNotifications } from 'react-icons/md';

import api from '~/services/api';

import {
  Container,
  Bagde,
  Notification,
  NotificationList,
  Scroll,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotification() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance:
      }))
      setNotifications(response.data);
    }

    loadNotification();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Bagde onClick={handleToggleVisible} hasUnread>
        <MdNotifications size={20} color="#7159c1" />
      </Bagde>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marca como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marca como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marca como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marca como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para amanhã</p>
            <time>há 2 dias</time>
            <button type="button">Marca como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
