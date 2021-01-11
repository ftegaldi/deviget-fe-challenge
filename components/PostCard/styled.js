import styled from 'styled-components';

export const CardContainer = styled.article`
  background-color: #ffffff;
  color: #222222;
  padding: 0.3rem;
  font-size: 0.9em;
  margin-bottom: ${({lastCard}) => (lastCard ? '0.5rem' : null)};
  border-radius: 0.5rem;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  h2 {
    font-weight: 400;
    padding-left: 0.3rem;
  }

  p {
    flex-grow: 1;
    text-align: end;
  }
`;

export const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7em;
  cursor: pointer;

  img {
    max-width: 6.25rem;
  }

  h3 {
    width: auto;
    padding: 0 0.3rem;
  }

  span {
    margin-left: auto;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9em;
  padding-top: 0.3rem;
  
  p {
    margin: 0 auto;
  }
`;

export const ReadIndicator = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;

  span {
    color: ${({ isRead }) => (isRead ? '#ffffff' : '#ff4500')};
  }
`;

export const DismissButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 40%;
  background-color: #0079d3;
  border-radius: 0.2rem;
  border: none;
  color: #ffffff;
  cursor: pointer;

  :hover {
    background-color: #33a8ff;
  }

  // p {
  //   padding-left: 0.5rem;
  // }
`;