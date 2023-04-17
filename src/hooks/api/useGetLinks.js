import useAsync from '../useAsync';
import useToken from '../useToken';
import * as linksApi from '../../services/linksApi';

export default function useGetLinks() {
  const token = useToken();

  const {
    loading: getLinksLoading,
    error: getLinksError,
    data: userLinks
  } = useAsync(() =>  linksApi.getLinks(token), true);

  return {
    getLinksLoading,
    getLinksError,
    userLinks
  };
}
