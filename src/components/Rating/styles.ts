import { styled } from '@/styles/stitches.config'

export const RatingComponent = styled('div', {
  display: 'flex',
  gap: '0.25rem',

  svg: {
    color: '$purple100',
  },

  variants: {
    marginLeft: {
      true: {
        marginLeft: 'auto',
      },
    },
  },
})
