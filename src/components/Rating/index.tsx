// Styling Imports
import { RatingComponent } from './styles'

// Components Imports
import { VariantProps } from '@stitches/react'
import { useState } from 'react'

// Icons Imports
import { Star } from 'phosphor-react'

interface RatingProps extends VariantProps<typeof RatingComponent> {
  starSize: number
  rating: number
  onChange?: (rating: number) => void
}

export function Rating({ starSize, rating, onChange, ...rest }: RatingProps) {
  const [previewValue, setPreviewValue] = useState(0)
  const ratingValue = onChange ? previewValue : rating

  function handleMouseEnter(value: number) {
    onChange && setPreviewValue(value)
  }

  function handleMouseLeave() {
    onChange && setPreviewValue(rating)
  }

  return (
    <RatingComponent {...rest}>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={`start-${index}`}
          size={starSize}
          weight={index <= ratingValue ? 'fill' : 'regular'}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => (onChange ? onChange(index) : null)}
          style={onChange && { cursor: 'pointer' }}
        />
      ))}
    </RatingComponent>
  )
}
