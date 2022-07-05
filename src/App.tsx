import { useState, useEffect } from 'react'

function App() {
  const [movies, setMovies] = useState([])
  const imagePath = 'https://image.tmdb.org/t/p/w500/'

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=<<chaveAPI>>&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
    <div>
      <h1 className="text-center text-white text-4xl font-bold m-5">
        API Filmes
      </h1>
      <div>
        <h1 className="text-center text-5xl text-white m-5">Movies</h1>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-gray-200 p-5 m-5 rounded-md">
          {movies.map(movie => {
            return (
              <div
                key={movie.id}
                className="group relative bg-amber-400 p-3 rounded-md hover:scale-110 duration-200"
              >
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={`${imagePath}${movie.poster_path}`}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <h1 className="text-md text-center text-gray-800 font-bold mt-4">
                  {movie.title}
                </h1>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
