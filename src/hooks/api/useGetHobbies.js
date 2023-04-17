import useAsync from '../useAsync';
import useToken from '../useToken';
import * as hobbiesApi from '../../services/hobbiesApi';

export default function useGetHobbies() {
  const token = useToken();

  const {
    loading: getHobbiesLoading,
    error: getHobbiesError,
    data: userHobbies
  } = useAsync(() =>  hobbiesApi.getHobbies(token), true);

  return {
    getHobbiesLoading,
    getHobbiesError,
    userHobbies
  };
}
