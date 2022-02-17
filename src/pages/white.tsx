import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { useGetPushFn } from '~/logic/routing';
import { delay } from '~/logic/util/delay';
import { pxToRem, toggleAnimation } from '~/logic/util/styles';

const animationTimer = 2000;

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #fbf2ea;
`;

const ButtonWrapper = styled.div`
  transform: translate(10vw, -10vh);
`;

const buttonDown = keyframes`
  from {
    box-shadow: 0px 20px 0px 0px #000000;
    transform: translateY(0)
  }
  to {
    box-shadow: 0px 0px 0px 0px #000000;
    transform: translateY(20px);
  }
`;

const FunButton = styled(Button)<{ isTransitioning: boolean }>`
  background-color: #fbf2ea;
  border: ${pxToRem(4)} solid black;
  padding: ${pxToRem(15)} ${pxToRem(100)};
  border-radius: ${pxToRem(100)};
  font-size: 2em;
  box-shadow: 0px 20px 0px 0px #000000;
  ${({ isTransitioning }) => toggleAnimation(buttonDown, 500, isTransitioning)}
`;

const White: React.FC = () => {
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
          <FunButton isTransitioning={isTransitioning} onClick={onClick}>
            <p>click me!</p>
          </FunButton>
        </ButtonWrapper>
      </Background>
    </Layout>
  );
};

export default White;
