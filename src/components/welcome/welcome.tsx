import React from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import cartActionCreator from 'redux/actionCreators/cartAction';

const Layout = dynamic(() => import('components/common/layout/layout'));

const Welcome: React.FC = () => {
  const Popular = dynamic(() => import('./popular/popular'));
  const Categories = dynamic(() => import('./categories/categories'));
  const Intro = dynamic(() => import('./intro/intro'));
  const Footer = dynamic(() => import('../common/footer/footer'));
  const WhyGrostore = dynamic(() => import('./why/why'));

  return (
    <Layout>
      <div className="overflow-x-hidden ">
        <Intro />
        <Popular />
        <Categories />
        <WhyGrostore />
        <Footer />
      </div>
    </Layout>
  );
};

export default Welcome;
