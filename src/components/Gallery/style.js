import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
  align-items: center;
  margin: 10vh auto;
`
export const Art = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  border-radius: 1.7em;
  padding: 20px;
  margin: auto;
`