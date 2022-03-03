import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import alertActionCreator from 'redux/actionCreators/alertAction';
import { alertTypes } from 'redux/types';
import Footer from '../footer/footer';

const Success = dynamic(() => import('components/common/Alerts/Success'));
const Navbar = dynamic(() => import('components/common/navbar/navbar'));
const Error = dynamic(() => import('components/common/Alerts/Error'));

const Layout: React.FunctionComponent = ({ children }) => {
  const alert = useSelector((state: any) => state.alert);
  const dispatch = useDispatch();
  let [isAlert, setAlert] = useState(false);
  let [isError, setError] = useState(false);

  useEffect(() => {
    if (alert && alert.message) {
      alert.type && alert.type === alertTypes.successAlert
        ? setAlert(true)
        : setError(true);

      setTimeout(() => {
        alertActionCreator.errorAlert(dispatch, null);
        setAlert(false);
        setError(false);
      }, 3000);
    }
  }, [alert, dispatch]);

  return (
    <>
      <div>
        <div className="fixed top-[15%] right-[-5%] translate-x-[-50%] translate-y-[-50%] sm:w-[50vw] w-[70vw] md:w-[30vw] lg:w-[20vw] z-10">
          {isAlert ? <Success message={alert.message} /> : <></>}
          {isError ? <Error message={alert.message} /> : <></>}
        </div>
        <div className="m-0 p-0 relative h-auto">
          <section className="bg-[#252d27] ">
            <Navbar />
          </section>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
