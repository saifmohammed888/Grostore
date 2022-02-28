import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('components/common/navbar/navbar'));

const Error: React.FC = () => {
  return (
    <div className="bg-banner  w-screen h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold text-white text-center ">
        404 Page not found
      </h1>
    </div>
  );
};

export default Error;
