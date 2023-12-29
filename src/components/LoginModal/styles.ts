import { styled } from '@/styles/stitches.config'
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '@stitches/react'

const contentShowAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-50%, -60%)',
  },

  '100%': {
    opacity: 1,
    transform: 'translate(-50%, -50%)',
  },
})

export const LoginModalPortal = styled(Dialog.Portal, {})

export const LoginModalOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  zIndex: 25,
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.60)',
})

export const LoginModalContent = styled(Dialog.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 30,
  padding: '3.5rem 4.5rem',
  backgroundColor: '$gray700',
  boxShadow: '4px 16px 24px 0px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  textAlign: 'center',
  borderRadius: '$xmd',
  maxWidth: 516,
  width: '100%',
  margin: '0 auto',
  animation: `${contentShowAnimation} 0.3s ease-out`,

  '@media (max-width: 550px)': {
    maxWidth: 400,
  },

  '@media (max-width: 432px)': {
    maxWidth: 320,
  },
})

export const CloseButton = styled(Dialog.Close, {
  background: 'transparent',
  border: 0,
  cursor: 'pointer',
  color: '$gray400',
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  width: 24,
  height: 24,
})

export const LoginModalTitle = styled(Dialog.Title, {
  color: '$gray200',
  fontSize: '$md',
  lineHeight: '$short',
})

export const AuthOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
})

export const AuthOptionItem = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  padding: '1.25rem 1.5rem',
  background: '$gray600',
  borderRadius: '$sm',
  cursor: 'pointer',
  width: 'calc(100% - 3rem)',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    opacity: 0.8,
  },

  span: {
    fontSize: '$lg',
    fontWeight: '$bold',
    lineHeight: '$base',
    color: '$gray200',
  },

  '@media (max-width: 1024px)': {
    span: {
      fontSize: '$md',
    },
  },

  '@media (max-width: 550px)': {
    span: {
      fontSize: '$sm',
    },
  },
})
