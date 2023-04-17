import useAsync from '../useAsync';
import useToken from '../useToken';
import * as tasksApi from '../../services/tasksApi';

export default function useGetTasks() {
  const token = useToken();

  const {
    loading: getTasksLoading,
    error: getTasksError,
    act: getTasksTypes
  } = useAsync(() =>
  tasksApi.getTasks(token), false
  );

  return {
    getTasksLoading,
    getTasksError,
    getTasksTypes
  };
}
