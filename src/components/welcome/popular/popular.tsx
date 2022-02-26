import { items } from 'constants/data/items';
import Image from 'next/image';

const Popular: React.FC = () => {
  let trendingItems = items.filter((item) => item.trending === true);

  return (
    <div className="w-[80%] mx-auto block h-auto p-10 bg-white">
      <h3 className="text-4xl text-gray-500 italic  font-medium m-8 ">
        Most Trending Items
      </h3>
      <section className="flex justify-around my-20 ">
        {trendingItems.map((item) => {
          return (
            <section
              key={item.id}
              className="w-[16vw] min-h-[35vh] h-auto hover:shadow-xl duration-500 border bg-white relative p-1 rounded-[1vh] grid grid-rows-2"
            >
              <Image
                src={item.image}
                alt="Item"
                width="100"
                height="100"
                className="rounded-[1vh] "
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
                <p className="text-lg m-1 text-yellow-700">₹{item.price}</p>
                <button className="p-2 w-[90%] m-[5%] bg-yellow-500 border rounded-lg text-white">
                  Add to Cart
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Popular;
