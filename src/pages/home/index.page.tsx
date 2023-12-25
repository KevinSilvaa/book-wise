import { DefaultLayout } from '@/layouts/DefaultLayout'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import Link from 'next/link'
import { CaretRight, ChartLineUp, Star } from 'phosphor-react'
import {
  FeedbacksSection,
  FeedbacksSectionHeader,
  FeedbackSectionContent,
  HomeContainer,
  HomeHeader,
  HomeContent,
  MainContent,
  HomeSideContent,
  PopularBookCard,
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
  RecentReviewCard,
  RecentReviewCardHeader,
  RecentReviewCardContent,
  UserInfos,
  BookReview,
  BookTitle,
} from './styles'
import Image from 'next/image'
import bookImage from '@/assets/entendendo-algoritmos.png'
import cardBookImage from '@/assets/o-hobbit.png'
import { useRouter } from 'next/router'

const Home: NextPageWithLayout = () => {
  const user = true
  const router = useRouter()

  function handleNavigateToReview() {
    router.push(`/review/iasdiashjdioas213sadoa`)
  }

  return (
    <HomeContainer>
      <HomeHeader>
        <ChartLineUp size={32} />
        <h1>Início</h1>
      </HomeHeader>

      <HomeContent>
        <MainContent>
          {user ? (
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
              <RecentReviewCard>
                <RecentReviewCardHeader>
                  <UserInfos>
                    <Image
                      src="https://github.com/KevinSilvaa.png"
                      alt=""
                      width={40}
                      height={40}
                    />

                    <div>
                      <Link href={`/profile/jaxsondias`}>Jaxson Dias</Link>
                      <time title="25/12/2023">Hoje</time>
                    </div>
                  </UserInfos>

                  <BookRating>
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star />
                  </BookRating>
                </RecentReviewCardHeader>

                <RecentReviewCardContent onClick={handleNavigateToReview}>
                  <Image src={cardBookImage} alt="" width={108} height={152} />

                  <BookReview>
                    <BookTitle>
                      <strong>O Hobbit</strong>
                      <span>J.R.R. Tolkien</span>
                    </BookTitle>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente nemo mollitia ipsam, numquam tempora cumque
                      molestias expedita ex sit suscipit rerum dolorum placeat
                      a. Dicta accusantium voluptas et dolores neque.
                    </p>
                  </BookReview>
                </RecentReviewCardContent>
              </RecentReviewCard>

              <RecentReviewCard>
                <RecentReviewCardHeader>
                  <UserInfos>
                    <Image
                      src="https://github.com/KevinSilvaa.png"
                      alt=""
                      width={40}
                      height={40}
                    />

                    <div>
                      <Link href={`/profile/jaxsondias`}>Jaxson Dias</Link>
                      <time title="25/12/2023">Hoje</time>
                    </div>
                  </UserInfos>

                  <BookRating>
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star weight="fill" />
                    <Star />
                  </BookRating>
                </RecentReviewCardHeader>

                <RecentReviewCardContent onClick={handleNavigateToReview}>
                  <Image src={cardBookImage} alt="" width={108} height={152} />

                  <BookReview>
                    <BookTitle>
                      <strong>O Hobbit</strong>
                      <span>J.R.R. Tolkien</span>
                    </BookTitle>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sapiente nemo mollitia ipsam, numquam tempora cumque
                      molestias expedita ex sit suscipit rerum dolorum placeat
                      a. Dicta accusantium voluptas et dolores neque.
                    </p>
                  </BookReview>
                </RecentReviewCardContent>
              </RecentReviewCard>
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

            <PopularBookCard></PopularBookCard>
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
