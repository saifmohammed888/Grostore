import Heads from 'components/common/Head';
import { items } from 'constants/data/items';
import { titleIcon } from 'constants/images';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const Layout = dynamic(() => import('components/common/layout/layout'));
const Carts = dynamic(() => import('components/common/card/cart'));

const CartContainer: React.FC = () => {
  let item: any = [];
  let cartItems = useSelector((state: any) => state.cart);
  cartItems = cartItems.items;

  let amount = {
    totalAmount: 0,
    orderAmount: 0,
    additionalAmount: 0,
  };

  if (cartItems && cartItems.length > 0) {
    item = items.filter((x) => cartItems.includes(x.id));
    item.push();

    item.forEach((i) => {
      amount.orderAmount += i.price;
    });

    amount.totalAmount = amount.orderAmount + amount.additionalAmount;
  }

  return (
    <>
      <Heads
        title="Grostore | Cart"
        ogIcon={titleIcon}
        ogTitle="Grostores | Cart"
        ogDescription="Grostores, items in cart, checkout to get your items home"
      />
      <Layout>
        <div className="bg-gray-100 ">
          <section className="w-[90vw] m-auto h-auto px-1 py-20 md:p-20">
            <div className="w-[100%]  m-auto mb-10 grid-cols-1 grid h-auto md:flex justify-between ">
              <section className="w-100% md:w-[60%] lg:w-[50%] h-auto my-10">
                <p className="font-semibold text-2xl italic">Order </p>
                <section className="p-3 bg-white shadow-xl w-100% min-h-[40vh] rounded-md ">
                  {item.length > 0 ? (
                    <div>
                      {item.map((x) => (
                        <Carts key={x.id} items={x} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic font-2xl">
                      No items in cart
                    </p>
                  )}
                </section>
              </section>
              <section className="w-100%  md:w-[35%] lg:w-[25%] h-auto my-6">
                <p className="font-semibold text-2xl italic">Payment </p>
                <section className=" bg-white w-[100%] shadow-xl p-2 min-h-[40vh] relative rounded-md">
                  <p className="p-2 mb-4 w-[90%] m-auto bg-gray-200 text-black  text-center ">
                    Unregistered Account
                  </p>
                  <p className="px-4 text-lg w-[90%] flex justify-between">
                    Order Amount: <span>???{amount.orderAmount}</span>
                  </p>
                  <p className="px-4 text-lg w-[90%] flex justify-between">
                    Additional Amount: <span>???{amount.additionalAmount}</span>
                  </p>
                  <hr />
                  <p className="px-4 text-lg w-[90%] flex justify-between">
                    Total Amount: <span>???{amount.totalAmount}</span>
                  </p>
                  <button className="p-2 w-[90%] ml-[5%] absolute bottom-10 bg-yellow-500">
                    Checkout
                  </button>
                </section>
              </section>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CartContainer;
