import styled from 'styled-components'

export const QuestionCreateModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 50;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
`
export const QuestionCreateForm = styled.form`
  background-color: gray;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 20px;
  border-radius: 10px;
  height: auto;
`
export const DetailsCont_STY = styled.div`
  display: flex;
  width: 100%;
  border-radius: 10px;
  padding: 25px 48px;
  box-sizing: border-box;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgrounds.background2};
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow1};
  row-gap: 50px;
`

export const LabelCont = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  label {
    color: ${({ theme }) => theme.texts.text1};
  }
  .buttonSubmit {
    margin-top: 30px;
  }
`

export const BlurredEditor = styled.div<{ image: any }>`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  p {
    font-size: 20px;
    color: ${({ theme }) => theme.texts.text1};
  }
  width: 100%;
  height: 300px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-color: ${({ theme }) => theme.backgrounds.background2};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  button {
    background-color: ${({ theme }) => theme.backgrounds.background8};
    padding: 8px 15px;
    border-radius: 10px;
    color: ${({ theme }) => theme.texts.text5};
  }
`
