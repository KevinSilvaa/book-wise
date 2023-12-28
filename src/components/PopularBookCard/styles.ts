import { styled } from '@/styles/stitches.config'

export const CardContainer = styled('div', {
  padding: '1rem 1.25rem',
  background: '$gray700',
  borderRadius: '$sm',
  display: 'flex',
  gap: '1.25rem',
  border: '2px solid $gray700',
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',

  img: {
    borderRadius: 4,
    objectFit: 'cover',
  },

  '&:hover': {
    borderColor: '$gray600',
  },
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const CardTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$md',
    color: '$gray100',
    lineHeight: '$short',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
  },
})
