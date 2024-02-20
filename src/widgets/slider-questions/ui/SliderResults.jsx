import {useSelector} from "react-redux";
import styled from "styled-components";
import {Reaction} from "../../../shared/ui/Reaction";

/*
* Displays the final results of questions and answers.
*/
export const SliderResults = () => {
  const answered = useSelector(state => state.slider.answered)
  const results = Object.values(answered)

  return (
    <SWrapper>
      {
        results?.map((reaction,idx) => {
          return (
            <SResultsList key={idx}>
              <SLabel>{reaction.title}</SLabel>
              <Reaction
                isActive={true}
                icon={reaction.option.icon}
                label={reaction.option.label}
              />
            </SResultsList>
          )
        })
      }
    </SWrapper>
  )
}

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 50px;
  overflow-y: scroll;
  width: 100%;
`
const SResultsList = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;
`
const SLabel = styled.div`
  font-size: 24px;
  color: #f6d56c;
`
