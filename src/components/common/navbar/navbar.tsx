import { useState } from 'react';
import { logo } from 'constants/images';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faClose,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Welcome: React.FC = () => {
  let [toggle, setToggle] = useState(false);

  let cart = useSelector((state: any) => state.cart);
  let cartCount = 0;

  cart.items ? (cartCount = cart.items.length) : (cartCount = cartCount);

  return (
    <div className="w-screen h-auto p-1 flex justify-between items-center ">
      <section className="flex justify-between text-lg italic items-center text-white">
        <Image
          src={logo}
          width="100"
          alt=""
          height="100"
          priority
          className="rounded-full"
        />
        <p className="">GROSTORE</p>
      </section>
      <section className="hidden md:flex items-center">
        <ul className="text-gray-300 w-auto flex items-center justify-between text-lg ">
          <li className="mx-3  md:mx-6 hover:scale-125 transition duration-200">
            <Link href="/" passHref>
              <a className="link">HOME</a>
            </Link>
          </li>
          <li className="mx-3  md:mx-6  hover:scale-125 transition duration-200">
            <Link href="/offers" passHref>
              <a className="link">OFFERS</a>
            </Link>
          </li>
          <li className="mx-3  md:mx-6  hover:scale-125 transition duration-200">
            <Link href="/categories" passHref>
              <a className="link">CATEGORIES</a>
            </Link>
          </li>
          <li className="w-auto  p-2 mx-3  md:mx-6 hover:text-red-600  hover:scale-125 transition duration-200">
            <Link href="/cart" passHref>
              <a className="flex w-auto">
                <Link href="/cart" passHref>
                  <a className="link">
                    CART
                    <span className="text-white mx-2 p-1 w-[10px] h-[5px] bg-blue-600 rounded-full">
                      {cartCount}
                    </span>
                  </a>
                </Link>
              </a>
            </Link>
          </li>
          <li className="mx-3  md:mx-6 text-white ">
            <Link href="/register" passHref>
              <a className="text-white">
                <button className="bg-yellow-600 px-4 py-2 rounded-full">
                  REGISTER NEW
                </button>
              </a>
            </Link>
          </li>
        </ul>
      </section>
      <section className="w-[20px] h-[20px] text-white mx-2 block md:hidden">
        {toggle ? (
          <FontAwesomeIcon
            onClick={() => {
              setToggle(!toggle);
            }}
            icon={faClose}
            className="text-yellow-500"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              setToggle(!toggle);
            }}
            icon={faBars}
          />
        )}
      </section>
      {toggle ? (
        <section className="block text-white bg-banner h-screen text-lg z-10 md:hidden fixed bg-transparent bg-center bg-cover w-screen top-[12vh] left-0">
          <ul>
            <li className="m-4 hover:text-yellow-600">
              <Link href="/" passHref>
                <a className="link">HOME</a>
              </Link>
            </li>
            <li className="m-4 hover:text-yellow-600">
              <Link href="/offers" passHref>
                <a className="link">OFFERS</a>
              </Link>
            </li>
            <li className="m-4 hover:text-yellow-600">
              <Link href="/categories" passHref>
                <a className="link">CATEGORIES</a>
              </Link>
            </li>

            <li className="m-4 hover:text-yellow-600">
              <Link href="/services" passHref>
                <a className="link">SERVICES</a>
              </Link>
            </li>
            <li className="m-4 hover:text-yellow-600">
              <Link href="/services" passHref>
                <a className="link">
                  CART
                  <span className="text-white mx-2 p-1 w-[10px] h-[5px] bg-blue-600 rounded-full">
                    {cartCount}
                  </span>
                </a>
              </Link>
            </li>
            <li className="m-4 hover:text-yellow-600">
              <Link href="/register" passHref>
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-full">
                  REGISTER NEW
                </button>
              </Link>
            </li>
          </ul>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Welcome;
