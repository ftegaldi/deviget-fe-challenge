import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  & .modal-content {
    opacity: 0;
  }

  &.active {
    opacity: 1;

    & .modal-content {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  min-height: 50px;
  min-width: 50px;
  max-height: 80%;
  max-width: 80%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 2px;
  z-index: 3;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalButton = styled.button`
  border: 1px solid #dae0e6;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 10%;
  cursor: pointer;
  margin-left: 0.5rem;

  :hover {
    background-color: #33a8ff;
  }
`;
