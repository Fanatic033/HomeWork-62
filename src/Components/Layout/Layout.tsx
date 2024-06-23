import Header from '../Header/Header.tsx';
import {Outlet,} from 'react-router-dom';

import Footer from '../Footer/Footer.tsx';

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