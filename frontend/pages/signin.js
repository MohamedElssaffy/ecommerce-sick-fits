// import gql from 'graphql-tag';
import Router from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';

import ResetRequest from '../components/ResetRequest';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import { useUser } from '../components/User';
// import { createClient } from '../lib/withData';

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

// export const getServerSideProps = async (context) => {
//   const client = createClient({});
//   const { data } = await client.query({
//     context: {
//       headers: {
//         'keystonejs-session': context.req.cookies['keystonejs-session'],
//       },
//     },
//     query: gql`
//       query {
//         authenticatedItem {
//           ... on User {
//             id
//             email
//             name
//           }
//         }
//       }
//     `,
//   });

//   console.log({ data });
//   console.log({ context: context.req.cookies['keystonejs-session'] });
//   return { props: {} };
// };
