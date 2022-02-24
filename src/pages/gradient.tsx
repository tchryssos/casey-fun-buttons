// import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { useGetPushFn } from '~/logic/routing';
import { delay } from '~/logic/util/delay';
// import { toggleAnimation } from '~/logic/util/styles';

const animationTimer = 2000;

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #e52e71;
`;

const MouseGradient = styled.div`
  height: 500px;
  width: 500px;
  background-image: radial-gradient(circle at 50% 50%, #ff8a00, #e52e71);
`;

const FunButton = styled(Button)<{ isTransitioning: boolean }>`
  background-color: yellow;
  position: fixed;
`;

const Gradient: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const push = useGetPushFn();

  const onClick = async () => {
    setIsTransitioning(true);
    await delay(null, animationTimer);
    // push();
  };

  return (
    <Layout>
      <Background center>
        <MouseGradient />
        <FunButton>
          <p>Click Me</p>
        </FunButton>
      </Background>
    </Layout>
  );
};

export default Gradient;
