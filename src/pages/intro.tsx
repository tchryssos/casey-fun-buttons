import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { useGetPushFn } from '~/logic/routing';
import { delay } from '~/logic/util/delay';
import { toggleAnimation } from '~/logic/util/styles';

const animationTimer = 0;

const Corners = keyframes`
  0%{
    border-radius: 0 0 0 0;
  }
  20%{
    border-radius: 0 2rem 0 0;
  }
  40% {
    border-radius: 0 0 2rem 0;
  }
  60%{
    border-radius: 0 0 0 2rem;
  }
  80%{
    border-radius: 2rem 0 0 0;
  }
`;

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  /* background-image: linear-gradient(0deg, #ffe66d 0%, white 100%); */
  background-color: #2727e6;
  cursor: url('/wave.png'), auto;
`;

const FunButton = styled(Button)`
  font-family: 'Inconsolata', serif;
  font-size: 1.5rem;
  border: 2px solid #2727e6;
  padding: 0.25em;
  color: white;
  background-color: #2727e6;
  transition: transform 500ms;
  animation: ${Corners} 4s linear infinite;
  cursor: pointer;
  margin: 2rem;
  :hover {
    transform: scale(1.5);
    animation: none;
    background-color: #ffe66d;
    color: #2727e6;
    border: 2px solid #ffe66d;
  }
`;

const ButtonBox = styled(FlexBox)`
  font-family: 'Inconsolata', serif;
  text-align: center;
  background-color: white;
  width: 50vw;
  height: 50vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;
  border: 5px solid #ffe66d;
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
        <ButtonBox>
          <p>
            {' '}
            This is a ... project ... collection of fun buttons designed and
            built by Casey Bradford - link to portfolio. To practice working
            with css, typescript, next. To create some maybe outrageuos moments
            that dont exist in typical corporate product design work.
          </p>
          <FunButton onClick={onClick}>
            <p>Enter</p>
          </FunButton>
        </ButtonBox>
      </Background>
    </Layout>
  );
};

export default Loading;
