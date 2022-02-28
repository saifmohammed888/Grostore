import { Categories } from 'constants/data/category';
import dynamic from 'next/dynamic';
const CardItem = dynamic(() => import('components/common/card/card'));

const Category: React.FC = () => {
  return (
    <div className="w-[80%] min-h-[60vh] mx-auto block h-auto p-10">
      <h3 className="text-4xl text-gray-500 italic  font-medium m-8 ">
        Browse Categories
      </h3>
      <section className="flex justify-left my-20 gap-10 flex-wrap ">
        {Categories.map((item, index) => {
          return <CardItem key={index} item={item} />;
        })}
      </section>
    </div>
  );
};

export default Category;
