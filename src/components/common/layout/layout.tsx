import Navbar from 'components/common/navbar/navbar';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { alertTypes } from 'redux/types';
import Success from '../Alerts/Success';
import Error from '../Alerts/Error';

const Layout: React.FunctionComponent = ({ children }) => { 
  const alert = useSelector((state: any) => state.alert);
  let [isAlert, setAlert] = useState(false);
  let [isError, setError] = useState(false);

  useEffect(() => {
    if (alert.type === alertTypes.successAlert) {
      setAlert(true);
    } else {
      setError(true);
    }

    setTimeout(() => {
      setAlert(false);
      setError(false);
    }, 3000);
  }, [alert]);

  return (
    <div>
      <div className="w-[20vw] p-4 absolute top-[10vh] right-10 z-10">
        {isAlert ? <Success message={alert.message} /> : <></>}
        {isError ? <Error message={alert.message} /> : <></>}
      </div>
      <div className="m-0 p-0">
        <section className="bg-[#252d27] ">
          <Navbar />
        </section>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
