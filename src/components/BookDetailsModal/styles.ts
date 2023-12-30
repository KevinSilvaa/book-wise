import { styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'

const overlayShowAnimation = keyframes({
  '0%': {
    opacity: 0,
  },

  '100%': {
    opacity: 1,
  },
})

const contentShowAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(100%)',
  },

  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const BookDetailsRoot = styled(Dialog.Root, {})

export const BookDetailsTrigger = styled(Dialog.Trigger, {})

export const BookDetailsPortal = styled(Dialog.Portal, {})

export const BookDetailsOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  zIndex: 15,
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.6)',
  animation: `${overlayShowAnimation} 0.3s ease-out`,
})

export const BookDetailsContent = styled(Dialog.Content, {
  top: 0,
  right: 0,
  bottom: 0,
  position: 'fixed',
  zIndex: 20,
  padding: '4rem 3rem',
  background: '$gray800',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  maxWidth: 660,
  width: '100%',
  outline: 0,
  animation: `${contentShowAnimation} 0.3s ease-out`,
  overflow: 'auto',

  // Hide Scrollbar
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',

  '@media (max-width: 1250px)': {
    maxWidth: 550,
  },

  '@media (max-width: 900px)': {
    padding: '4rem 2rem',
    maxWidth: 450,
  },

  '@media (max-width: 550px)': {
    padding: '4rem 1rem',
  },
})

export const CloseButton = styled(Dialog.Close, {
  cursor: 'pointer',
  color: '$gray400',
  position: 'absolute',
  top: '1.5rem',
  right: '3rem',

  '@media (max-width: 900px)': {
    right: '2rem',
  },

  '@media (max-width: 550px)': {
    right: '3.75rem',
  },

  '@media (max-width: 360px)': {
    right: '1rem',
  },
})

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '1.5rem 2rem',
  borderRadius: '$md',
  backgroundColor: '$gray700',
  maxWidth: 564,

  '@media (max-width: 550px)': {
    maxWidth: 330,
    alignSelf: 'center',
  },
})

export const CardContent = styled('div', {
  display: 'flex',
  gap: '2rem',

  img: {
    objectFit: 'cover',
  },

  '@media (max-width: 550px)': {
    flexDirection: 'column',

    img: {
      alignSelf: 'center',
    },
  },
})

export const CardInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@media (max-width: 550px)': {
    flexDirection: 'row',
  },
})

export const CardTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
})

export const CardBookTitle = styled(Dialog.Title, {
  fontSize: '$lg',
  lineHeight: '$short',
  color: '$gray100',
})

export const CardBookAuthor = styled(Dialog.Description, {
  lineHeight: '$base',
  color: '$gray300',
})

export const RatingInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const BookStatistics = styled('div', {
  display: 'flex',
  padding: '1.5rem 0',
  gap: '3.5rem',
  borderTop: '1px solid $gray600',
})

export const ItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  svg: {
    color: '$green100',
  },
})

export const ItemInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',
  },

  strong: {
    lineHeight: '$short',
    color: '$gray200',
  },
})

export const CommentsSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const CommentsSectionHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  h3: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray200',
    fontWeight: '$regular',
  },
})

export const CommentsSectionButton = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  fontWeight: '$bold',
  lineHeight: '$base',
  padding: '0.25rem 0.5rem',
  color: '$purple100',
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: 'rgba(131, 129, 217, 0.06)',
  },
})

export const CommentsSectionContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})
