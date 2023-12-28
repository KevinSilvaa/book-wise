// Styling Imports
import {
  BookCardInfos,
  BookCardTitle,
  AlreadyReadBook,
  ExploreBookCardContainer,
} from './styles'

// Components Imports
import { Rating as StarRating } from '../Rating'

// Strategic Imports
import Image from 'next/image'
import { BookWithAverageRatingProps } from '@/pages/explore/index.page'
import { useState } from 'react'
import { BookDetails } from '../BookDetails'
import { BookDetailsRoot, BookDetailsTrigger } from '../BookDetails/styles'

type ExploreBookCardProps = {
  book: BookWithAverageRatingProps
}

export function ExploreBookCard({ book }: ExploreBookCardProps) {
  const [isSelected, setIsSelected] = useState(false)
  const isBookAlreadyRead = book.bookAlreadyRead
  console.log(isSelected)

  return (
    <BookDetailsRoot>
      <BookDetailsTrigger asChild>
        <ExploreBookCardContainer onClick={() => setIsSelected(!isSelected)}>
          {isBookAlreadyRead ? (
            <AlreadyReadBook>
              <span>Lido</span>
            </AlreadyReadBook>
          ) : null}

          <Image src={book.cover_url} alt="" width={108} height={152} />

          <BookCardInfos>
            <BookCardTitle>
              <strong>{book.name}</strong>
              <span>{book.author}</span>
            </BookCardTitle>

            <StarRating rating={book.averageRating} starSize={16} />
          </BookCardInfos>
        </ExploreBookCardContainer>
      </BookDetailsTrigger>

      <BookDetails book={book} />
    </BookDetailsRoot>
  )
}
