import { PureComponent } from 'react'
import styled from 'react-emotion'

import Image from '../components/lazy-image'

if (typeof window !== 'undefined') {
  require('intersection-observer')
}

const cols = new Array(25).fill(true)
const rows = new Array(25).fill(true)
const colors = ['red', 'blue', 'green', 'purple', 'yellow']

export default class extends PureComponent {
  render () {
    return (
      <Container>
      {
        cols.map((c, index) => {
          return rows.map((r, i) => {
            const num = (Math.random() * 10).toFixed(0)
            const color = Math.floor(num / 2).toFixed(0)

            return (
              <div style={{width: 120}}>
                <Image
                  color={colors[color]}
                  src={`http://placeimg.com/25${num}/25${num}/any`}
                />
              </div>
            )
          })
        })
      }
      </Container>
    )
  }
}

const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 120px);
  grid-gap: 10px;
  width: 100%;
  justify-content: center;
`
