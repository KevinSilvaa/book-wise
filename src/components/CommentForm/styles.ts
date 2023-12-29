import { styled } from '@/styles/stitches.config'
import { keyframes } from '@stitches/react'

const loadingNewComment = keyframes({
  '0%': {
    transform: 'rotate(0)',
  },

  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const CommentFormContainer = styled('div', {
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  borderRadius: '$sm',
  backgroundColor: '$gray700',
})

export const CommentFormHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@media (max-width: 550px)': {
    flexDirection: 'column',
    gap: '1rem',
  },
})

export const CommentHeaderUserInfos = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  img: {
    objectFit: 'cover',
    borderRadius: '$full',
    border: '1px solid $green100',
  },

  strong: {
    color: '$gray100',
    lineHeight: '$short',
    fontSize: '$md',
  },
})

export const CommentFormContent = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const FormError = styled('p', {
  color: '#F75A68',
})

export const TextAreaContainer = styled('div', {
  position: 'relative',

  textarea: {
    resize: 'none',
    padding: '0.875rem 1.25rem',
    backgroundColor: '$gray800',
    color: '$gray200',
    fontSize: '$sm',
    lineHeight: '$base',
    border: '1px solid $gray500',
    borderRadius: '$xs',
    caretColor: '$green200',
    width: '100%',
    position: 'relative',
    height: 164,

    // Hide Scrollbar
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '-ms-overflow-style': 'none',
    scrollbarWidth: 'none',

    '&::placeholder': {
      color: '$gray400',
    },

    '&:focus': {
      outline: 0,
      borderColor: '$green200',
    },
  },

  span: {
    position: 'absolute',
    bottom: '0.5rem',
    right: '0.5rem',
    fontSize: '$xs',
    color: '$gray400',
    lineHeight: '$base',
  },
})

export const ContentButtons = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '0.5rem',
})

export const ButtonItem = styled('button', {
  padding: '0.5rem',
  backgroundColor: '$gray600',
  borderRadius: '$xs',
  border: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$gray500',
  },

  '&:first-child': {
    color: '$purple100',
  },

  '&:last-child': {
    color: '$green100',
  },

  variants: {
    isSubmitting: {
      true: {
        'button[type="submit"]': {
          svg: {
            animation: `${loadingNewComment} 0.7s infinite linear`,
          },
        },
      },
    },
  },
})
