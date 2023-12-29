// Styling Imports
import {
  BookCardInfos,
  BookCardTitle,
  AlreadyReadBook,
  ExploreBookCardContainer,
} from './styles'
import { BookDetailsRoot, BookDetailsTrigger } from '../BookDetailsModal/styles'

// Components Imports
import { Rating as StarRating } from '../Rating'

// Strategic Imports
import Image from 'next/image'
import { BookWithAverageRatingProps } from '@/pages/explore/index.page'
import { BookDetailsModal } from '../BookDetailsModal'
import { useState } from 'react'

type ExploreBookCardProps = {
  book: BookWithAverageRatingProps
}

export function ExploreBookCard({ book }: ExploreBookCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isBookAlreadyRead = book.bookAlreadyRead

  return (
    <BookDetailsRoot>
      <BookDetailsTrigger asChild onClick={() => setIsModalOpen(true)}>
        <ExploreBookCardContainer>
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

      {isModalOpen && (
        <BookDetailsModal
          book={book}
          open={isModalOpen}
          setModalOpen={setIsModalOpen}
        />
      )}
    </BookDetailsRoot>
  )
}
