import useSelection from 'antd/lib/table/hooks/useSelection';
import Image from 'next/image';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import alertActionCreator from 'redux/actionCreators/alertAction';
import cartActionCreator from 'redux/actionCreators/cartAction';

interface Props {
  item: {
    id: number;
    name: string;
    image: string;
    rating: number;
    description: string;
    deliveryTime: string;
    price: number;
    discountAmount: number;
  };
}

const CardProduct: React.FC<Props> = ({ item }) => {
  let dispatch = useDispatch();
  let cart = useSelector((state: any) => state.cart);

  const addToCart = (id) => {
    let item = [id];

    if (cart.items) {
      item = cart.items;
      if (!item.includes(id)) {
        item.push(id);
      }
    }

    cartActionCreator.addToCart(dispatch, item);
    alertActionCreator.successAlert(dispatch, 'Add to Cart Successfull');

    let local = JSON.stringify(item);
    if (window != undefined) {
      localStorage.setItem('cart', local);
    }
  };

  return (
    <section
      key={item.id}
      className="w-[60vw] my-4 m-auto   lg:w-[16vw] md:w-[22vw] sm:w-[30vw] min-h-[50vh] h-auto hover:shadow-xl duration-500 border bg-white relative p-1 rounded-[1vh] grid grid-rows-2"
    >
      <Image
        src={item.image}
        alt="Item"
        width="200"
        height="150"
        className="rounded-[1vh] h-[200px] w-[100%] "
      />
      <section className="p-1 text-left">
        <p className="text-lg m-1 font-semibold flex justify-between">
          {item.name}{' '}
          <span className="text-sm font-normal text-white bg-green-800 py-1 px-2 rounded-lg">
            {item.rating}/5
          </span>
        </p>
        {item.description !== '' ? (
          <p className="text-sm m-1 font-light">{item.description}</p>
        ) : (
          <></>
        )}
        <p className="text-sm font-thin m-1 text-green-700">
          Delivered in {item.deliveryTime}
        </p>
        <p className="text-lg m-1 text-yellow-700">
          ₹{item.price}{' '}
          <del className="text-red-700">₹{item.discountAmount}</del>
        </p>

        <button
          onClick={() => addToCart(item.id)}
          className="p-2 w-[90%] m-[5%] bg-yellow-500 border rounded-lg text-white"
        >
          Add to Cart
        </button>
      </section>
    </section>
  );
};

export default CardProduct;
