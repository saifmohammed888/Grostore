import { Categories } from 'constants/data/category';
import dynamic from 'next/dynamic';

const CardItem = dynamic(() => import('components/common/card/card'));

const Category = () => {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-[96%]  min-h-[60vh] mx-auto block h-auto p-10">
      <h3 className=" text-2xl sm:text-4xl text-gray-500 italic  font-medium m-8 ">
        Browse Categories
      </h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Categories.map((item, index) => {
          return <CardItem key={index} item={item} />;
        })}
      </section>
    </div>
  );
};

export default Category;
