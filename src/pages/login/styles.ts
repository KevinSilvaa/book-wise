import { styled } from '@/styles/stitches.config'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
})

export const ImageContainer = styled('div', {
  height: '100vh',
  padding: '1rem 0 1rem 1rem',

  '> img': {
    objectFit: 'cover',
    height: '100%',
    width: 'auto',
    borderRadius: '$md',
  },
})

export const LoginMethods = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  margin: '0 auto',
})

export const MethodsInfo = styled('div', {
  h1: {
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  span: {
    color: '$gray200',
    lineHeight: '$base',
  },
})

export const MethodsButtons = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const MethodItem = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  padding: '1.25rem 1.5rem',
  background: '$gray600',
  borderRadius: '$sm',
  width: '100%',
  cursor: 'pointer',
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
})
