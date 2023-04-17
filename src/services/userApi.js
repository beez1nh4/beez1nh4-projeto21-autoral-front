import api from './api';

export async function signUp(email, password, username, birthday, photoUrl) {
  console.log({ email, password, username, birthday, photoUrl })
  const response = await api.post('/users', { email, password, username, birthday, photoUrl });
  
  return response.data;
}
//
