import Link from 'next/link'
import * as S from './styles'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import formatPrice from 'utils/formatPrice'
import CartButton from '../CartButon'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string | undefined
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  id,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav,
  slug
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to Wishlist" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
