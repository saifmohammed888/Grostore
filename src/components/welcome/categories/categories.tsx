import Image from 'next/image';
import { Categories } from 'constants/data/category';

const Category: React.FC = () => {
  return (
    <div className="w-[80%] min-h-[60vh] mx-auto block h-auto p-10">
      <h3 className="text-4xl text-gray-500 italic  font-medium m-8 ">
        Browse Categories
      </h3>
      <section className="flex justify-center my-20 flex-wrap">
        {Categories.map((item) => {
          return (
            <section
              key={item.id}
              className="w-[16vw] m-2 min-h-[35vh] h-auto hover:shadow-xl duration-500 border bg-white relative p-1 rounded-[1vh] grid grid-rows-2"
            >
              <Image
                src={item.image}
                width="100"
                height="100"
                alt="itemImage"
                className="rounded-[1vh] "
              />
              <section className="p-1 text-left">
                <p className="text-lg m-1 font-semibold flex justify-between">
                  {item.name}
                </p>
                <p className="text-md m-1 font-light flex justify-between">
                  {item.description}
                </p>
                <button className="bg-yellow-400 p-2 rounded-md w-[90%]  m-[5%]">
                  Start shopping
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Category;
