/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

// Components Imports
import { Rating as StarRatings } from '@/components/Rating'

// Strategic Imports
import { useRouter } from 'next/router'
import Image from 'next/image'

// Image Imports
import { RatingWithAuthorAndBook } from '@/pages/home/index.page'
import dayjs from '@/lib/dayjs'
import { DateFormatter } from '@/utils/formatter'

interface ReviewCardProps {
  rating: RatingWithAuthorAndBook
}

export function ReviewCard({ rating }: ReviewCardProps) {
  const router = useRouter()

  function handleNavigateToReview() {
    router.push(`/review/iasdiashjdioas213sadoa`)
  }

  return (
    <RecentReviewCard>
      <RecentReviewCardHeader>
        <UserInfos href={`/profile/${rating.user_id}`}>
          <Image src={rating.user.avatar_url!} alt="" width={40} height={40} />

          <div>
            <strong>{rating.user.name}</strong>
            <time title={DateFormatter.format(new Date(rating.created_at))}>
              {dayjs(rating.created_at).fromNow()}
            </time>
          </div>
        </UserInfos>

        <BookRating>
          <StarRatings rating={rating.rate} starSize={16} />
        </BookRating>
      </RecentReviewCardHeader>

      <RecentReviewCardContent onClick={handleNavigateToReview}>
        <Image src={rating.book.cover_url} alt="" width={108} height={152} />

        <BookReview>
          <BookTitle>
            <strong>{rating.book.name}</strong>
            <span>{rating.book.author}</span>
          </BookTitle>

          <p>{rating.book.summary}</p>
        </BookReview>
      </RecentReviewCardContent>
    </RecentReviewCard>
  )
}
