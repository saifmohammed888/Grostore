import Image from 'rc-image';

interface Props {
  item: any;
}

const CardItem: React.FC<Props> = ({ item }) => {
  return (
    <section
      key={item.id}
      className="w-[16vw] hover:shadow-xl duration-500 border bg-white relative p-1 rounded-[1vh] grid grid-rows-2"
    >
      <section className="h-[40%]">
        <Image src={item.image} className="h-[180px] w-[100%]" alt="image" />
      </section>
      <section className="p-1 text-left">
        <p className="text-lg m-1 font-semibold flex justify-between">
          {item.name}
        </p>
        <p className="text-sm m-1 font-light">{item.description}</p>
        <button className="p-2 w-[90%] m-[5%] bg-green-600 border rounded-lg text-white">
          Shop
        </button>
      </section>
    </section>
  );
};

export default CardItem;
