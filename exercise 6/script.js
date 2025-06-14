// Exercise: Movie Catalog Analyzer**  
// Write a function `analyzeMovies` that:  
// 1. Takes an array of movie objects (each with `title`, `year`, `genre`, `rating`).  
// 2. Returns an object with:  
//    - `highestRated`: Title of the movie with the highest rating  
//    - `averageRating`: Average rating of all movies (rounded to 1 decimal)  
//    - `genreCount`: An object counting movies per genre (e.g., `{ Action: 2, Drama: 1 }`)  
// Example Input:
// const movies = [
//   { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
//   { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
//   { title: "Parasite", year: 2019, genre: "Drama", rating: 8.6 }
// ];
// Expected Output:
// {
//   highestRated: "The Dark Knight",
//   averageRating: 8.8,
//   genreCount: { "Sci-Fi": 1, "Action": 1, "Drama": 1 }
// }


const movies = [
  { title: "The Shawshank Redemption", year: 1994, genre: "Drama", rating: 9.3 },
  { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2 },
  { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
  { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9 },
  { title: "Fight Club", year: 1999, genre: "Drama", rating: 8.8 },
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
  { title: "The Matrix", year: 1999, genre: "Sci-Fi", rating: 8.7 },
  { title: "Parasite", year: 2019, genre: "Thriller", rating: 8.6 },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
  { title: "The Silence of the Lambs", year: 1991, genre: "Thriller", rating: 8.6 }
];



function analyzeMovies(movies) {
  if (!movies || movies.length === 0) {
    return {
      highestRated: null,
      averageRating: 0,
      genreCount: {}
    };
  }

  // 1. Find highest rated movie
  const highestRated = movies.reduce((topMovie, currentMovie) => 
    currentMovie.rating > topMovie.rating ? currentMovie : topMovie
  ).title;

  // 2. Calculate average rating
  const averageRating = Number((
    movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length
  ).toFixed(1));

  // 3. Count genres
  const genreCount = movies.reduce((count, movie) => {
    count[movie.genre] = (count[movie.genre] || 0) + 1;
    return count;
  }, {});

  return {
    highestRated,
    averageRating,
    genreCount
  };
}


console.log(analyzeMovies(movies))