import Router from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import ResetRequest from '../components/ResetRequest';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useUser } from '../components/User';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

export default function SignInPage() {
  const me = useUser();
  useEffect(() => {
    if (me) {
      return Router.push('/');
    }
  }, [me]);

  return (
    <GridStyles>
      <SignIn />
      <SignUp />
      <ResetRequest />
    </GridStyles>
  );
}
