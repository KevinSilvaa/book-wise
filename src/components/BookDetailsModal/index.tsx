// Styling Imports
import {
  BookDetailsContent,
  BookDetailsOverlay,
  BookDetailsPortal,
  Card,
  CardBookAuthor,
  CardBookTitle,
  CardContent,
  CardInfos,
  CardTitle,
  CloseButton,
  BookStatistics,
  ItemContainer,
  ItemInfos,
  RatingInfos,
  CommentsSection,
  CommentsSectionHeader,
  CommentsSectionButton,
  CommentsSectionContent,
} from './styles'

// Components Imports
import { Rating as StarRating } from '../Rating'
import { LoginModal } from '../LoginModal'
import { CardComment } from '../CardComment'
import { CommentForm } from '../CommentForm'

// Strategic Imports
import { BookWithAverageRatingProps } from '@/pages/explore/index.page'
import Image from 'next/image'
import { User } from 'next-auth'
import { CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

// Icons Imports
import { BookOpen, BookmarkSimple, X } from 'phosphor-react'

export type RatingWithAuthorProps = Rating & {
  user: User
}

type BookDetailsProps = {
  book: BookWithAverageRatingProps
  open: boolean
}

type BookDetailsWithCategoriesProps = BookDetailsProps & {
  ratings: RatingWithAuthorProps[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

export function BookDetailsModal({ book, open }: BookDetailsProps) {
  const [newFormRating, setNewFormRating] = useState(false)

  const session = useSession()

  const { data: bookDetails } = useQuery<BookDetailsWithCategoriesProps>({
    queryKey: ['book-details', book.id],
    queryFn: async () => {
      const { data } = await api.get(`/books/details/${book.id}`)

      return data?.bookDetails ?? []
    },
    enabled: open,
  })

  const ratingsLength = bookDetails?.ratings.length

  const ratingsOrderedByDate = bookDetails?.ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const userCanRate = bookDetails?.ratings.every(
    (rating) => rating.user_id !== session.data?.user.id,
  )

  const categories =
    bookDetails?.categories
      .map((bookCategory) => bookCategory.category.name)
      .join(', ') ?? ''

  return (
    <BookDetailsPortal>
      <BookDetailsOverlay />

      <BookDetailsContent>
        <CloseButton asChild>
          <X size={24} weight="bold" />
        </CloseButton>
        <Card>
          <CardContent>
            <Image src={book.cover_url} alt="" width={172} height={242} />

            <CardInfos>
              <CardTitle>
                <CardBookTitle>{book.name}</CardBookTitle>
                <CardBookAuthor>{book.author}</CardBookAuthor>
              </CardTitle>

              <RatingInfos>
                <StarRating starSize={20} rating={book.averageRating} />
                <span>
                  {ratingsLength}{' '}
                  {ratingsLength === 1 ? 'avaliação' : 'avaliações'}
                </span>
              </RatingInfos>
            </CardInfos>
          </CardContent>

          <BookStatistics>
            <ItemContainer>
              <BookmarkSimple size={24} />

              <ItemInfos>
                <span>Categoria</span>
                <strong>{categories}</strong>
              </ItemInfos>
            </ItemContainer>

            <ItemContainer>
              <BookOpen size={24} />

              <ItemInfos>
                <span>Páginas</span>
                <strong>{book.total_pages}</strong>
              </ItemInfos>
            </ItemContainer>
          </BookStatistics>
        </Card>

        <CommentsSection>
          <CommentsSectionHeader>
            <h3>Avaliações</h3>
            <div>
              {session.data ? (
                <>
                  {userCanRate ? (
                    <CommentsSectionButton
                      onClick={() => setNewFormRating(!newFormRating)}
                      disabled={newFormRating}
                    >
                      Avaliar
                    </CommentsSectionButton>
                  ) : (
                    <CommentsSectionButton disabled={true}>
                      Você ja avaliou esse livro!
                    </CommentsSectionButton>
                  )}
                </>
              ) : (
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <CommentsSectionButton>Avaliar</CommentsSectionButton>
                  </Dialog.Trigger>

                  <LoginModal />
                </Dialog.Root>
              )}
            </div>
          </CommentsSectionHeader>

          <CommentsSectionContent>
            {newFormRating && (
              <CommentForm
                setNewFormRating={setNewFormRating}
                bookId={book.id}
              />
            )}

            {ratingsOrderedByDate?.map((rating) => (
              <CardComment key={rating.id} ratingComment={rating} />
            ))}
          </CommentsSectionContent>
        </CommentsSection>
      </BookDetailsContent>
    </BookDetailsPortal>
  )
}
