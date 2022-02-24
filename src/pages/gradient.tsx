
import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';


const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: #e52e71;
`;

const MouseGradient = styled.div`
  height: 500px;
  width: 500px;
  background-image:
    radial-gradient(
      circle at 50% 50%,
      #ff8a00,
      #e52e71
    );
`;

const FunButton = styled(Button)<{ isTransitioning: boolean }>`
  background-color: yellow;
  position: fixed;
`;

const Gradient: React.FC = () =>

  // const mouseMove = (x, y) => {

  // };
 (
   <Layout>
     <Background center>
       <MouseGradient />
       <FunButton>
         <p>Click Me</p>
       </FunButton>
     </Background>
   </Layout>
  );


export default Gradient;
