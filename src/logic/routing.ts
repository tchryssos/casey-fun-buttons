import random from 'lodash.random';
import { useRouter } from 'next/router';

import { BUTTON_ROUTES } from '~/constants/routing';

export const getDifferentRoute = (currentPath: string) => {
  const filteredRoutes = BUTTON_ROUTES.filter((r) => `/${r}` !== currentPath);
  return `/${filteredRoutes[random(0, filteredRoutes.length - 1)]}`;
};

export const useGetPushFn = () => {
  const { pathname, push } = useRouter();

  return () => push(getDifferentRoute(pathname));
};
