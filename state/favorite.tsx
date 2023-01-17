import { createContext, useContext, useState } from "react";

interface Context {
  state: {
    favorites: string[];
  };
  actions: {
    toggleFavorite: (image: string) => void;
  };
}

interface Props {
  children: React.ReactNode;
}

const FavoriteContext = createContext({} as Context);

const FavoriteProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  
  function toggleFavorite(image: string) {
    if (favorites.includes(image)) {
      setFavorites((favorites) =>
        favorites.filter((favorite) => favorite !== image)
      );
    } else {
      setFavorites((favorites) => [...favorites, image]);
    }
  }

  return (
    <FavoriteContext.Provider
      value={{ state: { favorites }, actions: { toggleFavorite } }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
function useFavorites(): [
  Context["state"]["favorites"],
  Context["actions"]["toggleFavorite"]
] {
  const { state, actions } = useContext(FavoriteContext);

  return [state.favorites, actions.toggleFavorite];
}

export { FavoriteProvider as Provider, useFavorites };
