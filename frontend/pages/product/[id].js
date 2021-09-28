import { useRouter } from 'next/router';

import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage() {
  const { id } = useRouter().query;
  return <SingleProduct id={id} />;
}
