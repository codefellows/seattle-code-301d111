import { useAuth0, withAuth0 } from '@auth0/auth0-react';

function Profile({ auth0 }) {

  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return isAuthenticated
    ? <div>Hello {auth0.user.name}:{auth0.user.email}</div>
    : null;
}

export default withAuth0(Profile);
