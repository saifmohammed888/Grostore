import { Categories } from 'constants/data/category';
import dynamic from 'next/dynamic';

const CardItem = dynamic(() => import('components/common/card/card'));

const Category = () => {
  return (
    <div className="lg:w-[80%] md:w-[90%] w-[96%]  min-h-[60vh] mx-auto block h-auto p-10">
      <h3 className=" text-2xl sm:text-4xl text-gray-500 italic  font-medium m-8 ">
        Browse Categories
      </h3>
      <section className="block sm:flex md:justify-center sm:justify-center my-20 gap-10 flex-wrap ">
        {Categories.map((item, index) => {
          return <CardItem key={index} item={item} />;
        })}
      </section>
    </div>
  );
};

export default Category;
