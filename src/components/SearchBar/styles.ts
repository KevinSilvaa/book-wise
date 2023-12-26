import { styled } from '@/styles/stitches.config'

export const SearchBarContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.875rem 1.25rem',
  background: 'transparent',
  border: '1px solid $gray500',
  borderRadius: 4,
  color: '$gray400',
  width: '100%',

  '&:focus-within': {
    color: '$green200',
    borderColor: '$green200',

    svg: {
      color: '$green200',
    },
  },

  input: {
    width: '100%',
    border: 0,
    outline: 0,
    background: 'transparent',
    color: '$gray200',
    caretColor: '$green200',
    fontSize: '$sm',
    lineHeight: '$base',

    '&::placeholder': {
      fontSize: '$sm',
      lineHeight: '$base',
    },
  },

  svg: {
    color: '$gray500',
  },
})
