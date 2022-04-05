import { useRouter } from 'next/router';

import { BUTTON_ROUTES } from '~/constants/routing';

export const useGetPushFn = () => {
  const { pathname, push } = useRouter();

  let nextPageIndex = BUTTON_ROUTES.indexOf(pathname) + 1;
  nextPageIndex = nextPageIndex === BUTTON_ROUTES.length ? 0 : nextPageIndex;

  return () => push(BUTTON_ROUTES[nextPageIndex]);
};
