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

const LetterDance = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-7px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: white;
  justify-content: flex-end;
  padding: 5em;
`;

const FunButton = styled(Button)`
  background-color: #efefef;
  color: black;
  font-size: 2em;
  border: none;
  padding: 0.5em;
`;

const LetterWrapper = styled(FlexBox)``;

const Letter = styled.p<{ animationDelay: number }>`
  font-family: 'Fira Sans', sans-serif;
  animation: ${LetterDance} 1.5s infinite linear;
  animation-delay: ${({ animationDelay }) => animationDelay}ms;
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
      <Background center>
        <FunButton onClick={onClick}>
          <LetterWrapper>
            <Letter animationDelay={0}>C</Letter>
            <Letter animationDelay={250}>L</Letter>
            <Letter animationDelay={500}>I</Letter>
            <Letter animationDelay={750}>C</Letter>
            <Letter animationDelay={1000}>K</Letter>
            <Letter animationDelay={1250}>M</Letter>
            <Letter animationDelay={1500}>E</Letter>
          </LetterWrapper>
        </FunButton>
      </Background>
    </Layout>
  );
};

export default Loading;
