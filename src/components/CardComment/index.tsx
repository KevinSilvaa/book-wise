// Styling Imports
import {
  CardCommentContainer,
  CardCommentContent,
  CardCommentHeader,
  CardCommentUserInfos,
  UserInfosTitle,
} from './styles'

// Components Imports
import { Rating as StarRating } from '../Rating'

// Strategic Imports
import Image from 'next/image'
import { RatingWithAuthorProps } from '../BookDetailsModal'
import dayjs from '@/lib/dayjs'
import { DateFormatter } from '@/utils/formatter'

type CardCommentProps = {
  ratingComment: RatingWithAuthorProps
}

export function CardComment({ ratingComment }: CardCommentProps) {
  return (
    <CardCommentContainer>
      <CardCommentHeader>
        <CardCommentUserInfos>
          <Image
            src={ratingComment.user.avatar_url}
            alt=""
            width={40}
            height={40}
          />

          <UserInfosTitle>
            <strong>{ratingComment.user.name}</strong>
            <time
              title={DateFormatter.format(new Date(ratingComment.created_at))}
            >
              {dayjs(ratingComment.created_at).fromNow()}
            </time>
          </UserInfosTitle>
        </CardCommentUserInfos>

        <StarRating rating={ratingComment.rate} starSize={16} />
      </CardCommentHeader>

      <CardCommentContent>
        <p>{ratingComment.description}</p>
      </CardCommentContent>
    </CardCommentContainer>
  )
}
