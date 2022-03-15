import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from 'constants/images';

const Footer: React.FC = () => {
  return (
    <div className="w-screen h-auto bg-banner p-4 text-white">
      <section className="w-[100%] lg:w-[70%]  m-auto h-auto grid grid-cols-1 md:grid-cols-4">
        <section className="my-4 sm:[px-1] px-10">
          <p className="text-2xl font-lg">Quick Links</p>
          <ul className="font-light text-lg text-left  ">
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/" passHref>
                <span>
                  <a className="link">Home</a>
                </span>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/offers" passHref>
                <span>
                  <a className="link">Offers</a>
                </span>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/categories" passHref>
                <span>
                  <a className="link"> Categories</a>
                </span>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/cart" passHref>
                <span>
                  <a className="link"> Cart</a>
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="my-4 sm:[px-1] px-10">
          <p className="text-2xl font-lg">Services</p>
          <ul className="font-light text-lg text-left  ">
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/services" passHref>
                <span>
                  <a className="link">Home Delivery</a>
                </span>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500  ">
              <Link href="/services" passHref>
                <span>
                  <a className="link">Store pickup</a>
                </span>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/services" passHref>
                <span>
                  <a className="link"> Subscription</a>
                </span>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/services" passHref>
                <span>
                  <a className="link"> 24/7 Services</a>
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="my-4 sm:[px-1] px-10">
          <p className="text-2xl font-lg">Support</p>
          <ul className="font-light text-lg text-left  ">
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/contact" passHref>
                <span>
                  <a className="link"> Contact</a>
                </span>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/contact" passHref>
                <span>
                  <a className="link"> Returns</a>
                </span>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/contact" passHref>
                <span>
                  <a className="link"> Subscription</a>
                </span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="">
          <span className="w-100 flex justify-center text-center">
            <Image
              src={logo}
              alt="logoImage"
              className="m-auto"
              width="100"
              height="100"
            />
          </span>
          <p className="flex mb-6 mx-auto w-[90%] justify-center text-center">
            Grostore
          </p>
          <p className="flex m-6 mx-auto w-[90%] justify-between">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-[30px] h-[30px] hover:bg-orange-600  rounded-full border-white text-white border p-2"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[30px] h-[30px]  hover:bg-orange-600 rounded-full border-white text-white border p-2"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-[30px] h-[30px] hover:bg-orange-600  rounded-full border-white text-white border p-2"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-[30px] h-[30px] hover:bg-orange-600  rounded-full border-white text-white border p-2"
            />
          </p>
          <p className="m-6 text-center mx-auto w-[90%] text-yellow-500">
            @2022 Grostore | Created with Nextjs by saifmohammed888
          </p>
        </section>
      </section>
    </div>
  );
};

export default Footer;
