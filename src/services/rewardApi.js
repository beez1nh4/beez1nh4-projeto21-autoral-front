import api from './api';

export async function getRewards(token) {
  const response = await api.get('/reward', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function save(body, token) {
  const response = await api.post('/reward', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateReward(body, params, token) {
  const response = await api.put(`/reward/${params}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); 

  return response.data;
}
