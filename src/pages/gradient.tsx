// import { keyframes } from '@emotion/react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { useGetPushFn } from '~/logic/routing';
import { delay } from '~/logic/util/delay';
import { toggleAnimation } from '~/logic/util/styles';

const animationTimer = 2000;

const Shine = keyframes`
  0% {
    background-position: 100%;
  }
  50% {
    background-position: 0%;
  }
  100% {
    background-position: 0%;
  }
`;

const DisplayBubble = keyframes`
  0% {
    opacity: 0;
    transform: translate(4em, 5em) rotate(0deg);
  }
  70% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(10em, 10em) rotate(720deg);
  }
`;

const DisplayBubble1 = keyframes`
  0% {
    opacity: 0;
    transform: translate(-2em, 1em) rotate(0deg);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-2em, 1em) rotate(360deg);
  }
`;

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #141625;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 4rem;
  cursor: url('/pinkcursor.png'), auto;
`;

const FunButton = styled(Button)<{ isTransitioning: boolean }>`
  background: linear-gradient(
    45deg,
    #e882ba 43.53%,
    #e882ba 49.42%,
    #464d72 53%,
    #dd833e 55.73%,
    #ece8e7 64.58%,
    #e882ba 71%
  );
  background-size: 350% 100%;
  background-position: 100%;
  border: none;
  width: 40vw;
  padding: 1rem;
  cursor: url('/greencursor.png'), pointer;
  animation: ${Shine} 4s infinite;
  &:hover {
    cursor: url('/greencursor.png'), pointer;
  }
`;

const Bubble1 = styled.div<{ isTransitioning: boolean }>`
  background-image: url('/Star4.png');
  background-size: contain;
  height: 2rem;
  width: 2rem;
  opacity: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(DisplayBubble1, animationTimer, isTransitioning, 'linear')}
`;

const Bubble2 = styled.div<{ isTransitioning: boolean }>`
  background: radial-gradient(
    67.92% 67.92% at 64.15% 32.08%,
    #ece3e5 0%,
    rgba(221, 131, 62, 0) 100%
  );
  border-radius: 100%;
  background-size: contain;
  height: 2rem;
  width: 2rem;
  opacity: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(DisplayBubble, animationTimer, isTransitioning, 'linear')}
`;

const ClickMeCutOut = styled.svg`
  width: 100%;
  height: 100%;
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
        <Bubble1 isTransitioning={isTransitioning} />
        <Bubble2 isTransitioning={isTransitioning} />
        <FunButton onClick={onClick}>
          <ClickMeCutOut
            fill="none"
            viewBox="0 0 697 106"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M697 0H0v106h697V0ZM201.009 30.3v-15h-25.4v15h25.4Zm-.7 10.7h-24v49h24V41Zm-60.235-20h24v69h-24V21Zm-12.14 42.3c-.334 6.333-2.634 11.633-6.9 15.9-4.267 4.267-10.567 7.467-18.9 9.6-8.267 2.133-18.734 3.2-31.4 3.2-9.667 0-18.334-.533-26-1.6-7.667-1-14.2-2.733-19.6-5.2-5.4-2.533-9.534-5.967-12.4-10.3-2.867-4.333-4.3-9.8-4.3-16.4 0-6.6 1.433-12.1 4.3-16.5 2.866-4.467 7-8 12.4-10.6 5.4-2.667 11.933-4.567 19.6-5.7 7.666-1.133 16.333-1.7 26-1.7 12.666 0 23.166 1.167 31.5 3.5 8.333 2.267 14.633 5.633 18.9 10.1 4.266 4.467 6.566 9.9 6.9 16.3h-26c-.8-2.133-2.267-4-4.4-5.6-2.134-1.667-5.334-2.967-9.6-3.9C83.767 43.467 78 43 70.734 43c-8.534 0-15.467.533-20.8 1.6-5.334 1-9.234 2.633-11.7 4.9-2.467 2.267-3.7 5.267-3.7 9 0 3.4 1.233 6.167 3.7 8.3 2.466 2.133 6.366 3.7 11.7 4.7 5.333 1 12.266 1.5 20.8 1.5 7.266 0 13-.433 17.2-1.3 4.266-.867 7.466-2.033 9.6-3.5 2.133-1.533 3.6-3.167 4.4-4.9h26Zm174.501 5.4c0 4.8-1.5 8.9-4.5 12.3-3 3.4-7.733 6-14.2 7.8-6.467 1.8-14.867 2.7-25.2 2.7-10.333 0-19.133-.833-26.4-2.5-7.2-1.667-12.7-4.4-16.5-8.2-3.733-3.8-5.6-8.867-5.6-15.2 0-6.333 1.867-11.4 5.6-15.2 3.8-3.867 9.3-6.633 16.5-8.3 7.267-1.733 16.067-2.6 26.4-2.6 10.333 0 18.7.9 25.1 2.7 6.4 1.8 11.1 4.4 14.1 7.8 3 3.4 4.533 7.467 4.6 12.2h-22c-1.066-2.6-3.467-4.6-7.2-6-3.733-1.467-8.6-2.2-14.6-2.2-4.867 0-9.1.367-12.7 1.1-3.6.667-6.4 1.833-8.4 3.5-1.933 1.667-2.9 4-2.9 7 0 2.933.967 5.233 2.9 6.9 1.933 1.667 4.7 2.833 8.3 3.5 3.6.667 7.867 1 12.8 1 6 0 10.867-.7 14.6-2.1 3.8-1.467 6.233-3.533 7.3-6.2h22ZM335.449 21h-24v69h24V21Zm28.6 40.1 32.2-20.1h-31.8l-28.6 21.1 33.4 27.9h30.4l-35.6-28.9ZM510.18 74.766 557.145 26h25v64h-25V57l-32 33h-30l-32-32.8V90h-25V26h25l47.035 49.035v-.27ZM684.852 72.4h-23.6c-.733 1.467-2.966 2.6-6.7 3.4-3.666.8-8.366 1.2-14.1 1.2-5.533 0-9.966-.433-13.3-1.3-3.266-.933-5.7-2.133-7.3-3.6-1.533-1.467-2.466-3.067-2.8-4.8h68c.134-6.867-1.333-12.3-4.4-16.3-3.066-4.067-7.833-7-14.3-8.8-6.466-1.8-14.766-2.7-24.9-2.7-10.333 0-19.133.833-26.4 2.5-7.266 1.667-12.833 4.433-16.7 8.3-3.8 3.8-5.7 8.9-5.7 15.3 0 6.467 1.967 11.6 5.9 15.4 3.934 3.8 9.534 6.5 16.8 8.1 7.334 1.6 16.034 2.4 26.1 2.4 9.534 0 17.367-.767 23.5-2.3 6.2-1.6 10.9-3.833 14.1-6.7 3.267-2.867 5.2-6.233 5.8-10.1Zm-60.6-16.1c3.734-1.533 9.134-2.3 16.2-2.3 7.2 0 12.434.733 15.7 2.2 3.267 1.4 5.134 2.967 5.6 4.7h-44c.667-1.533 2.834-3.067 6.5-4.6Z"
              fill="#141625"
              fillRule="evenodd"
            />
          </ClickMeCutOut>
        </FunButton>
      </Background>
    </Layout>
  );
};

export default Gradient;
