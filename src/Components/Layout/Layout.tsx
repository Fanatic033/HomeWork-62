import Header from '../Header/Header';
import {Outlet,} from 'react-router-dom';

import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="my-container">
      <Header/>
      <div className="content">
      <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;