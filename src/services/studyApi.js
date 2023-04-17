import api from './api';

export async function save(body, token) {
  const response = await api.post('/study', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export async function getStudySession(token) {
  const response = await api.get('/study', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function updateStudySession(body, params, token) {
  const response = await api.put(`/study/${params}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }); 

  return response.data;
}
