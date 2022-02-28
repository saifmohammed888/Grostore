import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { items } from 'constants/data/items';
import { Key, useState } from 'react';
import dynamic from 'next/dynamic';
import alertActionCreator from 'redux/actionCreators/alertAction';
import { useDispatch } from 'react-redux';

const CardProduct = dynamic(() => import('components/common/card/cardProduct'));

function Products({ item }) {


  const handleSearch = (str) => {
    items = itemsList.filter((cat) =>
      cat.name.toLowerCase().includes(str.toLowerCase())
    );

    if (items.length === 0) {
      alertActionCreator.errorAlert(dispatch, 'No Categories found');
    }
    setItems(items);
  };

  const Layout = dynamic(() => import('components/common/layout/layout'));

  return (
    <Layout>
      <div className="w-screen h-auto flex justify-center">
        <section className="w-[15vw]  text-left pl-10 absolute left-0 top-[11vh]  bg-white p-4">
          <p className="text-xl m-4 font-serif font-semibold">Products</p>
          <ul className="text-md my-4 font-serif font-light">
            {items.map((cat) => (
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
                placeholder="Search Product"
                className="w-[22vw] p-4 border outline-none hover:border-green-300 bg-white rounded-l-full border-1 border-purple-200"
                type="text"
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
              />
              <button className="w-[7vw] p-4 border outline-none hover:border-green-300 bg-gray-700 rounded-r-full text-white">
                Search
              </button>
            </span>
            <section className="search w-[3vw] ml-10 mr-5 hover:bg-white hover:border-2 shadow-lg p-4 h-[3vw] rounded-full bg-gray-100">
              <FontAwesomeIcon icon={faFilter} className="w-[1vw] h-[1vw]" />
            </section>
            <section className="search w-[3vw] p-4 h-[3vw] hover:bg-white hover:border-2 shadow-lg rounded-full bg-gray-100">
              <FontAwesomeIcon icon={faSort} className="w-[1vw] h-[1vw]" />
            </section>
          </section>
          <section className="flex flex-wrap gap-10 my-5 h-auto overflow-y-scroll ">
            {items.map((product, index) => {
              return (
                <section key={index}>
                  <CardProduct item={product} />
                </section>
              );
            })}
          </section>
        </section>
      </div>
    </Layout>
  );
}
export default Products;

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
