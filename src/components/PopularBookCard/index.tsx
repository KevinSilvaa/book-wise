// Styling Imports
import { CardContent, CardTitle, CardContainer } from './styles'
import { BookRating } from '@/pages/home/styles'

// Strategic Imports
import Image from 'next/image'

// Icons Imports
import { Star } from 'phosphor-react'

// Image Imports
import bookCardImage from '../../../public/images/books/a-revolucao-dos-bichos.png'

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
