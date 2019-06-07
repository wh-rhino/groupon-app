import React from 'react';

//Issue #4 fix: corrección en key Rating. Resultado clickeable.
/**
* .."Ratings":[  
      {  
         "Source":"Internet Movie Database",
         "Value":"7.7/10"
      },
      {  
         "Source":"Rotten Tomatoes",
         "Value":"84%"
      },
      {  
         "Source":"Metacritic",
         "Value":"67/100"
      }
   ], ..
 */

const Movies = ({ movies }) => {
  return (
    <div className="container" position="relative ">
      <center><h1 className="notification is-success"><h1 className="title">Movie List</h1></h1></center>
      {movies.map((movie) => (
          <div className="hero-body">
            <h1 className="title">Title: {movie.Title}</h1>
            <h6 className="notification">Year: {movie.Year}</h6>
            <h1 className="notification">Rated: {movie.Rated}</h1>
            <h1 className="notification">Released: {movie.Released}</h1>
            <h1 className="notification">Runtime: {movie.Runtime}</h1>
            <h1 className="notification">Genre: {movie.Genre}</h1>
            <h1 className="notification">Director: {movie.Director}</h1>
            <h1 className="notification">Writer: {movie.Writer}</h1>
            <h1 className="notification">Actors: {movie.Actors}</h1>
            <h1 className="notification">Plot: {movie.Plot}</h1>
            <h1 className="notification">Language: {movie.Language}</h1>
            <h1 className="notification">Country: {movie.Country}</h1>
            <h1 className="notification">Awards: {movie.Awards}</h1>
            <h1 className="notification">Poster: {movie.Poster}</h1>
            <h1 className="notification">Metascore: {movie.Metascore}</h1>
            <h1 className="notification">imdbRating: {movie.imdbRating}</h1>
            <h1 className="notification">imdbVotes: {movie.imdbVotes}</h1>
            <h1 className="notification">imdbID: {movie.imdbID}</h1>
            <h1 className="notification">Type: {movie.Type}</h1>
            <h1 className="notification">DVD: {movie.DVD}</h1>
            <h1 className="notification">BoxOffice: {movie.BoxOffice}</h1>
            <h1 className="notification">Production: {movie.Production}</h1>
            <h1 className="notification">Website: {movie.Website}</h1>
            <h1 className="notification">Response: {movie.Response}</h1>
          </div>
      ))}
    </div>
  )
};

export default Movies