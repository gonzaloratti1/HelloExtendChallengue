'use client'
import Image from 'next/image'
import { useFavourites } from '@/state/favorite'

export default function FavoritableImage ({ src }: {src: string}) {
  const favourites = useFavourites((state: { favourites: any }) => state.favourites)
  const addFavourite = useFavourites((state: { addFavourite: any }) => state.addFavourite)
  const isFavourite = favourites.includes(src)

  return (
    <div className='relative'>
      <img className='w-full h-72 object-cover' src={src} alt='Perritos' />
      <button
        onClick={() => addFavourite(src)}
        className='absolute w-8 h-8 bottom-4 right-4 border-none font-bold'
        style={{ boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)' }}
      >
        {isFavourite ? '❤️' : '♡'}
      </button>
    </div>
  )
}