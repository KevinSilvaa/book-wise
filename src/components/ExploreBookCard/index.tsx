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
  bookRecentlyRated?: BookWithAverageRatingProps
}

export function ExploreBookCard({
  book,
  bookRecentlyRated,
}: ExploreBookCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isBookAlreadyRead = book.bookAlreadyRead

  return (
    <BookDetailsRoot open={isModalOpen}>
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

      {isModalOpen && bookRecentlyRated ? (
        <BookDetailsModal
          book={bookRecentlyRated}
          open={true}
          setModalOpen={setIsModalOpen}
        />
      ) : (
        <BookDetailsModal
          book={book}
          open={isModalOpen}
          setModalOpen={setIsModalOpen}
        />
      )}
    </BookDetailsRoot>
  )
}
