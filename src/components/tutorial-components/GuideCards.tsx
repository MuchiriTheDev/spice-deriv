import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

interface GuideCardsProps {
  title?: string;
  image?: void;
  link?: string;
}

const GuideCards = ({title = "Card title", image = `${assets.thumbnail}`, link = '/' }: GuideCardsProps) => {
  return (
    <div className=''>
        <Image 
            src={image}
            alt={`${title} image`}
            width={500}
            height={500}
            className='rounded-md hover:shadow-lg transition-shadow duration-300'
        />
        <h3 className='text-base font-semibold mt-2'>{title}</h3>
    </div>
  )
}

export default GuideCards