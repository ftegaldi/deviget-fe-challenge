import styled from 'styled-components';
import devices from 'styles'

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  overflow: scroll;
  padding: ${({ isSidebarOpen }) =>
  isSidebarOpen ? 'calc(27px + 5vh) 0 5vh 0vw' : '5vh 0 5vh 0'};
  
  @media ${devices.desktop} {
    padding: ${({ isSidebarOpen }) =>
      isSidebarOpen ? 'calc(27px + 5vh) 0 5vh 20vw' : '5vh 0 5vh 0'};

  }
`;
