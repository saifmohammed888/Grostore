import React from 'react';
import { useState } from 'react';
import { Pincode } from 'constants/data/pincode';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { delivery } from 'constants/images';
import alertActionCreator from 'redux/actionCreators/alertAction';
import Image from 'next/image';

const Intro: React.FC = () => {
  let [pincodes, setPincode] = useState('');

  let dispatch = useDispatch();
  let pincode = useSelector((state: any) => state);
  let pin: Array<Pincode> = pincode.pin.location;

  const handlePincode = (e) => {
    setPincode(e);
  };

  const checkPin = () => {
    let available: boolean = false;
    if (pin) {
      pin.forEach((location) => {
        if (location.pincode === pincodes) {
          available = true;
        }
      });

      available
        ? alertActionCreator.successAlert(dispatch, 'Delivery Available')
        : alertActionCreator.errorAlert(dispatch, 'Delivery not available yet');
    }
  };

  return (
    <section className="w-screen bg-banner h-[100vh] py-20 sm:p-0 box-border bg-bottom sm:h-[60vh] block md:flex justify-between relative">
      <div className="w-auto h-[100%] text-center md:text-left md:p-20 py-5">
        <span className="flex w-[200px] m-auto md:m-0 rounded-full text-yellow-500 items-center bg-[#2c342e] p-1">
          <FontAwesomeIcon
            className="w-[wvw] text-red-500 h-[2vw] mx-2"
            icon={faHeart}
          />
          Your Trusted Store
        </span>
        <p className="text-white my-8 font-semibold text-3xl font-mono">
          Safety & Quality Delivered
        </p>
        <p className="text-white my-8 font-semibold font-mono text-3xl">
          To Your Door Step
        </p>
        <p className="text-white">
          Enter your pincode to verify delivery available to your place <br />
          Thanks for choosing us.
        </p>
        <section className="sm:w-[80%] w-[80vw] m-auto mt-5  bg-white h-[50px] p-2 md:mt-9 md:mx-0  rounded-full flex">
          <FontAwesomeIcon
            className="w-[50px] h-[30px] text-yellow-500"
            icon={faMapMarker}
          />
          <input
            id="pincode"
            type="text"
            onChange={(e) => handlePincode(e.target.value)}
            className="w-[175px]mx-3  text-xl border-none outline-none h-[35px]"
            placeholder="Enter pincode:"
          ></input>
          <button
            onClick={() => checkPin()}
            className="bg-yellow-600 w-[200px]  text-white font-bold rounded-full px-3"
          >
            Check
          </button>
        </section>
      </div>
      <div className="w-[30vw] h-[50vh] lg:bottom-5 top-[10vh] relative right-0 hidden md:block">
        <Image src={delivery} alt="delivery" priority layout="fill" />
      </div>
    </section>
  );
};

export default Intro;
