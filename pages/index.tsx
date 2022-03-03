import Head from 'next/head';
import { pincode } from 'constants/data/pincode';
import dynamic from 'next/dynamic';
import { useDispatch } from 'react-redux';
import pinActionCreator from 'redux/actionCreators/pinAction';
import { useEffect } from 'react';
import Heads from 'components/common/Head';
import { titleIcon } from 'constants/images';

const Welcome = dynamic(() => import('components/welcome/welcome'));

const Home = ({ pincodes }) => {
  let dispatch = useDispatch();

  useEffect(() => {
    pinActionCreator.setPincode(dispatch, pincodes);
  }, [pincodes, dispatch]);

  return (
    <>
      <Heads
        title="Grostore | Home"
        ogIcon={titleIcon}
        ogTitle="Grostores | Home"
        ogDescription="Get your groceries at your doorstep"
      />

      <main>
        <Welcome />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps(context) {
  return {
    props: { pincodes: pincode },
  };
}
