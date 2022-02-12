import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { Body } from '~/components/typography/Body';
import { useGetPushFn } from '~/logic/routing';
import { pxToRem } from '~/logic/util/styles';

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #6495ed;
`;

const FunButton = styled(Button)`
  padding: ${pxToRem(20)} ${pxToRem(40)};
  background-color: #ff0000;
  text-align: center;
  color: #fff;
  border-radius: ${pxToRem(8)};
  transition: transform 0.5s, background-color 0.5s;

  &:hover {
    background-color: #ffa500;
    transform: rotate(-6deg);
  }
`;

const BlueBg: React.FC = () => {
  const push = useGetPushFn();

  return (
    <Layout>
      <Background center>
        <FunButton onClick={push}>
          <Body>Click Me</Body>
        </FunButton>
      </Background>
    </Layout>
  );
};

export default BlueBg;
