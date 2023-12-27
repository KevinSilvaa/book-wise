import { styled } from '@/styles/stitches.config'

export const ExploreBookCardContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  padding: '1rem 1.25rem',
  backgroundColor: '$gray700',
  borderRadius: '$sm',
})

export const BookCardInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const BookCardTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    lineHeight: '$short',
  },

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})
