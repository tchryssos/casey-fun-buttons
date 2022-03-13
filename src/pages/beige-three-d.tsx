import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { useGetPushFn } from '~/logic/routing';
import { delay } from '~/logic/util/delay';
import { pxToRem, toggleAnimation } from '~/logic/util/styles';

const animationTimer = 1500;

const createGrowLine = (index: number) => {
  let translationStart = 0;
  let translationEnd = -100;
  if (index === 1 || index === 2) {
    translationEnd = -115;
  }
  if (index >= 4) {
    translationStart = -100;
    translationEnd = 100;
    if (index === 5 || index === 6) {
      translationEnd = 115;
    }
  }

  const rotation =
    index < 4
      ? `${index * 12.5 * -1 + 20}deg`
      : `${(index - 4) * 12.5 - 20}deg`;
  return keyframes`
  from {
    transform: translateX(${translationStart}%) translateY(20px) rotate(${rotation});
  }
  to {
    transform: translateX(${translationEnd}%) translateY(20px) rotate(${rotation});
  }
`;
};

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #fbf2ea;
`;

const ButtonWrapper = styled.div`
  transform: translate(10vw, -10vh);
  position: relative;
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
  z-index: 2;
  ${({ isTransitioning }) =>
    toggleAnimation(buttonDown, 500, isTransitioning)}/* :hover {
    background-color: #f8c81f;
  } */
`;

interface LineProps {
  color: string;
  className?: string;
}

const Line: React.FC<LineProps> = ({ color, className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 48 6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 3L45 3" stroke={color} strokeLinecap="round" strokeWidth="6" />
  </svg>
);

const AnimatedLine = styled(Line)<{ isTransitioning: boolean; index: number }>(
  ({ isTransitioning, index }) => css`
    width: 3rem;
    display: ${isTransitioning ? 'block' : 'none'};
    position: absolute;
    left: ${index < 4 ? 0 : ''};
    right: ${index >= 4 ? 0 : ''};
    top: ${index < 4 ? `${index * 33}%` : `${(index - 4) * 33}%`};
    ${toggleAnimation(createGrowLine(index), 500, isTransitioning)};
    animation-delay: ${index < 4 ? index * 50 : (index - 4) * 50}ms;
  `
);

const BeigeThreeD: React.FC = () => {
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
          <AnimatedLine
            color="#E77373"
            index={0}
            isTransitioning={isTransitioning}
          />
          <AnimatedLine
            color="#22EBD3"
            index={1}
            isTransitioning={isTransitioning}
          />
          <AnimatedLine
            color="#FFFFFF"
            index={2}
            isTransitioning={isTransitioning}
          />
          <AnimatedLine
            color="#FDAA2D"
            index={3}
            isTransitioning={isTransitioning}
          />
          <AnimatedLine
            color="#1A0DE2"
            index={4}
            isTransitioning={isTransitioning}
          />
          <AnimatedLine
            color="#0DE23C"
            index={5}
            isTransitioning={isTransitioning}
          />
          <AnimatedLine
            color="#1A0DE2"
            index={6}
            isTransitioning={isTransitioning}
          />
          <AnimatedLine
            color="#F64DF0"
            index={7}
            isTransitioning={isTransitioning}
          />
          <FunButton isTransitioning={isTransitioning} onClick={onClick}>
            <p>click me!</p>
          </FunButton>
        </ButtonWrapper>
      </Background>
    </Layout>
  );
};

export default BeigeThreeD;
