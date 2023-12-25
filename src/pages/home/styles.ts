import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
})

export const HomeHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  svg: {
    color: '$green100',
  },

  h1: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
    color: '$gray100',
  },
})

export const HomeContent = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 324px',
  gap: '4rem',
})

export const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  maxWidth: 608,
  paddingBottom: '5.25rem',
})

export const UserRecommendedBooks = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const UserRecommendedBooksHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '$sm',
  lineHeight: '$base',

  h3: {
    color: '$gray100',
    lineHeight: '$base',
    fontWeight: '$regular',
    fontSize: '$sm',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '$purple100',
    fontWeight: '$bold',
    textDecoration: 'none',
    padding: '0.25rem 0.5rem',
    borderRadius: 4,
    transition: 'all 0.3s ease-out',

    '&:hover': {
      backgroundColor: 'rgba(131, 129, 217, 0.06)',
    },
  },
})

export const RecommendBookCard = styled('div', {
  background: '$gray600',
  padding: '1.25rem 1.5rem',
  borderRadius: '$sm',
  display: 'flex',
  gap: '1.5rem',
  border: '2px solid $gray600',
  transition: 'all 0.3s ease-out',

  '&:hover': {
    borderColor: '$gray500',
  },
})

export const RecommendBookCardDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const BookTextInformation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const BookInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  '> span': {
    lineHeight: '$base',
    color: '$gray300',
    fontSize: '$sm',
  },

  div: {
    h3: {
      color: '$gray100',
      fontWeight: '$bold',
      lineHeight: '$short',
    },

    time: {
      fontSize: '$sm',
      lineHeight: '$base',
      color: '$gray400',
    },
  },
})

export const BookRating = styled('div', {
  display: 'flex',
  gap: '0.25rem',
  color: '$purple100',
})

export const BookSummary = styled('p', {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  fontSize: '$sm',
  color: '$gray300',
  lineHeight: '$base',
})

export const FeedbacksSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const FeedbacksSectionHeader = styled('div', {
  h3: {
    color: '$gray100',
    lineHeight: '$base',
    fontWeight: '$regular',
    fontSize: '$sm',
  },
})

export const FeedbackSectionContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

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

export const UserInfos = styled('div', {
  display: 'flex',
  gap: '1rem',

  img: {
    borderRadius: '$full',
    border: '1px solid $green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    lineHeight: '$base',

    a: {
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

export const HomeSideContent = styled('div', {})

export const PopularBooksSection = styled('section', {})

export const PopularBooksHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  h3: {
    color: '$gray100',
    lineHeight: '$base',
    fontWeight: '$regular',
    fontSize: '$sm',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '$purple100',
    fontWeight: '$bold',
    textDecoration: 'none',
    padding: '0.25rem 0.5rem',
    borderRadius: 4,
    transition: 'all 0.3s ease-out',

    span: {
      fontSize: '$sm',
      lineHeight: '$base',
    },

    '&:hover': {
      backgroundColor: 'rgba(131, 129, 217, 0.06)',
    },
  },
})

export const PopularBookCard = styled('div', {})
