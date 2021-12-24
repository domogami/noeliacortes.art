import React from 'react'
import Avatar from '../../images/hero.png'
import {
  HeroContainer,
  PhotoTextContainer,
  ImageContainer,
  SubTitle,
  TextContainer,
  Title,
  HeroPhoto,
} from './style'
import { GreenText } from '../../styles/globalStyle'

export default function Hero(props) {
  return (
    <HeroContainer>
      <PhotoTextContainer>
        <ImageContainer>
          <HeroPhoto src={Avatar} alt="Profile" className="profile-img" />
        </ImageContainer>
        <TextContainer>
          <Title>
            Noelia <GreenText>Cortes</GreenText>
          </Title>
          <SubTitle>
            Art History Student <br />
            UC <GreenText>Berkeley</GreenText>
          </SubTitle>
        </TextContainer>
      </PhotoTextContainer>
    </HeroContainer>
  )
}
