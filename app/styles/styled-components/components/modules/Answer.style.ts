import styled from 'styled-components';

export const AnswerStyle = styled.li`
  display: flex;
  width: 100%;
  height: auto;
  padding-top: 5px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  /* border-radius: 6px; */
  border-radius: 10px;
  background-color: ${({ theme }) => theme.backgrounds.background1};
  box-shadow: ${({ theme }) => theme.boxshadows.boxshadow4};
  align-items: center;
  justify-content: space-between;
`

export const LikeButtonsCont = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`

export const LikeButton = styled.button<{ changeDirection: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: transparent;
  transform: ${({ changeDirection }) => (changeDirection ? 'rotateY(180deg)' : 'rotate(0deg)')};
`

export const PersonCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 63px;
  /* height:93px;\ */
  margin-top: 10px;
  @media only screen and (max-width: 1375px) {
    flex-direction: row;
    width: 120px;
    height: auto;
    align-items: center;
    column-gap: 10px;
  }
`
export const Avatar = styled.div`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.backgrounds.background3};
  @media only screen and (max-width: 1375px) {
    width: 22px;
    height: 22px;
  }
`
export const Name = styled.span`
  font-size: 12px;
  margin-top: 18px;
  display: flex;
  opacity: 0.62;
  height: auto;
  width: 120%;
  display: -webkit-box;
  line-height: 18px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.texts.text2};
  @media only screen and (max-width: 1375px) {
    margin: 0px;
  }
`

export const AnswerContent = styled.p`
  width: 535px;
  height: 100%;
  margin-left: 22px;
  font-size: 15px;
  color: ${({ theme }) => theme.texts.text1};
  font-family: r;
  align-self: flex-start;
  line-height: 22px;
  margin-top: 2px;
  word-wrap: break-word;
`

export const AnswerContentSkeleton = styled.div`
  font-size: 15px;
  width: 500px;
  overflow: hidden;
  margin-top: 10px;
  color: black;
`

export const ShowCommentsCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  row-gap: 15px;
`
export const ShowComments = styled.button`
  border: none;
  padding: 0px;
  background-color: transparent;
  color: ${({ theme }) => theme.texts.text2};

  border-radius: 6px;
  padding: 5px 7px;
  cursor: pointer;
  column-gap: 5px;
  span,
  svg {
    color: ${({ theme }) => theme.texts.title2};
    font-size: 15px;
  }
  svg {
    font-size: 20px;
    margin-bottom: -2px;
    margin-right: 4px;
  }
`
