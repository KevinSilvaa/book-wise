// Styling Imports
import {
  BookRating,
  ProfileCard,
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardInfos,
  ProfileCardTitle,
} from './styles'

// Componenets Imports
import { Rating as StarsRating } from '../Rating'

// Strategic Imports
import Image from 'next/image'
import dayjs from '@/lib/dayjs'
import { Book, CategoriesOnBooks, Category, Rating } from '@prisma/client'
import { DateFormatter } from '@/utils/formatter'

export type UserProfileRatingsProps = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

type RatingProps = {
  rating: UserProfileRatingsProps
}

export function ProfileReviewCard({ rating }: RatingProps) {
  return (
    <ProfileCardContainer>
      <h3 title={DateFormatter.format(new Date(rating.created_at))}>
        {dayjs(rating.created_at).fromNow()}
      </h3>

      <ProfileCard>
        <ProfileCardInfos>
          <Image src={rating.book.cover_url} alt="" width={98} height={134} />

          <ProfileCardContent>
            <ProfileCardTitle>
              <strong>{rating.book.name}</strong>
              <span>{rating.book.author}</span>
            </ProfileCardTitle>

            <BookRating>
              <StarsRating rating={rating.rate} starSize={16} />
            </BookRating>
          </ProfileCardContent>
        </ProfileCardInfos>
        <p>{rating.description}</p>
      </ProfileCard>
    </ProfileCardContainer>
  )
}
