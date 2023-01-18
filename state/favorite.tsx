import create from 'zustand'

interface Props {
  favourites: string[]
  addFavourite: (image: string) => void
}

let value: Props['favourites']

if (typeof window !== 'undefined') {
  value = JSON.parse(window.localStorage.getItem('favourites') || '[]')
}

export const useFavourites = create<Props>((set) => ({
  favourites: value,
  addFavourite: (image: string) =>
    set(({ favourites }) => {
      const draft = favourites.includes(image)
        ? favourites.filter((favourite) => favourite !== image)
        : favourites.concat(image)

      window.localStorage.setItem('favourites', JSON.stringify(draft))

      return {
        favourites: draft
      }
    })
}))