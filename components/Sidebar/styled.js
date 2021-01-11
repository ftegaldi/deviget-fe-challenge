import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  position: fixed;
  background-color: #dae0e6;
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
  border-right: 1px solid #dae0e6;
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
  border-radius: 4%;
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

export const ShowHideButton = styled.button`
  border: ${({ isSidebarOpen }) => (isSidebarOpen ? 'none' : '1px solid #dae0e6')};
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: ${({ isSidebarOpen }) => (isSidebarOpen ? '10%' : 'none')};
  cursor: pointer;

  :hover {
    background-color: #33a8ff;
  }
`;
