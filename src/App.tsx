import './App.css';
import HomePage from './Container/HomePage/HomePage';
import AboutPage from './Container/AboutPage/AboutPage';
import {Routes, Route} from 'react-router-dom';
import ContactsPage from './Container/ContactsPage/ContactsPage';
import Layout from './Components/Layout/Layout';
import OtherPage from './Container/OtherProjectPage/0therPage';

const App = () => (
  <>
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route element={<HomePage/>} index/>
        <Route element={<AboutPage/>} path="about"/>
        <Route element={<ContactsPage/>} path="pricing"/>
        <Route element={<OtherPage/>} path="other/*"/>
        <Route element={<h1 className={'text-center'}> Not found</h1>} path="*"/>
      </Route>
    </Routes>
  </>
);

export default App;
