import Navbar from 'components/common/navbar/navbar';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <div className="m-0 p-0">
      <section className="bg-[#252d27] ">
        <Navbar />
      </section>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
