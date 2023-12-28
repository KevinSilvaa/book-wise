// Styling Imports
import { CardContent, CardTitle, CardContainer } from './styles'
import { BookRating } from '@/pages/home/styles'

// Strategic Imports
import Image from 'next/image'
import { BookWithAverageRatingProps } from '@/pages/explore/index.page'
import { VariantProps } from '@stitches/react'
import { Rating as StarRating } from '../Rating'

interface PopularBookCardProps extends VariantProps<typeof CardContainer> {
  book: BookWithAverageRatingProps
}

export function PopularBookCard({ book }: PopularBookCardProps) {
  return (
    <CardContainer>
      <Image src={book.cover_url} alt="" width={64} height={94} />

      <CardContent>
        <CardTitle>
          <strong>{book.name}</strong>
          <span>{book.author}</span>
        </CardTitle>

        <BookRating>
          <StarRating rating={book.averageRating} starSize={16} />
        </BookRating>
      </CardContent>
    </CardContainer>
  )
}
