import { Link, Route, Routes} from 'react-router-dom';
import Hw58 from '../../Homework-58/Hw58';
import Movie from '../../Movie/Movie.tsx';
import Joke from '../../Joke/Joke.tsx';

const OtherPage = () => {
  return (
    <div>
 <h1 className={'text-center mt-5'}>My Projects</h1>
      <ul className={'list-group text-center mt-5'}>
        <li><b>1</b><Link to={'modal'}>Modal & alert</Link></li>
        <li><b>2</b><Link to={'movie'}>Movie List</Link></li>
        <li><b>3</b><Link to={'joke'}>Joke Generator</Link></li>
        <li></li>
      </ul>
      <Routes>
        <Route path="/modal" element={<Hw58/>} />
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/joke" element={<Joke/>}/>
      </Routes>
    </div>
  );
};

export default OtherPage;