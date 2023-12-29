/* eslint-disable @typescript-eslint/no-non-null-assertion */
// Styling Imports
import {
  FeedbacksSection,
  FeedbacksSectionHeader,
  FeedbackSectionContent,
  HomeContainer,
  HomeHeader,
  HomeContent,
  MainContent,
  HomeSideContent,
  PopularBooksHeader,
  PopularBooksSection,
  RecommendBookCardDetails,
  RecommendBookCard,
  UserRecommendedBooks,
  UserRecommendedBooksHeader,
  BookTextInformation,
  BookInfos,
  BookRating,
  BookSummary,
  PopularBooksContent,
} from './styles'

// Components Imports
import { ReviewCard } from '@/components/BookReviewCard'
import { PopularBookCard } from '@/components/PopularBookCard'

// Strategic Imports
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { Book, Rating, User } from '@prisma/client'
import { Rating as StarRating } from '@/components/Rating'
import { api } from '@/lib/axios'
import dayjs from 'dayjs'

// Icons Imports
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { BookWithAverageRatingProps } from '../explore/index.page'

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

const Home: NextPageWithLayout = () => {
  const session = useSession()

  const userIsAuthenticated = session.status === 'authenticated'

  // Last user rated book
  const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>({
    queryKey: ['latest-user-rating', session.data?.user.id],
    queryFn: async () => {
      const { data } = await api.get('/ratings/user-latest')

      return data?.latestRating ?? null
    },
    enabled: !!session.data?.user.id,
  })

  const userDontHaveRecentReadBooks = latestUserRating === null

  // Last rated books
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['latest-ratings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')
      return data.ratings
    },
  })

  // Popular books
  const { data: popularBooks } = useQuery<BookWithAverageRatingProps[]>({
    queryKey: ['popular-books'],
    queryFn: async () => {
      const { data } = await api.get('/books/popular')

      return data?.popularBooks ?? []
    },
  })

  return (
    <HomeContainer>
      <HomeHeader>
        <ChartLineUp size={32} />
        <h1>Início</h1>
      </HomeHeader>

      <HomeContent>
        <MainContent>
          {userIsAuthenticated && latestUserRating ? (
            <UserRecommendedBooks>
              <UserRecommendedBooksHeader>
                <h3>Sua última leitura</h3>
                <Link href={`/profile/${session.data.user.id}`}>
                  <span>Ver todas</span>
                  <CaretRight size={16} />
                </Link>
              </UserRecommendedBooksHeader>
              <RecommendBookCard>
                <Image
                  src={latestUserRating.book.cover_url}
                  alt=""
                  width={108}
                  height={152}
                />

                <RecommendBookCardDetails>
                  <BookTextInformation>
                    <BookInfos>
                      <time title="23/12/2023">
                        {dayjs(latestUserRating.created_at).fromNow()}
                      </time>

                      <div>
                        <h3>{latestUserRating?.book.name}</h3>
                        <span>{latestUserRating?.book.author}</span>
                      </div>
                    </BookInfos>

                    <BookRating>
                      <StarRating
                        rating={latestUserRating.rate as number}
                        starSize={16}
                      />
                    </BookRating>
                  </BookTextInformation>

                  <BookSummary>{latestUserRating.book.summary}</BookSummary>
                </RecommendBookCardDetails>
              </RecommendBookCard>
            </UserRecommendedBooks>
          ) : null}

          <FeedbacksSection>
            <FeedbacksSectionHeader>
              <h3>Avaliações mais recentes</h3>
            </FeedbacksSectionHeader>

            <FeedbackSectionContent
              userDontHaveRecentReadBook={userDontHaveRecentReadBooks}
              userIsNotSignedIn={!session.data?.user.id}
            >
              {ratings?.map((rating) => (
                <ReviewCard key={rating.id} rating={rating} />
              ))}
            </FeedbackSectionContent>
          </FeedbacksSection>
        </MainContent>

        <HomeSideContent>
          <PopularBooksSection>
            <PopularBooksHeader>
              <h3>Livros populares</h3>

              <Link href="/explore">
                <span>Ver todos</span>
                <CaretRight size={16} />
              </Link>
            </PopularBooksHeader>

            <PopularBooksContent>
              {popularBooks?.map((book) => (
                <PopularBookCard key={book.id} book={book} />
              ))}
            </PopularBooksContent>
          </PopularBooksSection>
        </HomeSideContent>
      </HomeContent>
    </HomeContainer>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
