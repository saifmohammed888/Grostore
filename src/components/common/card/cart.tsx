import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { items } from 'constants/data/items';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import alertActionCreator from 'redux/actionCreators/alertAction';
import cartActionCreator from 'redux/actionCreators/cartAction';

interface Props {
  item: any;
}

const Cart: React.FC<any> = (item) => {
  let dispatch = useDispatch();
  let prod: any = item.items;
  let cart = useSelector((state: any) => state.cart);

  const removeCart = (id) => {
    console.log(id);
    console.log(cart);

    if (cart.items.length > 0) {
      let item = cart.items;
      var filtered = item.filter(function (el) {
        return el !== id;
      });

      cartActionCreator.addToCart(dispatch, filtered);
      alertActionCreator.errorAlert(dispatch, 'Removed cart');
    }
  };

  return (
    <section className="w-[90%] h-[10vh] my-4  m-auto rounded-md grid items-center grid-cols-4">
      <section>
        <Image
          src={prod.image}
          width="100"
          className="w-[100px] h-[10vh] opacity-80"
          height="100"
          alt="img"
        />
      </section>
      <section className="">
        <p className="m-0 font-medium text-md">{prod.name}</p>
        <p className="m-0 font-medium text-md">{prod.qty}</p>
        <p className="my-2 text-lg text-green-600 ">
          ₹{prod.price}
          <del className="mx-1 text-red-700">₹{prod.discountAmount}</del>
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

      <a
        onClick={() => {
          removeCart(prod.id);
        }}
      >
        <FontAwesomeIcon className="w-[1vw]" icon={faClose} />
      </a>
    </section>
  );
};

export default Cart;
