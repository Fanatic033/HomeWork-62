import './App.css';
import HomePage from './Container/HomePage/HomePage.tsx';
import AboutPage from './Container/AboutPage/AboutPage.tsx';
import {Routes, Route} from 'react-router-dom';
import ContactsPage from './Container/ContactsPage/ContactsPage.tsx';
import Layout from './Components/Layout/Layout.tsx';

const App = () => (
  <>
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route element={<HomePage/>} index/>
        <Route element={<AboutPage/>} path="/about"/>
        <Route element={<ContactsPage/>} path="/pricing"/>
        <Route element={<h1> Not found</h1>} path="*"/>
      </Route>
    </Routes>
  </>
);

export default App;
