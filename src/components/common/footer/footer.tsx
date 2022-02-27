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
    <div className="w-screen h-[40vh] bg-banner p-4 text-white">
      <section className="w-[80%] m-auto h-[100%] grid grid-cols-4">
        <section>
          <span className="w-100 flex h-[10vh] justify-left items-center text-white">
            <Image src={logo} alt="logoImage" width="100" height="100" />
            <p className="text-2xl font-bold  ">Grostore</p>
          </span>
          <p className="flex justify-around w-[80%] my-5">
            <FontAwesomeIcon
              icon={faFacebookF}
              className="w-[2vw] h-[2vw] hover:bg-orange-600  rounded-full border-white text-white border p-2"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-[2vw] h-[2vw]  hover:bg-orange-600 rounded-full border-white text-white border p-2"
            />
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-[2vw] h-[2vw] hover:bg-orange-600  rounded-full border-white text-white border p-2"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="w-[2vw] h-[2vw] hover:bg-orange-600  rounded-full border-white text-white border p-2"
            />
          </p>
          <p className="text-lg  text-yellow-500 px-3">@2022 Grostore</p>
        </section>
        <section className="my-4 px-10">
          <p className="text-2xl font-lg">Quick Links</p>
          <ul className="font-light text-lg text-left  ">
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/" passHref>
                <a className="link">Home</a>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/offers" passHref>
                <a className="link">Offers</a>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/categories" passHref>
                <a className="link"> Categories</a>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/cart" passHref>
                <a className="link"> Cart</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="my-4 px-10">
          <p className="text-2xl font-lg">Services</p>
          <ul className="font-light text-lg text-left  ">
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/services" passHref>
                <a className="link">Home Delivery</a>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500  ">
              <Link href="/services" passHref>
                <a className="link">Store pickup</a>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/services" passHref>
                <a className="link"> Subscription</a>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/services" passHref>
                <a className="link"> 24/7 Services</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="my-4 px-10">
          <p className="text-2xl font-lg">Support</p>
          <ul className="font-light text-lg text-left  ">
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/contact" passHref>
                <a className="link"> Contact</a>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/contact" passHref>
                <a className="link"> Returns</a>
              </Link>
            </li>
            <li className="my-4 list-disc hover:text-orange-500 ">
              <Link href="/contact" passHref>
                <a className="link"> Subscription</a>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Footer;
