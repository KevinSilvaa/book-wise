import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  height: '100%',
  paddingBottom: '5.25rem',
  boxSizing: 'border-box',
  width: 'calc(100% - 2px)',
  marginTop: '2rem',
})

export const ProfileHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  svg: {
    color: '$green100',
  },

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
    lineHeight: '$short',
  },

  variants: {
    isOwnProfile: {
      true: {
        button: {
          all: 'unset',
          padding: '0.25rem 0.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          cursor: 'pointer',
          borderRadius: 4,
          transition: 'all 0.3s ease-out',

          '&:hover': {
            backgroundColor: 'rgba(230, 232, 242, 0.04)',
          },

          svg: {
            color: '$gray200',
          },

          span: {
            fontSize: '$md',
            fontWeight: '$bold',
            lineHeight: '$base',
            color: '$gray200',
          },
        },
      },
    },
  },
})

export const ProfileContent = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 308px',
  gap: '4rem',

  '@media (max-width: 1250px)': {
    gridTemplateColumns: '1fr',
  },
})

export const MainContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const BooksReviewContent = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  overflow: 'auto',
  maxHeight: 'calc(100vh - 16rem)',

  // Hide Scrollbar
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',

  '@media (max-width: 1250px)': {
    maxHeight: 'calc(100vh - 36rem)',
  },
})

export const ProfileInfo = styled('section', {
  borderLeft: '1px solid $gray700',
  height: 'fit-content',

  '@media (max-width: 1250px)': {
    borderLeftColor: 'transparent',
  },
})
