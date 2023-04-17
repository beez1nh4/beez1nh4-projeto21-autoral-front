import api from './api';

export async function save(body, token) {
  const response = await api.post('/progress', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getProgress(token) {
  const response = await api.get('/progress', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateProgress(body, params, token) {
  const response = await api.put(`/progress/${params}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); 

  return response.data;
}
