import styled, {css} from "styled-components";
import {useSelector} from "react-redux";
import {SlideAnimation} from "../../../feature/slide-animation";
import {StepCounter} from "./StepCounter";
import {SliderResults} from "./SliderResults";

export const SliderQuestions = ({currentStepId = 0, onSelectStep}) => {
  const questions = useSelector(state => state.slider.questions)

  const isCompleted = currentStepId === Object.keys(questions).length

  return (
    <SWrapper w100={isCompleted}>
      <StepCounter currentStepId={currentStepId} isCompleted={isCompleted} onSelectStep={onSelectStep} />
      {isCompleted  ? (
        <SliderResults />
      ) : (
        <STitle>
          <SlideAnimation>
            {questions[currentStepId]?.title}
          </SlideAnimation>
        </STitle>
      )}
    </SWrapper>
  )
}

const SWrapper = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.colors.base};
  width: 50%;
  height: 100%;
  transition: width .5s;
  padding: 3%;

  ${props => props.w100 && css`
    width: 100%;
    transition: width .5s;
  `}
`
const STitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 5%;
  ${(p) => p.theme.font.body.lead};
  color: ${(p) => p.theme.colors.text};
  cursor: pointer;
`
