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
  background: linear-gradient(to right, #a6fa4e 50%, #efefef 50%);
  background-size: 200% 100%;
  background-position: 100%;
  align-items: flex-end;
  padding: 5rem;
  ${({ isTransitioning }) =>
    toggleAnimation(loadingFillIn, animationTimer, isTransitioning)}
`;

const FunButton = styled(Button)<{ isTransitioning: boolean }>`
  border: 2px solid #2b2b2b;
  background: linear-gradient(to right, #a6fa4e 50%, #efefef 50%);
  background-size: 200% 100%;
  background-position: 100%;
  color: #2b2b2b;
  border-radius: 50px;
  font-size: 32px;
  font-family: 'Manrope', sans-serif;
  padding: 20px 80px;
  box-shadow: 0px 4px 10px 0px #a6fa4e;
  transition: border-radius 250ms linear;
  ${({ isTransitioning }) =>
    toggleAnimation(loadingFillIn, animationTimer, isTransitioning)}
  :hover {
    border-radius: 10px;
  }
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
