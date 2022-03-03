import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { useGetPushFn } from '~/logic/routing';
import { delay } from '~/logic/util/delay';
import { toggleAnimation } from '~/logic/util/styles';

const animationTimer = 4000;

// Button animations

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

// Stars animations

const StarContainerDisplay = keyframes`
  from {
    z-index: 0;
  }
  to {
    z-index: 100
  }
`;

const StarSvgDisplay = keyframes`
  0% {
    opacity: 0;
    transform: scale(0%) rotate(0deg);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: scale(100%) rotate(180deg);
  }
`;

// Button styles

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

const FunButton = styled(Button)`
  cursor: pointer;
  z-index: 1;
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

// Animation Stars

const AbsoluteBox = styled.div<{ isTransitioning: boolean }>`
  position: absolute;
  z-index: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(StarContainerDisplay, 100, isTransitioning)}
`;

const StarBox = styled.div`
  position: relative;
  width: 60vw;
  height: 90vh;
`;

const GreenSvg = styled.svg<{ isTransitioning: boolean }>`
  width: 40%;
  position: absolute;
  top: 20%;
  right: 0%;
  z-index: 5;
  opacity: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(StarSvgDisplay, 2000, isTransitioning)}
  animation-delay: 250ms;
`;

const PurpleSvg = styled.svg<{ isTransitioning: boolean }>`
  width: 20%;
  position: absolute;
  bottom: 30%;
  left: 30%;
  z-index: 10;
  opacity: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(StarSvgDisplay, 2000, isTransitioning)}
  animation-delay: 500ms;
`;

const WhiteSvg = styled.svg<{ isTransitioning: boolean }>`
  width: 20%;
  position: absolute;
  top: 20%;
  right: 30%;
  z-index: 9;
  opacity: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(StarSvgDisplay, 2000, isTransitioning)}
  animation-delay: 1000ms;
`;

const BlueSvg = styled.svg<{ isTransitioning: boolean }>`
  width: 30%;
  position: absolute;
  top: 30%;
  left: 40%;
  z-index: 7;
  opacity: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(StarSvgDisplay, 2000, isTransitioning)}
`;

const RedSvg = styled.svg<{ isTransitioning: boolean }>`
  width: 40%;
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 6;
  opacity: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(StarSvgDisplay, 2000, isTransitioning)}
`;

const PinkSvg = styled.svg<{ isTransitioning: boolean }>`
  width: 30%;
  position: absolute;
  top: 20%;
  left: 0;
  z-index: 8;
  opacity: 0;
  animation-delay: 1000ms;
  ${({ isTransitioning }) =>
    toggleAnimation(StarSvgDisplay, 2000, isTransitioning)}
  animation-delay: 250ms;
`;

const YellowSvg = styled.svg<{ isTransitioning: boolean }>`
  width: 40%;
  position: absolute;
  bottom: 10%;
  left: 40%;
  z-index: 4;
  opacity: 0;
  ${({ isTransitioning }) =>
    toggleAnimation(StarSvgDisplay, 2000, isTransitioning)}
  animation-delay: 500ms;
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
        <AbsoluteBox isTransitioning={isTransitioning}>
          <StarBox>
            <GreenSvg
              fill="none"
              isTransitioning={isTransitioning}
              viewBox="0 0 246 238"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m154.737.705 21.669 36.136 41.826 5.099-3.709 41.971 30.841 28.709-27.672 31.776 8.077 41.354-41.064 9.442-17.773 38.203-38.771-16.498-36.835 20.46-21.669-36.136-41.826-5.098 3.71-41.972L.7 125.442 28.37 93.667l-8.076-41.354 41.063-9.442L79.132 4.668l38.771 16.498L154.737.706Z"
                fill="#1F4D30"
              />
            </GreenSvg>
            <PurpleSvg
              fill="none"
              isTransitioning={isTransitioning}
              viewBox="0 0 167 163"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m83.5 0 18.549 46.984 48.298-14.792-25.169 43.795 41.678 28.539-49.933 7.628 3.674 50.379L83.5 128.25l-37.097 34.283 3.674-50.379-49.933-7.628 41.678-28.539-25.169-43.795 48.298 14.792L83.5 0Z"
                fill="#81007B"
              />
            </PurpleSvg>
            <WhiteSvg
              fill="none"
              isTransitioning={isTransitioning}
              viewBox="0 0 167 163"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m83.5 0 18.549 46.984 48.298-14.792-25.169 43.795 41.678 28.539-49.933 7.628 3.674 50.379L83.5 128.25l-37.097 34.283 3.674-50.379-49.933-7.628 41.678-28.539-25.169-43.795 48.298 14.792L83.5 0Z"
                fill="#FBF2EA"
              />
            </WhiteSvg>
            <BlueSvg
              fill="none"
              isTransitioning={isTransitioning}
              viewBox="0 0 213 213"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m45.088.25 77.103 46.925 90.235-2.087-46.925 77.103 2.087 90.235-77.103-46.925L.25 167.588l46.925-77.103L45.088.25Z"
                fill="#1A0DE2"
              />
            </BlueSvg>
            <RedSvg
              fill="none"
              isTransitioning={isTransitioning}
              viewBox="0 0 290 290"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m145 0 12.125 29.636 18.022-26.467 5.699 31.508 23.131-22.141L203 44.54l27.229-16.848-7.61 31.102 30.137-10.819-13.91 28.84 31.728-4.316-19.603 25.319 31.932 2.374-24.438 20.689 30.741 8.961L261 145l28.206 15.157-30.741 8.961 24.438 20.689-31.932 2.374 19.603 25.319-31.728-4.317 13.91 28.841-30.137-10.819 7.61 31.102L203 245.459l.977 32.005-23.131-22.141-5.699 31.508-18.022-26.466L145 290l-12.125-29.635-18.022 26.466-5.699-31.508-23.13 22.141.976-32.005-27.229 16.848 7.61-31.102-30.137 10.819 13.91-28.841-31.728 4.317 19.603-25.319-31.932-2.374 24.438-20.689-30.74-8.961L29 145 .794 129.843l30.74-8.961-24.437-20.689 31.932-2.374L19.426 72.5l31.728 4.317-13.91-28.84 30.137 10.818-7.61-31.103L87 44.543l-.977-32.006 23.131 22.141 5.699-31.508 18.022 26.466L145 0Z"
                fill="#D93933"
              />
            </RedSvg>
            <PinkSvg
              fill="none"
              isTransitioning={isTransitioning}
              viewBox="0 0 238 238"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m150.737.705 21.339 87.701 65.282 62.331-87.701 21.338-62.33 65.282-21.34-87.701L.707 87.326l87.7-21.339L150.738.705Z"
                fill="#F74DF0"
              />
            </PinkSvg>
            <YellowSvg
              fill="none"
              isTransitioning={isTransitioning}
              viewBox="0 0 290 290"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m145 0 12.125 29.636 18.022-26.467 5.699 31.508 23.131-22.141L203 44.54l27.229-16.848-7.61 31.102 30.137-10.819-13.91 28.84 31.728-4.316-19.603 25.319 31.932 2.374-24.438 20.689 30.741 8.961L261 145l28.206 15.157-30.741 8.961 24.438 20.689-31.932 2.374 19.603 25.319-31.728-4.317 13.91 28.841-30.137-10.819 7.61 31.102L203 245.459l.977 32.005-23.131-22.141-5.699 31.508-18.022-26.466L145 290l-12.125-29.635-18.022 26.466-5.699-31.508-23.13 22.141.976-32.005-27.229 16.848 7.61-31.102-30.137 10.819 13.91-28.841-31.728 4.317 19.603-25.319-31.932-2.374 24.438-20.689-30.74-8.961L29 145 .794 129.843l30.74-8.961-24.437-20.689 31.932-2.374L19.426 72.5l31.728 4.317-13.91-28.84 30.137 10.818-7.61-31.103L87 44.543l-.977-32.006 23.131 22.141 5.699-31.508 18.022 26.466L145 0Z"
                fill="#FAD951"
              />
            </YellowSvg>
          </StarBox>
        </AbsoluteBox>
        <FunButton onClick={onClick}>
          <Star viewBox="0 0 70 70" xmlns="http://www.w3.org/200Star">
            <ButtonStarPath
              d="m34 0 6.49 15.028 14.082-8.344-3.583 15.973 16.298 1.527L55 35l12.287 10.816-16.298 1.527 3.584 15.973-14.084-8.344L34 70l-6.49-15.028-14.083 8.344 3.584-15.973L.713 45.816 13 35 .713 24.184l16.298-1.527-3.583-15.973 14.083 8.344L34 0Z"
              fill="#F74DF0"
            />
          </Star>
          <p>Click Me</p>
        </FunButton>
      </Background>
    </Layout>
  );
};

export default Spin;
