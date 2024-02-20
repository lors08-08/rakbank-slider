import styled, {css} from "styled-components";
import LikeIcon from './img/like.png'
import DislikeIcon from './img/dislike.png'
import ThinkingIcon from './img/thinking-emoji.png'

const getReaction = (icon) => {
  switch (icon) {
    case 'like':
      return LikeIcon
    case 'dislike':
      return DislikeIcon
    default:
    case 'thinking':
      return ThinkingIcon
  }
}

/*
* Component that renders certain reaction.
*/
export const Reaction = ({isActive = false, icon, label,onClick}) => {
  const imageIcon = getReaction(icon)

  return (
      <SWrapper isActive={isActive} onClick={onClick}>
        <SImg src={imageIcon} alt='Dislike' />
        <SCaption>{label}</SCaption>
      </SWrapper>
  )
}

const SCaption = styled.div`
  opacity: 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #f6d56c;
`
const SImg = styled.img`
  width: 64px;
  height: 64px;
  transition: transform .3s;
  margin-bottom: 25px;
`
const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  
  ${(props) => props.isActive ? css`
    ${SCaption} {
      opacity: 1;
    }

    ${SImg} {
      transform: scale(1.4);
      transition: transform .3s;
    }
  ` : css`
    cursor: pointer;

    &:hover ${SCaption} {
      opacity: 1;
    }

    &:hover ${SImg} {
      transform: scale(1.4);
      transition: transform .3s;
    }
  `} 
`
