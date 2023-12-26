import { styled } from '@/styles/stitches.config'

export const ProfileCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  h3: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: '$base',
    fontWeight: '$regular',
  },
})

export const ProfileCard = styled('div', {
  background: '$gray700',
  padding: '1.5rem',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  p: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',
  },
})

export const ProfileCardInfos = styled('div', {
  display: 'flex',
  gap: '1.5rem',
})

export const ProfileCardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0.25rem 0',
})

export const BookRating = styled('div', {
  display: 'flex',
  gap: '0.25rem',
  color: '$purple100',
})

export const ProfileCardTitle = styled('div', {})
