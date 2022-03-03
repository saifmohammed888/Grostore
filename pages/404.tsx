import Layout from 'components/common/layout/layout';
import Head from 'next/head';

const Error: React.FC = () => {
  return (
    <>
      <Head>
        <title>Grostore | Error</title>
        <meta
          name="description"
          content="Get your groceries at your doorstep"
        />
        <meta property="og:site_name" content="Grostore" />
        <meta property="og:title" content="Grostores/Error" />
        <meta property="og:error" content="404 Page not found" />

        <meta property="og:type" content="website" />
        <meta property="og:updated_time" content="1440432930" />
      </Head>

      <Layout>
        <div className="bg-banner bg-top bg-cover first-line:w-screen h-screen">
          <h1 className="text-4xl pt-[20vh] font-bold text-white text-center ">
            404 Page not found
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default Error;
