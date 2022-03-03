import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Categories } from 'constants/data/category';
import { useState } from 'react';
import { categoryImage, titleIcon } from 'constants/images';
import { useDispatch } from 'react-redux';

import alertActionCreator from 'redux/actionCreators/alertAction';
import Heads from 'components/common/Head';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('components/common/layout/layout'));
const CardItem = dynamic(() => import('components/common/card/card'));

function CategoryComponent({ categories }) {
  let dispatch = useDispatch();
  let [categoryList, setCategoryList] = useState(categories);
  let [category, setCategory] = useState(categories);

  const handleSearch = (str) => {
    category = categoryList.filter((cat) =>
      cat.name.toLowerCase().includes(str.toLowerCase())
    );

    if (category.length === 0) {
      alertActionCreator.errorAlert(dispatch, 'No Categories found');
    }
    setCategory(category);
  };

  const handleSort = () => {
    setCategory(category.sort((a, b) => (a.name > b.name ? 1 : -1)));
  };

  return (
    <>
      <Heads
        title="Grostore | Categories"
        ogIcon={categoryImage}
        ogTitle="Grostores | Categories"
        ogDescription="Grostores, Choose from the wide categories of products"
      />
      <Layout>
        <div className="w-screen min-h-[70vh] h-auto flex justify-center">
          <section className="w-[20vw] hidden sm:block  md:w-[15vw]  text-left lg:pl-10 left-0 top-[11vh]  bg-white p-1">
            <p className="text-xl m-4 font-serif font-semibold">Categories</p>
            <ul className="text-md my-4 font-serif font-light">
              {category.map((cat) => (
                <li
                  key={cat.id}
                  className="m-8 text-brown-300 hover:text-red-600 "
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </section>
          <section className="w-[95vw] sm:w-[80vw]  md:w-[85vw] h-auto p-5 right-0 top-[11vh] border-none">
            <section className="flex w-[100%] sm:w-[80%]">
              <span>
                <input
                  placeholder="Search Category"
                  className="w-[60vw] sm:w-[40vw] md:w-[22vw] p-4 border outline-none hover:border-green-300 bg-white rounded-l-full border-1 border-purple-200"
                  type="text"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="w-[24vw] sm:w-[12vw] md:w-[7vw] p-4 border outline-none hover:border-green-300 bg-gray-700 rounded-r-full text-white">
                  Search
                </button>
              </span>
            </section>
            <section className="flex flex-wrap gap-10 my-5 h-auto justify-center md:justify-center ">
              {category.map((cat, index) => {
                return <CardItem key={index} item={cat} />;
              })}
            </section>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default CategoryComponent;

export async function getServerSideProps(context) {
  let categories: any = Categories;

  // const res = await fetch('https://62207042ce99a7de19597a7e.mockapi.io/api/v1/getItems/Grostore')
  // const categories = await res.json()

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categories },
  };
}
