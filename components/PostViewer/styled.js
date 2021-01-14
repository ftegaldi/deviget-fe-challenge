import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.main)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  overflow: scroll;
`;
