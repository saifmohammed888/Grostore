import Image from 'next/image';
import Link from 'next/link';

interface Props {
  item: any;
}

const CardItem: React.FC<Props> = ({ item }) => {
  return (
    <section
      key={item.id}
      className="w-[60vw] my-4 m-auto   lg:w-[16vw] md:w-[22vw] sm:w-[30vw] min-h-[40vh] h-auto hover:shadow-xl duration-500 border bg-white relative p-1 rounded-[1vh] grid grid-rows-2"
    >
      <Image
        src={item.image}
        alt="Item"
        width="230"
        height="150"
        className="rounded-[1vh]"
      />
      <section className="p-1 text-left">
        <p className="text-lg m-1 font-semibold flex justify-between">
          {item.name}
        </p>
        <p className="text-sm m-1 font-light">{item.description}</p>
        <Link href={{ pathname: '/products/' + item.name }} passHref>
          <button className="p-2 w-[90%] m-[5%] bg-green-600 border rounded-lg text-white">
            Shop
          </button>
        </Link>
      </section>
    </section>
  );
};

export default CardItem;
