import styled from 'styled-components';

const SidebarLayoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.colors.red};
`;

export default SidebarLayoutContainer;
