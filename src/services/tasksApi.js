import api from './api';

export async function getTasks(token) {
  const response = await api.get('/task', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function save(body, token) {
  const response = await api.post('/task', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
