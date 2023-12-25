import { styled } from '@/styles/stitches.config'

export const Container = styled('main', {
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  height: '100vh',

  '@media (max-width: 1024px)': {
    justifyContent: 'center',
    padding: '0 2rem',
  },
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

  '@media (max-width: 1024px)': {
    display: 'none',
  },
})

export const LoginMethods = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  margin: '0 auto',
  width: 372,
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

  '@media (max-width: 1024px)': {
    span: {
      fontSize: '$md',
    },
  },
})
