import random from 'lodash.random';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

import { BUTTON_ROUTES } from '~/constants/routing';

const Home: React.FC = () => {
  const { push } = useRouter();

  useEffect(() => {
    const nextPath = BUTTON_ROUTES[random(0, BUTTON_ROUTES.length - 1)];
    push(`/${nextPath}`);
  }, [push]);

  return null;
};

export default Home;
