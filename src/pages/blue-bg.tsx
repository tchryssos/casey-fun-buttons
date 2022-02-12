import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { Body } from '~/components/typography/Body';
import { useGetPushFn } from '~/logic/routing';
import { delay } from '~/logic/util/delay';
import { pxToRem, toggleAnimation } from '~/logic/util/styles';

const animationTimer = 2000;

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #6495ed;
`;

const growFontSize = keyframes`
  from {
    font-size: initial;
  }
  to {
    font-size:  ${pxToRem(200)};
  }
`;

const FunButton = styled(Button)<{ isTransitioning: boolean }>`
  padding: ${pxToRem(20)} ${pxToRem(40)};
  background-color: #ff0000;
  text-align: center;
  color: #fff;
  border-radius: ${pxToRem(8)};
  transition: transform 0.5s, background-color 0.5s;
  ${({ isTransitioning }) =>
    toggleAnimation(growFontSize, animationTimer, isTransitioning)}

  &:hover {
    background-color: #ffa500;
    transform: rotate(-6deg);
  }
`;

const BlueBg: React.FC = () => {
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
        <FunButton isTransitioning={isTransitioning} onClick={onClick}>
          <Body>Click Me</Body>
        </FunButton>
      </Background>
    </Layout>
  );
};

export default BlueBg;
