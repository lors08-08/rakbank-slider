import {Reaction} from "../../../shared/ui/Reaction";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {SlideAnimation} from "../../../feature/slide-animation";

/*
* Display available reactions for the question.
*/
export const UsersReactions = ({currentStepId, onSelect, onToNext}) => {
  const questions = useSelector(state => state.slider.questions)
  const answered = useSelector(state => state.slider.answered)

  const currentAnswer = answered[currentStepId]

  return (
    <SWrapper>
      <SlideAnimation>
        {currentAnswer ? (
          <Reaction
            isActive={true}
            icon={currentAnswer.option.icon}
            label={currentAnswer.option.label}
            onClick={onToNext}
          />
        ) : (
          questions[currentStepId]?.options.map((reaction) => {
            const {icon, label} = reaction

            return (
              <Reaction
                key={icon}
                icon={icon}
                label={label}
                onClick={() => onSelect({icon, label})}
              />
            )
          })
        )}
      </SlideAnimation>
    </SWrapper>
  )
}

const SWrapper = styled.div`
  display: flex;
  width: 50%;
  height: fit-content;
  justify-content: space-around;
  margin: auto;
`
