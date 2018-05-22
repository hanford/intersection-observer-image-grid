import Observer from 'react-intersection-observer'
import { PureComponent } from 'react'
import styled, { keyframes } from 'react-emotion'

export default class LazyImage extends PureComponent {
  state = {
    loaded: false
  }

  handleChange = inView => {
    if (inView) {
      const img = new window.Image()

      img.src = this.props.src

      img.onload = () => {
        this.setState({ loaded: true })
      }
    }
  }

  render () {
    return (
      <Observer onChange={this.handleChange}>
        <Image src={this.state.loaded ? this.props.src : null} animate={this.state.loaded} />
      </Observer>
    )
  }
}

const fadeIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`

const Image = styled('img')`
  height: 120px;
  width: 120px;
  background-color: orange;
  opacity: 0;
  border: 0;
  animation: ${({ animate }) => animate ? fadeIn : ''} 0.4s linear forwards;
  animation-delay: 0.2s;
`
