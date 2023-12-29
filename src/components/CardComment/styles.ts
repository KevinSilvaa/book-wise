import { styled } from '@/styles/stitches.config'

export const CardCommentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '1.5rem',
  backgroundColor: '$gray700',
  borderRadius: '$sm',
})

export const CardCommentHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const CardCommentUserInfos = styled('div', {
  display: 'flex',
  gap: '1rem',

  img: {
    objectFit: 'cover',
    borderRadius: '$full',
    border: '1px solid $green100',
  },
})

export const UserInfosTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  strong: {
    color: '$gray100',
    lineHeight: '$short',
  },

  time: {
    fontSize: '$sm',
    lineHeight: '$base',
    color: '$gray400',
  },
})

export const CardCommentContent = styled('div', {})
