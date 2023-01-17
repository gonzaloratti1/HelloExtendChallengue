"use client"
import { useFavorites } from "@/state/favorite";

const FavoritableImage = ({ src }: { src: string }) => {
  const [favorites, toggleFavorite] = useFavorites()
  const isFavorite = favorites.includes(src)
    return (
      <div className="relative">
        <img alt="/" className="w-full h-64 object-cover" src={src} />
        <button
          className={`absolute font-bold text-2xl w-8 h-8 bottom-4 right-4 flex items-center justify-center bg-white rounded-full ${isFavorite ? 'text-yellow-500': 'text-black'}`  }
          style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.1)" }}
          onClick={() => toggleFavorite(src)}
        >
          {isFavorite ? "★" : "☆"}
        </button>
      </div>
    );
  };

export default FavoritableImage