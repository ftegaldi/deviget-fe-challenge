import styled from 'styled-components';

export const ShowHideButton = styled.button`
  border: ${({ isSidebarOpen }) => (isSidebarOpen ? 'none' : '1px solid #dae0e6')};
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: ${({ isSidebarOpen }) => (isSidebarOpen ? '10%' : '0')};
  cursor: pointer;
  position: ${({ isInSidebar }) => (isInSidebar ? 'sticky' : 'absolute')};

  :hover {
    background-color: #33a8ff;
  }
`;
