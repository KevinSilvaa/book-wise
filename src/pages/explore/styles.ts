import { styled } from '@/styles/stitches.config'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const ExploreContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  paddingBottom: '3rem',
  marginTop: '2rem',
})

export const ExploreHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  'div:last-child': {
    maxWidth: 433,
  },

  '@media (max-width: 900px)': {
    flexDirection: 'column',
    alignItems: 'normal',
    gap: '2rem',

    'div:last-child': {
      maxWidth: '100%',
    },
  },
})

export const HeaderTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',

  svg: {
    color: '$green100',
  },

  h1: {
    fontSize: '$2xl',
    lineHeight: '$short',
    color: '$gray100',
  },
})

export const ExploreContent = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
})

export const FilterTagsContainer = styled(ToggleGroup.Root, {
  display: 'flex',
  gap: '0.75rem',
  overflowX: 'auto',

  // Hide Scrollbar
  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',
})

export const FilterTagItem = styled(ToggleGroup.Item, {
  padding: '0.25rem 1rem',
  background: 'transparent',
  color: '$purple100',
  lineHeight: '$base',
  border: '1px solid $purple100',
  borderRadius: '$full',
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',

  '&:hover': {
    backgroundColor: '$purple200',
    color: '$white',
    borderColor: '$purple100',
  },

  '&[aria-checked="true"]': {
    backgroundColor: '$purple200',
    color: '$white',
    borderColor: '$purple200',
  },
})

export const BooksList = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  gap: '1.25rem',

  '@media (max-width: 1280px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },

  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr',
  },
})
