import { css } from '@emotion/react';

export const pxToRem = (px: number) => `${px / 16}rem`;

export const toggleAnimation = (
  animation: ReturnType<typeof css>,
  animationMs: number,
  playAnimation: boolean
) =>
  playAnimation
    ? css`
        animation: ${animation} ${animationMs}ms forwards;
      `
    : '';
