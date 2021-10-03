import { useRouter } from 'next/router';
import SignIn from './SignIn';
import { useUser } from './User';

export default function IsSignIn({ children }) {
  const me = useUser();

  if (!me) return <SignIn />;

  return children;
}
