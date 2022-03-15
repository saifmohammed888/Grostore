const CardProduct = dynamic(() => import('components/common/card/cardProduct'));
import { items } from 'constants/data/items';
import dynamic from 'next/dynamic';

const Popular: React.FC = () => {
  let trendingItems = items.filter((item) => item.trending === true);

  return (
    <div className="lg:w-[80%] md:w-[85%] w-[96%] mx-auto block h-auto p-10 bg-white">
      <h3 className="sm:text-4xl text-2xl  text-gray-500 italic  font-medium m-8 ">
        Most Trending Items
      </h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {trendingItems.map((item, index) => {
          return <CardProduct key={index} item={item} />;
        })}
      </section>
    </div>
  );
};

export default Popular;
