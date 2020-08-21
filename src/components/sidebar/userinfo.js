import React from 'react';
import styled from 'styled-components';

const UserContainer = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem;
  img {
    max-width: 50%;
    border-radius: 100%;
    margin: 0.5rem;
  }
  h3 {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const UserInfo = ({ user }) => {
  return (
    <UserContainer>
      <img src={user.detail.avatar} width='50%' alt={user.detail.userName} />
      <h3>{user.detail.userName}</h3>
    </UserContainer>
  );
};

export default UserInfo;
