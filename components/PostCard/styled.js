import styled from 'styled-components';
import devices from 'styles';

export const CardContainer = styled.article`
  background-color: #ffffff;
  color: #222222;
  padding: 0.3rem;
  font-size: 0.9em;
  margin-bottom: ${({lastCard}) => (lastCard ? '0.5rem' : null)};
  border-radius: 0.5rem;
`;

export const TopSectionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;

  h2 {
    font-weight: 400;
    padding-left: 0.3rem;
    flex-grow: 1;
    font-size: 1.2em;
  }
  
  p {
    flex-grow: 1;
    text-align: start;
    padding-left: 0.3rem;
  }

  @media ${devices.tablet} {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    h2 {
      font-size: 1.5em;
    }
    
    p {
      text-align: end;
    }
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
    padding: 0 0.3rem;
    width: 40%;
    word-wrap: break-word;
  }
  
  span {
    margin-left: auto;
  }

  @media ${devices.tablet} {
    h3 {
      width: auto;
    }
  }

  @media ${devices.desktop} {
    h3 {
      width: auto;
    }
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

  @media ${devices.mobileM} {
    padding: 0.1rem;
    width: 50%;

  }
  
  :hover {
    background-color: #33a8ff;
  }

  @media ${devices.desktop} {
    padding: 0;
    width: 40%;

    p {
      padding-left: 0.5rem;
    }
  }
`;