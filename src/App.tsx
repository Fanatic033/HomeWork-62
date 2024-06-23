import './App.css';
import Header from './Components/Header/Header.tsx';
import HomePage from './Container/HomePage/HomePage.tsx';
import AboutPage from './Container/AboutPage/AboutPage.tsx';
import Footer from './Components/Footer/Footer.tsx';
import {Routes, Route} from 'react-router-dom';
import ContactsPage from './Container/ContactsPage/ContactsPage.tsx';

const App = () => (
  <>
    <div className="my-container">
      <Header/>
      <div className="content">
        <Routes>
          <Route element={<HomePage/>} path='/'/>
          <Route element={<AboutPage/>} path='/about'/>
          <Route element={<ContactsPage/>} path='/pricing'/>
          <Route element={<h1> Not found</h1>} path='*'/>
        </Routes>
      </div>
      <Footer/>
    </div>
  </>
);

export default App;
