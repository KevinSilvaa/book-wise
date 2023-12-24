import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const SideBarContainer = styled('aside', {
  height: '100vh',
  maxWidth: 250,
  width: '100%',
  padding: '$5 0 $4 $5',
})

export const SideBarContent = styled('div', {
  height: '100%',
  backgroundImage: 'url(/sidebar-background.png)',
  padding: '2.5rem 2rem 1.5rem',
  borderRadius: '$xmd',
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

export const ContentHeader = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})

export const ContentNavbar = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  height: '100%',
})

export const NavbarItem = styled(Link, {
  padding: '$2 0 0 $4',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  textDecoration: 'none',
  color: '$gray400',
  lineHeight: '$base',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    color: '$gray100',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
        position: 'relative',

        '&::before': {
          content: '',
          position: 'absolute',
          width: 4,
          height: 24,
          left: 0,
          borderRadius: 'full',
          background: '$gradient-vertical',
        },
      },
    },
  },
})

export const LoginInfo = styled('button', {
  all: 'unset',
  display: 'flex',
  marginTop: 'auto',
  gap: '$3',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    opacity: 0.8,
  },

  img: {
    border: '1px solid',
    borderColor: '$gradient-vertical',
    borderRadius: '$full',
  },

  span: {
    color: '$gray200',
    fontWeight: '$bold',
    lineHeight: '$base',
    maxWidth: 90,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  svg: {
    color: '$green100',
  },

  variants: {
    userIsLogged: {
      true: {
        span: {
          fontSize: '$sm',
        },

        svg: {
          color: '#F75A68',
        },
      },
    },
  },
})
