import Head from 'next/head';
import Welcome from 'components/welcome/welcome';
import { wrapper } from 'redux/store';
import { pincode } from 'constants/data/pincode';
import { alertTypes, pinAction } from 'redux/types';

const Home = () => {
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

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch({
    type: pinAction.setPincode,
    payload: pincode,
  });
});
