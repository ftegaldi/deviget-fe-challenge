import styled from 'styled-components';
import { animated } from 'react-spring';

import devices from 'styles';


export const SidebarContainer = styled(animated.aside)`
  background-color: #dae0e6;
  border-right: 1px solid #dae0e6;
  display: flex;
  flex-direction: column;
  width: 75vw;
  position: fixed;
  height: 100vh;
  z-index: 1;

  @media ${devices.mobileL} {
    width: 60vw;
  }

  @media ${devices.tablet} {
    width: 45vw;
  }

  @media ${devices.laptop} {
    width: 30vw;
  }

  @media ${devices.laptopL} {
    width: 25vw;
  }

  @media ${devices.desktop} {
    width: 20vw;
  }
`;

export const TopSection = styled.div`
  display: flex;
  padding: 0.5rem;
  max-height: 3rem;
  align-items: center;
  justify-content: center;

  h1 {
    flex-grow: 1;
    text-align: center;
  }
`;

export const SidebarBody = styled.div`
  overflow: auto;
  padding: 0 0.5rem;
  flex-grow: 1;
  // border-radius: 4%;
`;

export const BottomSection = styled.div`
  max-height: 3rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: auto;

  button {
    width: 75%;
    background-color: #0079d3;
    border-radius: 0.2rem;
    border: none;
    color: #ffffff;
    cursor: pointer;
    padding: 0.2rem;

    :hover {
      background-color: #33a8ff;
    }
  }
`;

export const SidebarMessage = styled.p`
  align-self: center;
  text-align: center;
  padding-top: 40vh;
`;