import { styled } from '@/styles/stitches.config'

export const UserProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const UserProfileInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '1.25rem',
  paddingBottom: '0.5rem',

  img: {
    borderRadius: '$full',
    border: '2px solid $green100',
  },
})

export const UserProfileTextInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    fontSize: '$xl',
    lineHeight: '$short',
    color: '$gray100',
  },

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const Separator = styled('div', {
  width: 32,
  height: 4,
  background: '$gradient-horizontal',
  borderRadius: '$full',
  alignSelf: 'center',
})

export const UserProfileStatistics = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  padding: '1.25rem 3.5rem',

  '@media (max-width: 1250px)': {
    margin: '0 auto',
  },
})

export const UserProfileItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  svg: {
    color: '$green100',
  },
})

export const ItemInfos = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    lineHeight: '$short',
    color: '$gray200',
  },

  span: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray300',
  },
})
