import { faFilter, faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { items } from 'constants/data/items';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';

import alertActionCreator from 'redux/actionCreators/alertAction';
import Layout from 'components/common/layout/layout';
import dynamic from 'next/dynamic';
import Heads from 'components/common/Head';

const CardProduct = dynamic(() => import('components/common/card/cardProduct'));

export default function Product({ item }) {
  let dispatch = useDispatch();
  let [items, setItems] = useState(item);
  let [itemsList, setItemsList] = useState(item);

  const router = useRouter();
  let route: any = router.query;

  const handleSearch = (str) => {
    items = itemsList.filter((cat) =>
      cat.name.toLowerCase().includes(str.toLowerCase())
    );

    if (items.length === 0) {
      alertActionCreator.errorAlert(dispatch, 'No Products found');
    }
    setItems(items);
  };

  if (route.cat) {
    items = items.filter((item) => item.category === route.cat.toLowerCase());
  } else {
    items = items;
  }
  return (
    <>
      <Heads
        title={`Grostores | ${route.cat}`}
        ogIcon=""
        ogTitle={`Grostores | ${route.cat}`}
        ogDescription={`Grostores | Your ${route.cat}s waiting to be taken away`}
      />
      <Layout>
        <div className="w-screen h-auto flex justify-center">
          <section className="w-[20vw] hidden sm:block  md:w-[15vw]  text-left lg:pl-10 left-0 top-[11vh]  bg-white p-1">
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
            <section className="flex flex-wrap gap-10 my-5 h-auto justify-center md:justify-center">
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
    </>
  );
}

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
