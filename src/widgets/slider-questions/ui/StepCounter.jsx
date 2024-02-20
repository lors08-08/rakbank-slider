import styled, {css} from "styled-components";
import {useSelector} from "react-redux";

/*
* Displays current step.
*/
export const StepCounter = ({currentStepId, isCompleted, onSelectStep}) => {
  const questions = useSelector(state => state.slider.questions)

  return (
    <SStepCounterWrapper>
      {questions?.map((_, idx) => (
        <SStepCounter key={idx} isActive={idx === currentStepId} onClick={() => isCompleted && onSelectStep(idx)} />
      ))}
    </SStepCounterWrapper>
  )

}
const SStepCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 15px;
  margin-right: 8%;
  cursor: pointer;

`
const SStepCounter = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid white;
  border-radius: 50%;
  background-color: white;

  ${props => props.isActive && css`
    background-color: transparent;
  `}
`
