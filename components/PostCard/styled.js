import styled from 'styled-components';

export const CardContainer = styled.article`
  border-bottom: ${({ lastCard }) => (lastCard ? '1px solid white' : '')};
  background-color: black;
  color: white;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: center;
`;

export const MiddleSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7em;

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
  padding: 0 0.4rem;
  font-size: 0.9em;

  p {
    margin: 0 auto;
  }
`;

export const ReadIndicator = styled.div`
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
  background-color: ${({ isRead }) => (isRead ? 'black' : 'white')};
`;

export const DismissButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 40%;
  p {
    padding-left: 0.5rem;
  }
`;