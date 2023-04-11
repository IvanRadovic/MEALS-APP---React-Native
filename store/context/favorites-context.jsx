import {createContext, useState} from 'react'

export const FavoritesContext = createContext({
    ids:[],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
    const [favoritesMeals, setFavoritesMeals] = useState([]);

    /* ---- Adding favorite Meal --- */
    const addFavorite = (id) => {
      setFavoritesMeals((current) => [...current, id]);
    }

    /* --- Removing favorite Meal ---- */
    const removeFavorite = (id) => {
      setFavoritesMeals((current) => current.filter((mealId) => mealId !== id)
      );
    }

    const value = {
        ids:favoritesMeals,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite
    }
  return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
};

export default FavoritesContextProvider;