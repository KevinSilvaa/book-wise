import { styled } from '@/styles/stitches.config'

export const ExploreBookCardContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  padding: '1rem 1.25rem',
  backgroundColor: '$gray700',
  borderRadius: '$sm',
  position: 'relative',
  width: '100%',
  cursor: 'pointer',
})

export const AlreadyReadBook = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '0.25rem 0.75rem',
  backgroundColor: '$green300',
  borderRadius: '0 $sm 0 $xs',

  span: {
    fontSize: '$xs',
    fontWeight: '$bold',
    lineHeight: '$shorter',
    color: '$green100',
    textTransform: 'uppercase',
  },
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
