import React from 'react';
import dynamic from 'next/dynamic';


const Layout = dynamic(() => import('components/common/layout/layout'));

const Welcome: React.FC = () => {
  const Popular = dynamic(() => import('./popular/popular'));
  const Categories = dynamic(() => import('./categories/categories'));
  const Intro = dynamic(() => import('./intro/intro'));
  const WhyGrostore = dynamic(() => import('./why/why'));

  return (
    <Layout>
      <div className="overflow-x-hidden ">
        <Intro />
        <Popular />
        <Categories />
        <WhyGrostore />
      </div>
    </Layout>
  );
};

export default Welcome;
