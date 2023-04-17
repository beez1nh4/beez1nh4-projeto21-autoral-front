import useAsync from '../useAsync';

import * as tasksApi from '../../services/tasksApi';

export default function usePostTask() {
  const {
    loading: postTaskLoading,
    error: postTaskError,
    act: save
  } = useAsync(tasksApi.save, false);

  return {
    postTaskLoading,
    postTaskError,
    save
  };
}
