import api from './api';

export async function save(body, token) {
  const response = await api.post('/subject', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getSubject(token) {
  const response = await api.get('/subject', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateSubject(body, params, token) {
  const response = await api.put(`/subject/${params}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); 

  return response.data;
}
