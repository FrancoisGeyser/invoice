import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../context/context';
import Footer from './footer';
import UserInfo from './userinfo';
import SidebarLayoutContainer from './sidebarlayout';
import UlContainer from './menulayout';

const SidebarComponent = () => {
  const { state } = useContext(Store);
  const { user } = state;
  return (
    <SidebarLayoutContainer>
      <div>{user.loggedIn && <UserInfo user={user} />}</div>
      <UlContainer>
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
      </UlContainer>
      <Footer />
    </SidebarLayoutContainer>
  );
};

export default SidebarComponent;
