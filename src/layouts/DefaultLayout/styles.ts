import { styled } from '@/styles/stitches.config'

export const LayoutContainer = styled('div', {
  display: 'flex',
  height: '100%',
  maxWidth: '100vw',
})

export const HamburgerMenu = styled('button', {
  all: 'unset',
  top: '3rem',
  marginTop: '-0.5rem',
  cursor: 'pointer',
  zIndex: 15,
  width: 20,
  height: 20,

  '@media (min-width: 900px)': {
    display: 'none',
  },
})

export const Content = styled('main', {
  width: '100%',
  padding: '4.5rem 6rem 0',

  '@media (max-width: 1250px)': {
    padding: '3.5rem 3rem',
  },

  '@media (max-width: 530px)': {
    padding: '3.5rem 1rem',
  },
})
