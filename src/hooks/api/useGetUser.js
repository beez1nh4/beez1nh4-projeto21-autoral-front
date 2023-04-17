import useAsync from '../useAsync';
import useToken from '../useToken';
import * as userApi from '../../services/userApi';

export default function useGetUser() {
  const token = useToken();

  const {
    loading: getUserLoading,
    error: getUserError,
    data: userData
  } = useAsync(() =>  userApi.getPersonalInformations(token), true);

  return {
    getUserLoading,
    getUserError,
    userData
  };
}
