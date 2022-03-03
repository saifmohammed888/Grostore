import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { delivery, fastDelivery } from 'constants/images';
import Image from 'rc-image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Heads from 'components/common/Head';
import { Footer } from 'antd/lib/layout/layout';

const Layout = dynamic(() => import('components/common/layout/layout'));

const Login: React.FC = () => {
  return (
    <>
      <Heads
        title="Grostore | Login"
        ogIcon={fastDelivery}
        ogTitle="Grostores | login"
        ogDescription="Grostore, easy login with google auth"
      />
      <Layout>
        <div className="w-[90vw] m-auto md:w-[70vw] lg:w-[50vw] p-4 grid grdi-cols-1 md:grid-cols-2 bg-white text-center h-auto border border-l my-[15vh] rounded shadow-2xl">
          <section className="bg-blue-900 h-auto p-2 relative grid grid-row-2     ">
            <p className="text-white text-lg hidden sm:block">
              Welcome back to Grostores, <br />
              Sign In to get your daily essentials
            </p>
            <Image
              src="https://res.cloudinary.com/saif-freelance2/image/upload/v1645907424/Grostore/others/Grostore-removebg-preview_pxdbjg.png"
              width="50"
              height="50"
              alt="delivery"
              className="w-[20vw] absolute bottom-0"
            />
          </section>
          <section className="h-[100%]  p-2">
            <section>
              <Image
                src={delivery}
                alt="logo"
                width="100"
                height="50"
                className="w-[10vw]  m-auto"
              />
              <p className="mt-5 text-green-700">
                Welcome back to
                <span className="font-bold"> Grostores</span>
              </p>
              <button className="w-[80%] border p-2 m-auto my-3   hover:border-red-800 duration-1000 shadow-lg rounded-full flex justify-center  ded-md">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="text-red-600 w-[25px] mx-2"
                />
                Sign In with Google
              </button>
              <p>or</p>
              <button className="w-[80%] border p-2 m-auto my-3 hover:border-blue-800 duration-1000   shadow-lg rounded-full flex justify-center  ded-md">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-600 w-[25px] mx-2"
                />
                Sign In with Facebook
              </button>
              <p>
                New to Grostore ?{' '}
                <Link href="/register" passHref>
                  Sign Up
                </Link>
              </p>
            </section>
          </section>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Login;
