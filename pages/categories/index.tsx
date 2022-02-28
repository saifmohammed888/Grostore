import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dynamic from 'next/dynamic';
import { Categories } from 'constants/data/category';
import { CategoryType } from 'constants/data/category';
import { useState } from 'react';
import alertActionCreator from 'redux/actionCreators/alertAction';
import { useDispatch } from 'react-redux';

const Layout = dynamic(() => import('components/common/layout/layout'));
const CardItem = dynamic(() => import('components/common/card/card'));

function CategoryComponent({ categories }) {
  let dispatch = useDispatch();
  let [categoryList, setCategoryList] = useState(categories);
  let [category, setCategory] = useState(categories);
  let [asc, setDir] = useState(true);

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
    <Layout>
      <div className="w-screen h-auto flex justify-center">
        <section className="w-[15vw]  text-left pl-10 absolute left-0 top-[11vh]  bg-white p-4">
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
        <section className="w-[85vw] h-auto p-5 absolute right-0 top-[11vh] border-none">
          <section className="flex">
            <span>
              <input
                placeholder="Search Category"
                className="w-[22vw] p-4 border outline-none hover:border-green-300 bg-white rounded-l-full border-1 border-purple-200"
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <button className="w-[7vw] p-4 border outline-none hover:border-green-300 bg-gray-700 rounded-r-full text-white">
                Search
              </button>
            </span>
            <section className="search w-[3vw] ml-10 mr-5 hover:bg-white hover:border-2 shadow-lg p-4 h-[3vw] rounded-full bg-gray-100">
              <FontAwesomeIcon icon={faFilter} className="w-[1vw] h-[1vw]" />
            </section>
            <section className="search w-[3vw] p-4 h-[3vw] hover:bg-white hover:border-2 shadow-lg rounded-full bg-gray-100">
              <a
                onClick={() => {
                  handleSort();
                }}
              >
                <FontAwesomeIcon icon={faSort} className="w-[1vw] h-[1vw]" />
              </a>
            </section>
          </section>
          <section className="flex flex-wrap gap-10 my-5 h-auto overflow-y-scroll ">
            {category.map((cat, index) => {
              return <CardItem key={index} item={cat} />;
            })}
          </section>
        </section>
      </div>
    </Layout>
  );
}

export default CategoryComponent;

export async function getServerSideProps(context) {
  const categories: any = Categories;

  if (!categories) {
    return {
      notFound: true,
    };
  }

  return {
    props: { categories },
  };
}
