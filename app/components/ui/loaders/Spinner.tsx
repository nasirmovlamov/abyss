import styled from 'styled-components';

const SpinnerStyle = styled.div`
  backdrop-filter: blur(4px);
  background-color: rgba(42, 44, 49, 0.75);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid;
    border-color: transparent #fff #fff #fff;
    animation: loader 1.2s linear infinite;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Spinner = () => <SpinnerStyle></SpinnerStyle>

export default Spinner
