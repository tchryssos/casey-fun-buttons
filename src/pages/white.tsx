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
  ${({ isTransitioning }) => toggleAnimation(buttonDown, 500, isTransitioning)}
`;

interface LineProps {
  color: string;
  className?: string;
}

const Line: React.FC<LineProps> = ({ color, className }) => (
  <svg
    className={className}
    fill="none"
    height="62"
    width="6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 45V3" stroke={color} strokeLinecap="round" strokeWidth="6" />
  </svg>
);

const AnimatedLine = styled(Line)<{ isTransitioning: boolean; index: number }>(
  ({ isTransitioning, index }) => ({
    position: 'absolute',
    left: index < 4 ? 0 : '',
    right: index >= 4 ? 0 : '',
    top: index < 4 ? `${index * 33}%` : `${(index - 4) * 33}%`,
    transform: `rotate(${
      index < 4 ? `${index * 12 * -1 - 66}deg` : `${(index - 4) * 12 + 66}deg`
    })`,
  })
);

const White: React.FC = () => {
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
        <ButtonWrapper>
          <AnimatedLine color="#E77373" index={0} />
          <AnimatedLine color="#22EBD3" index={1} />
          <AnimatedLine color="#FFFFFF" index={2} />
          <AnimatedLine color="#FDAA2D" index={3} />
          <AnimatedLine color="#1A0DE2" index={4} />
          <AnimatedLine color="#0DE23C" index={5} />
          <AnimatedLine color="#1A0DE2" index={6} />
          <AnimatedLine color="#F64DF0" index={7} />
          <FunButton isTransitioning={isTransitioning} onClick={onClick}>
            <p>click me!</p>
          </FunButton>
        </ButtonWrapper>
      </Background>
    </Layout>
  );
};

export default White;
