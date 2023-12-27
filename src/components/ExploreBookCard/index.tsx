// Styling Imports
import {
  BookCardInfos,
  BookCardTitle,
  ExploreBookCardContainer,
} from './styles'

// Components Imports
import { Rating as StarRating } from '../Rating'

// Strategic Imports
import Image from 'next/image'
import { BookWithAverageRatingProps } from '@/pages/explore/index.page'

// Icons Imports

type ExploreBookCardProps = {
  book: BookWithAverageRatingProps
}

export function ExploreBookCard({ book }: ExploreBookCardProps) {
  return (
    <ExploreBookCardContainer>
      <Image src={book.cover_url} alt="" width={108} height={152} />

      <BookCardInfos>
        <BookCardTitle>
          <strong>{book.name}</strong>
          <span>{book.author}</span>
        </BookCardTitle>

        <StarRating rating={book.averageRating} starSize={16} />
      </BookCardInfos>
    </ExploreBookCardContainer>
  )
}
