import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Store } from '../context/context';

const SidebarContainer = styled.div`
  height: 100vh;
  background-color: Gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserInfo = ({ user }) => {
  return (
    <div>
      <img src={user.detail.avatar} width='50%' />
      <p>{user.detail.userName}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <p>Copyright © 2020</p>
    </div>
  );
};

const SidebarComponent = () => {
  const { state } = useContext(Store);
  const { user } = state;
  return (
    <SidebarContainer>
      <div>{user.loggedIn && <UserInfo user={user} />}</div>
      <ul>
        {user.loggedIn ? (
          <li>
            <Link to='/'>Log out</Link>
          </li>
        ) : (
          <li>
            <Link to='/'>Login</Link>
          </li>
        )}
        {user.loggedIn && (
          <>
            <li>
              <Link to='/buyers'>Buyers</Link>
            </li>
            <li>
              <Link to='/terminal'>Terminals</Link>
            </li>
          </>
        )}
      </ul>
      <Footer />
    </SidebarContainer>
  );
};

export default SidebarComponent;
