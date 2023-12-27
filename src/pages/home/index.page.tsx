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

// Icons Imports
import { CaretRight, ChartLineUp, Star } from 'phosphor-react'

// Image Imports
import bookImage from '../../../public/images/books/a-revolucao-dos-bichos.png'
import { api } from '@/lib/axios'

export interface RatingWithAuthorAndBook extends Rating {
  user: User
  book: Book
}

const Home: NextPageWithLayout = () => {
  const session = useSession()

  const userIsAuthenticated = session.status === 'authenticated'

  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>({
    queryKey: ['latestRatings'],
    queryFn: async () => {
      const { data } = await api.get('/ratings/latest')
      return data.ratings
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
          {userIsAuthenticated ? (
            <UserRecommendedBooks>
              <UserRecommendedBooksHeader>
                <h3>Sua última leitura</h3>
                <Link href="/explore">
                  <span>Ver todas</span>
                  <CaretRight size={16} />
                </Link>
              </UserRecommendedBooksHeader>
              <RecommendBookCard>
                <Image src={bookImage} alt="" width={108} height={152} />

                <RecommendBookCardDetails>
                  <BookTextInformation>
                    <BookInfos>
                      <time title="23/12/2023">Há 2 dias</time>

                      <div>
                        <h3>Entendendo Algoritmos</h3>
                        <span>Aditya Bhargava</span>
                      </div>
                    </BookInfos>

                    <BookRating>
                      <Star weight="fill" />
                      <Star weight="fill" />
                      <Star weight="fill" />
                      <Star weight="fill" />
                      <Star />
                    </BookRating>
                  </BookTextInformation>

                  <BookSummary>
                    Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                    sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                    lectu
                  </BookSummary>
                </RecommendBookCardDetails>
              </RecommendBookCard>
            </UserRecommendedBooks>
          ) : null}

          <FeedbacksSection>
            <FeedbacksSectionHeader>
              <h3>Avaliações mais recentes</h3>
            </FeedbacksSectionHeader>

            <FeedbackSectionContent>
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
              <PopularBookCard />
              <PopularBookCard />
              <PopularBookCard />
              <PopularBookCard />
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
