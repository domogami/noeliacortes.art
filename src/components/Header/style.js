import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  top: 0%;
  padding-left: 3%;
  padding-right: 3%;
  background-color: rgba(239, 238, 238, 1);
  z-index: 10;
  padding-right: 2%;
  width: 100vw;
`
export const Logo = styled.img`
  width: 100px;
  height: auto;
`
export const Text = styled.div`
  margin-right: 15%;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const SectionLink = styled.a`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  text-decoration: none;
  font-size: 1.6em;
  color: black;
  margin: auto;
  padding: 0 2vw;
`
