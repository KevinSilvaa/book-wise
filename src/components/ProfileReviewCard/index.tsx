// Styling Imports
import {
  BookRating,
  ProfileCard,
  ProfileCardContainer,
  ProfileCardContent,
  ProfileCardInfos,
  ProfileCardTitle,
} from './styles'

// Strategic Imports
import Image from 'next/image'

// Icons Imports
import { Star } from 'phosphor-react'

// Image Imports
import bookCardImage from '@/assets/entendendo-algoritmos.png'

export function ProfileReviewCard() {
  return (
    <ProfileCardContainer>
      <h3>Há 2 dias</h3>

      <ProfileCard>
        <ProfileCardInfos>
          <Image src={bookCardImage} alt="" width={98} height={134} />

          <ProfileCardContent>
            <ProfileCardTitle>
              <strong>Entendendo Algoritmos</strong>
              <span>Aditya Bhargava</span>
            </ProfileCardTitle>

            <BookRating>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star />
            </BookRating>
          </ProfileCardContent>
        </ProfileCardInfos>
        <p>
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </ProfileCard>
    </ProfileCardContainer>
  )
}
