import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { useGetPushFn } from '~/logic/routing';
import { delay } from '~/logic/util/delay';
import { toggleAnimation } from '~/logic/util/styles';

const animationTimer = 2000;

const loadingFillIn = keyframes`
  from {
    background-position: 100%;
  }
  to {
    background-position: 0%;
  }
`;

const Background = styled(FlexBox)<{ isTransitioning: boolean }>`
  min-height: 100%;
  width: 100%;
  background: linear-gradient(to right, blue 50%, navy 50%);
  background-size: 200% 100%;
  background-position: 100%;
  ${({ isTransitioning }) =>
    toggleAnimation(loadingFillIn, animationTimer, isTransitioning)}
`;

const FunButton = styled(Button)<{ isTransitioning: boolean }>`
  border: 1px solid white;
  background: linear-gradient(to right, green 50%, navy 50%);
  background-size: 200% 100%;
  background-position: 100%;
  color: white;
  border-radius: 4px;
  font-size: 32px;
  font-family: 'Rowdies', cursive;
  padding: 20px 80px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  ${({ isTransitioning }) =>
    toggleAnimation(loadingFillIn, animationTimer, isTransitioning)}
`;

const Loading: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const push = useGetPushFn();

  const onClick = async () => {
    setIsTransitioning(true);
    await delay(null, animationTimer);
    push();
  };

  return (
    <Layout>
      <Background center isTransitioning={isTransitioning}>
        <FunButton isTransitioning={isTransitioning} onClick={onClick}>
          <p>Click Me</p>
        </FunButton>
      </Background>
    </Layout>
  );
};

export default Loading;
