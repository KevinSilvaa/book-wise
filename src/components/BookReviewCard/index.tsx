// Styling Imports
import {
  BookReview,
  BookTitle,
  RecentReviewCard,
  RecentReviewCardContent,
  RecentReviewCardHeader,
  UserInfos,
} from './styles'
import { BookRating } from '@/pages/home/styles'

// Strategic Imports
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'

// Icon Imports
import { Star } from 'phosphor-react'

// Image Imports
import cardBookImage from '@/assets/o-hobbit.png'

export function ReviewCard() {
  const router = useRouter()

  function handleNavigateToReview() {
    router.push(`/review/iasdiashjdioas213sadoa`)
  }

  return (
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            nemo mollitia ipsam, numquam tempora cumque molestias expedita ex
            sit suscipit rerum dolorum placeat a. Dicta accusantium voluptas et
            dolores neque.
          </p>
        </BookReview>
      </RecentReviewCardContent>
    </RecentReviewCard>
  )
}
