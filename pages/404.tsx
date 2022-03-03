import dynamic from 'next/dynamic';
import Head from 'next/head';

const Navbar = dynamic(() => import('components/common/navbar/navbar'));

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
      <main>
        <div className="bg-banner bg-bottom first-line:w-screen h-screen">
          <Navbar />
          <h1 className="text-4xl mt-[20vh] md:mt-1 font-bold text-white text-center ">
            404 Page not found
          </h1>
        </div>
      </main>
    </>
  );
};

export default Error;
