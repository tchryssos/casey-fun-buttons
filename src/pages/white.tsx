import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';
import { useGetPushFn } from '~/logic/routing';
import { pxToRem } from '~/logic/util/styles';

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #fbf2ea;
`;

const FunButton = styled(Button)`
  background-color: #fbf2ea;
  border: ${pxToRem(2)} solid black;
  padding: ${pxToRem(15)} ${pxToRem(100)};
  border-radius: ${pxToRem(100)};
  transform: translate(10vw, -10vh);
  font-size: 2em;
`;

const ButtonShadow = styled.div`
  background-color: black;
  border-radius: 20px 20px 50px 50px;
  width: 100px;
  height: 100px;
`;

const White: React.FC = () => {
  const push = useGetPushFn();

  return (
    <Layout>
      <Background center>
        <FunButton onClick={push}>
          <p>click me!</p>
        </FunButton>
        <ButtonShadow />
      </Background>
    </Layout>
  );
};

export default White;
