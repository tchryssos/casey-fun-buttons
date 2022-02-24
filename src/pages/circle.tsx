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

const ShakeRotate = keyframes`
  0% {
    transform: translateX(-200px) rotate(-12deg);
  }
  10% {
    transform: translateX(-200px) rotate(0deg);
  }
  20% {
    transform: translateX(-200px) rotate(-6deg);
  }
  30% {
    transform: translateX(-200px) rotate(6deg);
  }
  40%, 100% {
    transform: translateX(-200px) rotate(-12deg);
  }
`;

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: yellow;
`;

const ButtonWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-image: url('/circle-outter.png');
  background-size: contain;
  /* background-color: red; */
  animation: ${ShakeRotate} 3s infinite ease-in-out;
`;

const FunButton = styled(Button)`
  cursor: pointer;
  position: relative;
  top: 50px;
  left: 50px;
  width: 200px;
  height: 200px;
  z-index: 10;
  color: white;
  background-color: blue;
  border-radius: 100%;
  border: none;
  transform: rotate(-12deg);
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 2em;
`;

const Circle: React.FC = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const push = useGetPushFn();

  const onClick = async () => {
    setIsTransitioning(true);
    await delay(null, animationTimer);
    push();
  };

  return (
    <Layout>
      <Background center>
        <ButtonWrapper>
          <FunButton onClick={onClick}>
            <p>Click Me</p>
          </FunButton>
        </ButtonWrapper>
      </Background>
    </Layout>
  );
};

export default Circle;
