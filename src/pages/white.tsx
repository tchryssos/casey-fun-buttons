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
`;

const FunButton = styled(Button)`
  background-color: white;
  border: ${pxToRem(2)} solid blue;
  padding: ${pxToRem(15)} ${pxToRem(100)};
  border-radius: ${pxToRem(100)};
  transform: translate(10vw, -10vh);
`;

const White: React.FC = () => {
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

export default White;
