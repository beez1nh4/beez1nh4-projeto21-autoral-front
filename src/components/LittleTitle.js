import styled from 'styled-components';

export default styled.div`
  background: ${props => props.background};
  background-size: cover;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 22px;
  margin-top: 22px;
  margin-bottom: 30px;

  & > * {
    text-align: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;