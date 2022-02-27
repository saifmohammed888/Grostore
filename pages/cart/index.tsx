import Carts from 'components/common/card/cart';
import Layout from 'components/common/layout/layout';
import { items } from 'constants/data/items';

const CartContainer: React.FC = () => {
  let item: any = items;

  return (
    <Layout>
      <div className="bg-gray-100 ">
        <section className="w-[90vw] m-auto h-screen p-20">
          <div className="w-[100%]  m-auto min-h-[60%] h-auto flex justify-between ">
            <section className="w-[50%]">
              <p className="font-semibold text-2xl italic">Order </p>
              <section className=" p-3 bg-white shadow-xl h-[100%] rounded-md ">
                <Carts items={item} />
              </section>
            </section>
            <section className="w-[25%] h-[50vh]">
              <p className="font-semibold text-2xl italic">Payment </p>
              <section className=" bg-white w-[100%] shadow-xl p-2 h-[100%] relative rounded-md">
                <p className="p-2 mb-4 w-[90%] m-auto bg-gray-200 text-black  text-center ">
                  Unregistered Account
                </p>
                <p className="px-4 text-lg w-[90%] flex justify-between">
                  Order Amount: <span>₹200</span>
                </p>
                <p className="px-4 text-lg w-[90%] flex justify-between">
                  Additional Amount: <span>₹100</span>
                </p>
                <hr />
                <p className="px-4 text-lg w-[90%] flex justify-between">
                  Total Amount: <span>₹100</span>
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
  );
};
export default CartContainer;
