import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { delivery, fastDelivery } from 'constants/images';

import Heads from 'components/common/Head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from 'components/common/layout/layout';

const Register: React.FC = () => {
  return (
    <>
      <Heads
        title="Grostore | Register"
        ogIcon={fastDelivery}
        ogTitle="Grostores | Register"
        ogDescription="Grostore, quick register with google to get best discounts"
      />
      <Layout>
        <main className="w-screen h-auto ">
          <div className="  w-[90vw] m-auto md:w-[70vw] lg:w-[50vw] p-4 grid grdi-cols-1 md:grid-cols-2 bg-white text-center h-auto border border-l my-[15vh] rounded shadow-2xl">
            <section className="bg-blue-900 h-[100%]  p-2">
              <p className="text-white text-lg">
                Welcome to Grostores, <br />
                Sign to up to receive exciting offers
              </p>
              <Image
                src="https://res.cloudinary.com/saif-freelance2/image/upload/v1645907424/Grostore/others/Grostore-removebg-preview_pxdbjg.png"
                width="350"
                height="350"
                alt="delivery"
                className="w-[20vw] absolute bottom-0"
              />
            </section>
            <section className="h-[100%] p-2">
              <section>
                <Image
                  src={delivery}
                  alt="logo"
                  width="160"
                  height="160"
                  className="w-[10vw]  m-auto"
                />
                <p className="mt-5 text-green-700">
                  You are steps away from{' '}
                  <span className="font-bold">Grostores</span>
                </p>
                <button className="w-[80%] border p-2 m-auto my-3   hover:border-red-800 duration-1000 shadow-lg rounded-full flex justify-center  ded-md">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="text-red-600 w-[25px] mx-2"
                  />
                  Sign Up with Google
                </button>
                <p>or</p>
                <button className="w-[80%] border p-2 m-auto my-3 hover:border-blue-800 duration-1000   shadow-lg rounded-full flex justify-center  ded-md">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-600 w-[25px] mx-2"
                  />
                  Sign Up with Facebook
                </button>
                <p>
                  Already have an account ?{' '}
                  <Link href="/login" passHref>
                    Sign In
                  </Link>
                </p>
              </section>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
};
export default Register;
