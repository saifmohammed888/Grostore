import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Navbar from 'components/common/navbar/navbar';
import { delivery } from 'constants/images';

const Welcome: React.FC = () => {
  const Popular = dynamic(() => import('./popular/popular'));
  const Categories = dynamic(() => import('./categories/categories'));
  const Intro = dynamic(() => import('./intro/intro'));
  const Footer = dynamic(() => import('../common/footer/footer'));
  const WhyGrostore = dynamic(() => import('./why/why'));

  return (
    <>
      <div className="w-screen min-h-[100vh] h-auto md:h-[90vh] bg-[#232229]">
        <section className="w-screen h-[100%]  bg-banner bg-cover bg-center bg-no-repeat relative ">
          <Navbar />

          <Intro />
          <section className="md:w-[450px] md:h-[500px] h-[300px] block w-[300px] bottom-5 absolute right-0">
            <Image
              src={delivery}
              quality="100"
              width="10"
              height="10"
              layout="responsive"
              priority
              alt="logo"
            />
          </section>
        </section>
        <Popular />
        <Categories />
        <WhyGrostore />
        <Footer />
      </div>
    </>
  );
};

export default Welcome;
