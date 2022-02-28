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

const ButtonStarSpin = keyframes`
  from {
    transform: rotate3d(0 ,1, 0, 0);
  }
  to {
    transform: rotate3d(0 ,1, 0, 360deg);
  }
`;

const ButtonStarColor = keyframes`
  0%, 25% {
    fill: #F74DF0;
  }
  25%, 75% {
    fill: #FAD951;
  }
  75%, 100% {
    fill: #F74DF0;
  }
`;

const BackgroundStarSpin = keyframes`
  from {
    transform: rotate3d(0 ,1, 0, 0);
  }
  to {
    transform: rotate3d(0 ,1, 0, 360deg);
  }
`;

const BackgroundColorChange = keyframes`
  0%, 25% {
    fill: #C6E5D0;
  }
  25%, 75% {
    fill: limegreen;
  }
  75%, 100% {
    fill: #C6E5D0;
  }
`;

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #c6e5d0;
`;

const Star = styled.svg`
  width: 40px;
  margin-right: 10px;
`;

const ButtonStarPath = styled.path``;

const BigStar = styled.svg<{ isTransitioning: boolean }>`
  width: 300px;
  ${({ isTransitioning }) =>
    toggleAnimation(BackgroundStarSpin, animationTimer, isTransitioning)}
`;

const BigStarPath = styled.path<{ isTransitioning: boolean }>`
  fill: #c6e5d0;
  ${({ isTransitioning }) =>
    toggleAnimation(
      BackgroundColorChange,
      animationTimer,
      isTransitioning,
      'steps(1, end)'
    )}
`;

const FunButton = styled(Button)`
  position: fixed;
  cursor: pointer;
  z-index: 100;
  background-color: #1f4d30;
  color: white;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 5px 0px #00000015;
  padding: 12px 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  font-size: 30px;
  font-family: 'Poppins', sans-serif;
  &:hover ${Star} {
    animation: ${ButtonStarSpin} 2s linear infinite;
  }
  &:hover ${ButtonStarPath} {
    animation: ${ButtonStarColor} 2s steps(1, end) infinite;
  }
`;

const Spin: React.FC = () => {
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
        <FunButton onClick={onClick}>
          <Star viewBox="0 0 70 70" xmlns="http://www.w3.org/200Star">
            <ButtonStarPath
              d="m34 0 6.49 15.028 14.082-8.344-3.583 15.973 16.298 1.527L55 35l12.287 10.816-16.298 1.527 3.584 15.973-14.084-8.344L34 70l-6.49-15.028-14.083 8.344 3.584-15.973L.713 45.816 13 35 .713 24.184l16.298-1.527-3.583-15.973 14.083 8.344L34 0Z"
              fill="#F74DF0"
            />
          </Star>
          <p>Click Me</p>
        </FunButton>
        <FlexBox>
          <BigStar
            isTransitioning={isTransitioning}
            viewBox="0 0 70 70"
            xmlns="http://www.w3.org/200Big"
          >
            <BigStarPath
              d="m34 0 6.49 15.028 14.082-8.344-3.583 15.973 16.298 1.527L55 35l12.287 10.816-16.298 1.527 3.584 15.973-14.084-8.344L34 70l-6.49-15.028-14.083 8.344 3.584-15.973L.713 45.816 13 35 .713 24.184l16.298-1.527-3.583-15.973 14.083 8.344L34 0Z"
              fill="#F74DF0"
              isTransitioning={isTransitioning}
            />
          </BigStar>
          <BigStar
            isTransitioning={isTransitioning}
            viewBox="0 0 70 70"
            xmlns="http://www.w3.org/200Big"
          >
            <BigStarPath
              d="m34 0 6.49 15.028 14.082-8.344-3.583 15.973 16.298 1.527L55 35l12.287 10.816-16.298 1.527 3.584 15.973-14.084-8.344L34 70l-6.49-15.028-14.083 8.344 3.584-15.973L.713 45.816 13 35 .713 24.184l16.298-1.527-3.583-15.973 14.083 8.344L34 0Z"
              fill="#F74DF0"
              isTransitioning={isTransitioning}
            />
          </BigStar>
        </FlexBox>
      </Background>
    </Layout>
  );
};

export default Spin;
