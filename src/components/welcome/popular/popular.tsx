import CardProduct from 'components/common/card/cardProduct';
import { items } from 'constants/data/items';
import Image from 'next/image';

const Popular: React.FC = () => {
  let trendingItems = items.filter((item) => item.trending === true);

  return (
    <div className="w-[80%] mx-auto block h-auto p-10 bg-white">
      <h3 className="text-4xl text-gray-500 italic  font-medium m-8 ">
        Most Trending Items
      </h3>
      <section className="flex justify-left my-20 flex-wrap gap-10 ">
        {trendingItems.map((item, index) => {
          return <CardProduct key={index} item={item} />;
        })}
      </section>
    </div>
  );
};

export default Popular;
