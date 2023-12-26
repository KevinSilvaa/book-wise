// Styling Imports
import { CardContent, CardTitle, CardContainer } from './styles'

// Strategic Imports
import Image from 'next/image'

// Image Imports
import bookCardImage from '@/assets/Book.png'
import { BookRating } from '@/pages/home/styles'
import { Star } from 'phosphor-react'

export function PopularBookCard() {
  return (
    <CardContainer>
      <Image src={bookCardImage} alt="" width={64} height={94} />

      <CardContent>
        <CardTitle>
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>
        </CardTitle>

        <BookRating>
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star />
        </BookRating>
      </CardContent>
    </CardContainer>
  )
}
