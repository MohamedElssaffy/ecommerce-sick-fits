import CreateProduct from '../components/CreateProduct';
import IsSignIn from '../components/IsSignIn';

export default function SellPage() {
  return (
    <div>
      <IsSignIn>
        <CreateProduct />
      </IsSignIn>
    </div>
  );
}
