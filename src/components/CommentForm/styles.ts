import { styled } from '@/styles/stitches.config'
import { keyframes } from '@stitches/react'

import * as Toast from '@radix-ui/react-toast'

const loadingNewComment = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
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

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

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
})

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: 'translateX(calc(100% + 24px))' },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: 'translateX(calc(100% + 24px))' },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem',
  gap: '1rem',
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',

  '@media (max-width: 550px)': {
    right: 0,
  },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '#00875F',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '1rem',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  gap: '1rem',
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '0.5rem',
  fontWeight: '$medium',
  lineHeight: '$short',
  color: '$gray100',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray300',
  fontSize: '$sm',
  lineHeight: '$base',
})
