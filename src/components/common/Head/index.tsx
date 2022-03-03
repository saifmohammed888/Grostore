import React from 'react';
import Head from 'next/head';

const Heads = ({ title, ogIcon, ogTitle, ogDescription }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content="Get your groceries at your doorstep" />
      <meta property="og:site_name" content="Grostore" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogIcon} />
      <meta property="og:type" content="website" />
      <meta property="og:updated_time" content="1440432930" />
    </Head>
  );
};

export default Heads;
