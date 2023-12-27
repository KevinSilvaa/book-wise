import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const RecentReviewCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '1.5rem',
  background: '$gray700',
  borderRadius: '$sm',
})

export const RecentReviewCardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const UserInfos = styled(Link, {
  display: 'flex',
  gap: '1rem',
  textDecoration: 'none',

  img: {
    borderRadius: '$full',
    border: '1px solid $green100',
    objectFit: 'cover',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: '$base',

    strong: {
      color: '$gray100',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease-out',

      '&:hover': {
        color: '$purple100',
      },
    },

    time: {
      color: '$gray400',
      fontSize: '$sm',
    },
  },
})

export const RecentReviewCardContent = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  cursor: 'pointer',
})

export const BookReview = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',

  p: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    '-webkit-box-orient': 'vertical',
  },
})

export const BookTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    lineHeight: '$short',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})
