import { bestPricing, easyBooking, fastDelivery } from 'constants/images';
import Image from 'next/image';

const WhyGrostores: React.FC = () => {
  return (
    <div className="w-screen min-h-[50vh] h-auto ">
      <section className="w-[70%]  md:w-[80%] sm:w-[90%] m-auto text-center ">
        <h1 className="text-4xl text-gray-500 italic font-bold text-left ">
          Why Grostores
        </h1>
        <section className="w-[100%] h-[80%] sm:grid sm:grid-cols-3 block gap-10 my-[10vh] ">
          <section>
            <Image src={easyBooking} width="100" alt="Item" height="100" />
            <p className="text-2xl  text-gray-700">Easy to Order</p>
            <p>
              You can order your groceries using our web or mobile app. You can
              also call us on our contact to book your grocery and we deliver it
              to you in not time
            </p>
          </section>
          <section>
            <Image src={bestPricing} width="100" height="100" alt="Item" />
            <p className="text-2xl  text-gray-700">
              Best Pricing and Discounts
            </p>
            <p>
              We provide you the groceries at the best pricing and also offer
              additional discounts time and again, we are here to serve you
              better.
            </p>
          </section>
          <section>
            <Image src={fastDelivery} width="100" height="100" alt="Item" />
            <p className="text-2xl  text-gray-700">Fastest Delivery</p>
            <p>
              Our Delivery is the fastest considering we cater to only small
              range of localities to make sure we reach out to you as quick as
              possible
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default WhyGrostores;
