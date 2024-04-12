import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Content from './Content';

import AuthButtons from './Auth/AuthButtons.jsx';

function App(props) {
    return(
      <>
        <div>
          <AuthButtons />
        </div>
        <Profile />
        <Content />
      </>
    )
  }

export default withAuth0(App);
