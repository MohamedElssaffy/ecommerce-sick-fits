import Link from 'next/link';
import { useUser } from '../lib/useUser';
import SignOut from './SignOut';

import NavStyles from './styles/NavStyles';

export default function Nav() {
  const user = useUser();
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user ? (
        <>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <Link href="/sell">Sell</Link>
          <SignOut />
        </>
      ) : (
        <Link href="/signin">Sign In</Link>
      )}
    </NavStyles>
  );
}
