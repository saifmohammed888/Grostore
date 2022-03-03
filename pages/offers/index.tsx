import Footer from 'components/common/footer/footer';
import Heads from 'components/common/Head';
import { Item, items } from 'constants/data/items';
import { fruit, offer2, offer3, titleIcon } from 'constants/images';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const CardProduct = dynamic(() => import('components/common/card/cardProduct'));
const Layout = dynamic(() => import('components/common/layout/layout'));

function Offers({ item }) {
  let Products: Array<Item> = item.filter((item) => item.discountAmount > 4);

  return (
    <>
      <Heads
        title="Grostore | Offers"
        ogIcon={titleIcon}
        ogTitle="Grostores | Offers"
        ogDescription="Get your groceries with best discounts"
      />
      <Layout>
        <div className="w-screen h-auto">
          <section className="w-[90vw]  md:w-[70vw] h-[55vh] bg-white md:bg-gray-800 m-auto my-10 bg-banner2 opacity-90  bg-no-repeat md:bg-center bg-left  bg-contain "></section>
          <p className="text-xl font-bold font-sans ml-[15vw] ">Hot Offers</p>
          <section className="w-[80vw] mx-auto   md:w-[70vw] h-auto  block md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <section className="w-[100%]  my-2 h-[90%] bg-[#fffbf4] rounded-lg grid grid-cols-2 ">
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
            <section className="w-[100%] my-2  h-[90%] bg-[#f4f5f6] rounded-lg grid grid-cols-2">
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
            <section className="w-[100%]  my-2 h-[90%] bg-[#f7fdf9] rounded-lg grid grid-cols-2">
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
          <section className="w-[100vw] h-auto sm:w-[70vw] sm:m-auto justify-center md:m-auto grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 my-10">
            {Products.map((product, index) => {
              return (
                <section key={index}>
                  <CardProduct item={product} />
                </section>
              );
            })}
          </section>
        </div>
      </Layout>
    </>
  );
}
export default Offers;

export async function getServerSideProps(context) {
  const item: any = items;

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: { item },
  };
}
