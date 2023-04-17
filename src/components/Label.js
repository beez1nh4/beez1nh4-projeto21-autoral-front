import styled from 'styled-components';

export default styled.div`
  background: ${props => props.background};
  background-size: cover;
  width: 100%;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 8px;
  margin-top: 2px;
  margin-bottom: 2px;

  & > * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;