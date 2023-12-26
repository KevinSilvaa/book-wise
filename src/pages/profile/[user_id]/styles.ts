import { styled } from '@/styles/stitches.config'

export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  height: '100%',
  paddingBottom: '5.25rem',
  boxSizing: 'border-box',
  width: 'calc(100% - 2px)',
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
})

export const ProfileContent = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 308px',
  gap: '4rem',
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
})

export const ProfileInfo = styled('section', {
  borderLeft: '1px solid $gray700',
  height: 'fit-content',
})
