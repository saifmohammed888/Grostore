import Head from 'next/head';
import { wrapper } from 'redux/store';
import { pincode } from 'constants/data/pincode';
import { pinAction } from 'redux/types';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import pinActionCreator from 'redux/actionCreators/pinAction';
import { useEffect } from 'react';

const Welcome = dynamic(() => import('components/welcome/welcome'));

const Home = ({ pincodes }) => {
  let dispatch = useDispatch();

  useEffect(() => {
    pinActionCreator.setPincode(dispatch, pincodes);
  }, [pincodes, dispatch]);

  return (
    <div>
      <Head>
        <title>Grostore</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="description"
          content="Get your groceries at your doorstep"
        />
        <meta property="og:site_name" content="Grostore" />
        <meta property="og:title" content="Groceries at doorstep" />
        <meta
          property="og:description"
          content="Get your groceries at your doorstep"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/saif-freelance2/image/upload/v1645607384/Grostore/logo/GROSTORE-nobg_gxhxpt.webp"
        />
        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Head>

      <main>
        <Welcome />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps(context) {
  return {
    props: { pincodes: pincode },
  };
}
