import CardProduct from 'components/common/card/cardProduct';
import Layout from 'components/common/layout/layout';
import { Item, items } from 'constants/data/items';
import { fruit, offer2, offer3 } from 'constants/images';
import Image from 'next/image';

const Offers: React.FC = () => {
  let Products: Array<Item> = items.filter((item) => item.discountAmount > 4);

  return (
    <Layout>
      <div className="w-screen h-screen">
        <section className="w-[70vw] h-[55vh] bg-gray-800 m-auto my-10 bg-banner2 opacity-90  bg-no-repeat bg-center bg-cover"></section>
        <p className="text-xl font-bold font-sans ml-[15vw] ">Hot Offers</p>
        <section className="w-[70vw] h-[20vh] m-auto grid grid-cols-3 gap-5">
          <section className="w-[100%] h-[90%] bg-[#fffbf4] rounded-lg grid grid-cols-2 ">
            <section className="py-10 px-5">
              <p className="text-lg text-green-600 font-semibold">30% Off</p>
              <p className="text-lg text-green-600">Fruits</p>
              <button className="p-2 bg-yellow-400 text-black rounded-md">
                Shop now
              </button>
            </section>
            <section className="py-10 px-5">
              <Image
                src={fruit}
                alt="fruit"
                width="100"
                height="100"
                className="rounded-full"
              />
            </section>
          </section>
          <section className="w-[100%] h-[90%] bg-[#f4f5f6] rounded-lg grid grid-cols-2">
            <section className="py-10 px-5">
              <p className="text-lg text-green-600 font-semibold">20% Off</p>
              <p className="text-lg  text-green-600">Snacks</p>
              <button className="p-2 bg-yellow-400 text-black rounded-md">
                Shop now
              </button>
            </section>
            <section className="py-10 px-5">
              <Image
                src={offer2}
                alt="fruit"
                width="100"
                height="100"
                className="rounded-full"
              />
            </section>
          </section>
          <section className="w-[100%] h-[90%] bg-[#f7fdf9] rounded-lg grid grid-cols-2">
            <section className="py-10 px-5">
              <p className="text-lg text-green-600 font-semibold">40% Off</p>
              <p className="text-lg text-green-600">Special Offers</p>
              <button className="p-2 bg-yellow-400 text-black rounded-md">
                Shop now
              </button>
            </section>
            <section className="py-10 px-5">
              <Image
                src={offer3}
                alt="fruit"
                width="100"
                height="100"
                className="rounded-full"
              />
            </section>
          </section>
        </section>
        <p className="text-xl font-bold font-sans ml-[15vw] my-5">
          Best Discounts
        </p>
        <section className="w-[70vw] h-[20vh] m-auto flex flex-wrap gap-5 my-10">
          {Products.map((product, index) => {
            return (
              <section key={index}>
                <CardProduct item={product} />;
              </section>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};
export default Offers;
