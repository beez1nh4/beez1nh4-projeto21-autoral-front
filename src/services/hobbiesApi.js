import api from './api';

export async function getHobbies(token) {
  const response = await api.get('/hobby', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function save(body, token) {
  const response = await api.post('/hobby', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateHobby(body, params, token) {
  const response = await api.put(`/hobby/${params}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); 

  return response.data;
}
