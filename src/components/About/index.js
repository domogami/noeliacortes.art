import React from 'react'
import Avatar from '../../images/Profile.jpeg'
import {
  Container,
  PhotoTextContainer,
  ImageContainer,
  SubTitle,
  TextContainer,
  Title,
  Photo,
} from './style'
import { GreenText } from '../../styles/globalStyle'

export default function About() {
  return (
    <Container>
      <PhotoTextContainer>
        <ImageContainer>
          <Photo src={Avatar} alt="Profile" className="profile-img" />
        </ImageContainer>
        <TextContainer>
          <Title>
            About <GreenText>Me</GreenText>
          </Title>
          <SubTitle>
            My name is Noelia Cortes and I'm a 3rd year History of Art and Legal Studies double Major at UC <GreenText>Berkeley</GreenText>. I enjoy reading and currently, my favorite book is <GreenText>Catch-22</GreenText>. I am a self taught artist and I am currently in search of experience in the field of <GreenText>Art History</GreenText>.
          </SubTitle>
        </TextContainer>
      </PhotoTextContainer>
    </Container>
  )
}
