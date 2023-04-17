import useAsync from '../useAsync';
import useToken from '../useToken';
import * as subjectsApi from '../../services/subjectsApi';

export default function useGetSubjects() {
  const token = useToken();

  const {
    loading: getSubjectsLoading,
    error: getSubjectsError,
    data: userSubjects
  } = useAsync(() =>  subjectsApi.getSubject(token), true);

  return {
    getSubjectsLoading,
    getSubjectsError,
    userSubjects
  };
}
