import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { items } from 'constants/data/items';
import Image from 'rc-image';

interface Props {
  item: any;
}

const Cart: React.FC<any> = ({ item }) => {
  let prod: any = items;

  return (
    <section className="w-[90%] h-[10vh] my-4  m-auto rounded-md grid items-center grid-cols-4">
      <section>
        <Image
          src={prod[0].image}
          width="100"
          className="w-[100px] h-[10vh] rounded-full"
          height="100"
          alt="img"
        />
      </section>
      <section className="">
        <p className="m-0 font-medium text-md">{prod[0].name}</p>
        <p className="m-0 font-medium text-md">{prod[0].qty}</p>
        <p className="my-2 text-lg text-green-600 ">
          ₹{prod[0].price}{' '}
          <del className="mx-1 text-red-700">₹{prod[0].discountAmount}</del>
        </p>
      </section>
      <section className="">
        <p>Quantity</p>
        <input
          className="border"
          type="number"
          min="1"
          max="5"
          defaultValue={1}
        />
      </section>

      <FontAwesomeIcon className="w-[1vw]" icon={faClose} />
    </section>
  );
};

export default Cart;
