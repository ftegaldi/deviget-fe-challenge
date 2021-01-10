import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  background-color: tomato;
  max-width: 20vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const TopSection = styled.div`
  display: flex;
  padding: 0.5rem;
  max-height: 3rem;
  align-items: center;
  justify-content: space-around;
`;

export const SidebarBody = styled.div`
  overflow: auto;
  padding: 0 0.5rem;
  flex-grow: 1;
`;

export const BottomSection = styled.div`
  max-height: 3rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-top: auto;
  button {
  }
`;

export const ShowHideButton = styled.button``;
