import { styled } from '@/styles/stitches.config'

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  paddingBottom: '5.25rem',
  marginTop: '2rem',
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

  '@media (min-width: 1440px)': {
    gridTemplateColumns: '1fr 0.5fr',
  },

  '@media (max-width: 1250px)': {
    gridTemplateColumns: '1fr',
  },
})

export const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  maxWidth: 608,

  '@media (min-width: 1440px)': {
    maxWidth: '100%',
  },

  '@media (max-width: 1250px)': {
    maxWidth: '100%',
    paddingBottom: 0,
  },
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
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',

  '&:hover': {
    borderColor: '$gray500',
  },

  '@media (max-width: 550px)': {
    img: {
      width: 72,
      height: 'auto',
      objectFit: 'cover',
    },
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
  overflow: 'auto',
  maxHeight: 'calc(100vh - 32.5rem)',
  height: '100%',

  // Hide Scrollbar
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',

  '@media (max-width: 1250px)': {
    maxHeight: '100%',
    overflow: 'unset',
  },

  '@media (max-width: 530px)': {
    gap: '1.5rem',
  },
})

export const HomeSideContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const PopularBooksSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

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

export const PopularBooksContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1rem',

  '@media (max-width: 1250px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (max-width: 550px)': {
    gridTemplateColumns: '1fr',
  },
})
