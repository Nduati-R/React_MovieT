import {createContext, useState, useContext, useEffect, use} from "react";

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
}

export const MovieProvider = ({children}) => {
const [favorites, setFavorites] = useState([]);

useEffect(() => {
  const storedFavs = (localStorage.getItem("favorites"));
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
},[]); 

useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
},[favorites]);

//function to  add it
const addToFavorites = (movie) => {
  setFavorites(prev => [...prev, movie]);
}

//function to check if a movie is in favorites and remove it
const removeFromFavorites = (id) => {
  setFavorites(prev => prev.filter(movie => movie.id !== id));
}

//function to check if a movie is in favorites
const isFavorite = (id) => {
  return favorites.some(movie => movie.id === id);
}

const value= {favorites,
     addToFavorites,
     removeFromFavorites, 
     isFavorite
    };

return (
    <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
); /*provides state to any component that is wrapped around it*/
}; 