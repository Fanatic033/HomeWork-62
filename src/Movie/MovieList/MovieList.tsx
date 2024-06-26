import React from 'react';
import MovieItem from './MovieItem.tsx';

interface cinema {
  name: string;
  id: string;
}

interface Props {
  Movies: cinema[];
  onDelete: (id: string) => void;
  onEdit: (id: string, newMovie: string) => void;
}

const MovieList: React.FC<Props> = React.memo(({Movies, onDelete, onEdit}) => {
  return (
    <>
      <h5 className={'text-center'}>To Watch List</h5>
      {Movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} onDelete={onDelete} onEdit={onEdit}/>
      ))}
    </>
  );
});

export default MovieList;
