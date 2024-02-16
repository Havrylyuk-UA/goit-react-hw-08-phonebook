import instance from '../auth/auth-api';

export const reqGetContacts = async () => {
  const response = await instance.get('/contacts');
  return response.data;
};

export const reqAddContacts = async body => {
  const response = await instance.post('/contacts', body);
  return response.data;
};

export const reqRemoveContacts = async id => {
  const response = await instance.delete(`/contacts/${id}`);
  return response.data;
};
