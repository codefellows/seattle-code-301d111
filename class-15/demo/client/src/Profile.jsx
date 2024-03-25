import { withAuth0 } from '@auth0/auth0-react';

function Profile({ auth0 }) {
  return <div>Hello {auth0.user.name}:{auth0.user.email}</div>;
}

export default withAuth0(Profile);
