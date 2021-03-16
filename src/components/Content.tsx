import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';
import { Header } from './Header';

interface Movie {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps{
  movies: Movie[];
  genre: string;
}

export function Content({genre, movies}: ContentProps) {

  return (
    <div className="container">
        <Header genre={genre} />

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key={movie.Title} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}