import styled from '@emotion/styled';

import { FlexBox } from '~/components/box/FlexBox';
import { Button } from '~/components/Button';
import { Layout } from '~/components/meta/Layout';

const Background = styled(FlexBox)`
  min-height: 100%;
  width: 100%;
  background-color: white;
`;

const FunButton = styled(Button)`
    background-color: white;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 4px 5px 0px #00000015;
    padding: 12px 48px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    font-size: 30px;
`;

const Star = styled.svg`
  width: 40px;
  margin-right: 10px;
`;

const Spin: React.FC = () => (
  <Layout>
    <Background center>
      <FunButton>
        <Star fill="none" viewBox="0 0 70 68" xmlns="http://www.w3.org/200Star"><path d="m34 0 6.49 15.028 14.082-8.344-3.583 15.973 16.298 1.527L55 35l12.287 10.816-16.298 1.527 3.584 15.973-14.084-8.344L34 70l-6.49-15.028-14.083 8.344 3.584-15.973L.713 45.816 13 35 .713 24.184l16.298-1.527-3.583-15.973 14.083 8.344L34 0Z" fill="#F74DF0" /></Star>
        <p>Click Me</p>
      </FunButton>
    </Background>
  </Layout>
);

export default Spin;
