import styled from 'styled-components';

const UlContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  li {
    margin: 1rem auto;
    max-width: 70%;
    height: 1.5rem;
    padding: 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gold};
    border-radius: 5px;
    text-align: center;
    :hover {
      background-color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

export default UlContainer;
